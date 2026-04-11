import React from "react";

const Display = ({ imageURL, savePhoto, frameImage}) => {
    return (
        <div>
            <p>Download Your Photo to Your Local Device</p>
            <img src={imageURL} alt="Captured" className="border"/>
            <div>
                <button className="button" onClick={savePhoto}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default Display;