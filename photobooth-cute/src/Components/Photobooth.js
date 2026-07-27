import { useRef, useState, useEffect, useCallback } from 'react';
import Webcam from "react-webcam";
import '../Styles/Photobooth.css';

const frameOptions = [
    "/Assets/frames/music-pb.png",
    "/Assets/frames/Blue-Star.png"
];

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function PhotoBooth() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [selectedFrame, setSelectedFrame] = useState(null);
    const [mode, setMode] = useState("photo"); // "photo" | "decorate"
    const [photos, setPhotos] = useState([]);
    const [photoCount, setPhotoCount] = useState(0);
    const [canTakePhoto, setCanTakePhoto] = useState(true);
    const [draggingPhoto, setDraggingPhoto] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [countdown, setCountdown] = useState(null);

    // Load the selected frame image and store it in state
    const [frameImage, setFrameImage] = useState(null);

    const frameWidth = frameImage ? frameImage.width : 1000;
    const frameHeight = frameImage ? frameImage.height : 2400;

    // Proportions for the photo strip template
    const SLOT_WIDTH = frameWidth * 0.792;   // 812px
    const SLOT_HEIGHT = frameHeight * 0.1820; // ~475px height

    const slotX = frameWidth * 0.101;        // 101px left margin

    const slots = [
        { x: slotX, y: frameHeight * 0.0820 }, // ~197px Y (bumped down slightly)
        { x: slotX, y: frameHeight * 0.2953 }, // ~715px Y
        { x: slotX, y: frameHeight * 0.5087 }, // ~1233px Y
    ];

    // Load template image on selection
    useEffect(() => {
        if (!selectedFrame) {
            setFrameImage(null);
            return;
        }
        const img = new Image();
        img.src = selectedFrame;
        img.onload = () => setFrameImage(img);
    }, [selectedFrame]);

    // Canvas drawing function wrapped in useCallback
    const drawCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !frameImage) return;

        const ctx = canvas.getContext("2d");
        const currentFrameWidth = frameImage.width;
        const currentFrameHeight = frameImage.height;

        if (canvas.width !== currentFrameWidth || canvas.height !== currentFrameHeight) {
            canvas.width = currentFrameWidth;
            canvas.height = currentFrameHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Render uploaded/captured photos inside clipped bounding slots
        photos.forEach(p => {
            const slot = slots[p.slotIndex];
            if (!slot) return;

            const drawW = p.img.width * p.scale;
            const drawH = p.img.height * p.scale;
            const dX = slot.x + p.offsetX;
            const dY = slot.y + p.offsetY;

            // --- ADD DEBUG OUTLINE HERE ---
            // ctx.strokeStyle = "red";
            // ctx.lineWidth = 4;
            // ctx.strokeRect(slot.x, slot.y, SLOT_WIDTH, SLOT_HEIGHT);
            // ------------------------------

            ctx.save();
            ctx.beginPath();
            ctx.rect(slot.x, slot.y, SLOT_WIDTH, SLOT_HEIGHT);

            ctx.clip();
            ctx.drawImage(p.img, dX, dY, drawW, drawH);
            ctx.restore();
        });

        // Draw dynamic frame overlay over photos
        ctx.drawImage(frameImage, 0, 0, currentFrameWidth, currentFrameHeight);
    }, [frameImage, photos, SLOT_WIDTH, SLOT_HEIGHT, slots]);

    // Redraw whenever relevant state changes
    useEffect(() => {
        drawCanvas();
    }, [drawCanvas]);

    // Add photo with 'object-fit: cover' auto-scaling
    const addPhoto = (imgElement) => {
        if (photoCount >= 3) return;

        const scaleX = SLOT_WIDTH / imgElement.width;
        const scaleY = SLOT_HEIGHT / imgElement.height;
        const scale = Math.max(scaleX, scaleY);

        const drawW = imgElement.width * scale;
        const drawH = imgElement.height * scale;

        const offsetX = (SLOT_WIDTH - drawW) / 2;
        const offsetY = (SLOT_HEIGHT - drawH) / 2;

        setPhotos(prev => [
            ...prev,
            {
                img: imgElement,
                slotIndex: photoCount,
                offsetX,
                offsetY,
                scale
            }
        ]);

        setCanTakePhoto(true);
        setPhotoCount(prevCount => {
            const next = prevCount + 1;
            if (next === 3) setMode("decorate");
            return next;
        });
    };

    const takePhotoNow = () => {
        const src = webcamRef.current?.getScreenshot();
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => addPhoto(img);
    };

    const capturePhoto = () => {
        if (!canTakePhoto || countdown !== null) return;

        setCanTakePhoto(false);
        setCountdown(3);

        let current = 3;
        const interval = setInterval(() => {
            current -= 1;
            if (current === 0) {
                clearInterval(interval);
                setCountdown(null);
                takePhotoNow();
            } else {
                setCountdown(current);
            }
        }, 1000);
    };

    const uploadPhoto = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => addPhoto(img);
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    };

    const redoLastPhoto = () => {
        if (!photos.length) return;
        setPhotos(p => p.slice(0, -1));
        setPhotoCount(c => Math.max(0, c - 1));
        setCanTakePhoto(true);
        if (mode === "decorate") setMode("photo");
    };

    const downloadPhoto = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement("a");
        link.download = "music-photobooth.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    // Generalized pointer coordinate calculator (Mouse + Touch)
    const getCoords = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const r = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const x = (clientX - r.left) * (canvas.width / r.width);
        const y = (clientY - r.top) * (canvas.height / r.height);
        return { x, y };
    };

    const handlePointerDown = (e) => {
        const { x, y } = getCoords(e);
        if (mode === "photo") {
            for (let i = photos.length - 1; i >= 0; i--) {
                const p = photos[i];
                const slot = slots[p.slotIndex];
                if (!slot) continue;

                const w = p.img.width * p.scale;
                const h = p.img.height * p.scale;

                if (
                    x >= slot.x + p.offsetX &&
                    x <= slot.x + p.offsetX + w &&
                    y >= slot.y + p.offsetY &&
                    y <= slot.y + p.offsetY + h
                ) {
                    setDraggingPhoto(i);
                    setDragOffset({
                        x: x - slot.x - p.offsetX,
                        y: y - slot.y - p.offsetY
                    });
                    return;
                }
            }
        }
    };

    const handlePointerMove = (e) => {
        if (draggingPhoto === null || mode !== "photo") return;

        // Prevent touchscreen scrolling while dragging photos on canvas
        if (e.cancelable) e.preventDefault();

        const { x, y } = getCoords(e);

        setPhotos(prev => {
            const updated = [...prev];
            const p = { ...updated[draggingPhoto] };
            const slot = slots[p.slotIndex];
            if (!slot) return prev;

            const w = p.img.width * p.scale;
            const h = p.img.height * p.scale;

            let newOffsetX = x - slot.x - dragOffset.x;
            let newOffsetY = y - slot.y - dragOffset.y;

            const minOffsetX = SLOT_WIDTH - w;
            const minOffsetY = SLOT_HEIGHT - h;

            // Constrain dragging strictly within slot dimensions
            newOffsetX = minOffsetX < 0 ? Math.min(Math.max(newOffsetX, minOffsetX), 0) : 0;
            newOffsetY = minOffsetY < 0 ? Math.min(Math.max(newOffsetY, minOffsetY), 0) : 0;

            updated[draggingPhoto] = {
                ...p,
                offsetX: newOffsetX,
                offsetY: newOffsetY
            };
            return updated;
        });
    };

    const handlePointerUp = () => {
        setDraggingPhoto(null);
    };

    return (
        <div className="centerCol">
            <div className="topBar">
                {selectedFrame && (
                    <button
                        className="buttonStyle backButton"
                        onClick={() => {
                            setSelectedFrame(null);
                            setMode("photo");
                            setPhotos([]);
                            setPhotoCount(0);
                            setCanTakePhoto(true);
                        }}
                    >
                        Back
                    </button>
                )}

                <h1 className="titleBar">
                    {!selectedFrame
                        ? "Select a Frame"
                        : mode === "photo"
                            ? `Take Photo ${photoCount + 1}/3`
                            : "Decorate Your Photo"
                    }
                </h1>
            </div>

            <div className="contentArea">
                {!selectedFrame ? (
                    <div className="frameGrid">
                        {frameOptions.map((src, index) => {
                            const isSelected = selectedFrame === src;
                            return (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Frame ${index + 1}`}
                                    className={`frameThumb${isSelected ? " selected" : ""}`}
                                    onClick={() => setSelectedFrame(src)}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="mainRow">
                        <div>
                            {mode === "photo" && (
                                <>
                                    <div className="webcamWrapper">
                                        <Webcam
                                            ref={webcamRef}
                                            audio={false}
                                            videoConstraints={videoConstraints}
                                            className="webcamStyle"
                                            mirrored={true}
                                            screenshotFormat="image/jpeg"
                                        />
                                        {countdown !== null && (
                                            <div className="countdownOverlay">
                                                {countdown}
                                            </div>
                                        )}
                                    </div>
                                    <div className="buttonRow">
                                        {canTakePhoto && (
                                            <>
                                                <button 
                                                    className="buttonStyle" 
                                                    onClick={capturePhoto} 
                                                    disabled={!canTakePhoto || countdown !== null}
                                                >
                                                    Take Photo
                                                </button>
                                                <label className="buttonStyle uploadLabel">
                                                    Upload Photo
                                                    <input 
                                                        type="file" 
                                                        accept="image/*" 
                                                        onChange={uploadPhoto} 
                                                        style={{ display: "none" }} 
                                                    />
                                                </label>
                                            </>
                                        )}
                                        {photoCount > 0 && (
                                            <button className="buttonStyle redoButton" onClick={redoLastPhoto}>
                                                Redo Last Photo
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            <canvas
                                ref={canvasRef}
                                className="canvasStyle"
                                onMouseDown={handlePointerDown}
                                onMouseMove={handlePointerMove}
                                onMouseUp={handlePointerUp}
                                onMouseLeave={handlePointerUp}
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                onTouchStart={handlePointerDown}
                                onTouchMove={handlePointerMove}
                                onTouchEnd={handlePointerUp}
                                style={{ touchAction: "none" }} // Stops page scrolling while dragging on touch screens
                            />

                            {mode === "decorate" && (
                                <div className="downloadRow">
                                    <button className="buttonStyle" onClick={downloadPhoto}>
                                        Download
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}