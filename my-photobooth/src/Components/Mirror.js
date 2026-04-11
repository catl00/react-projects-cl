// Utility to capture a frame from a video element into a canvas and return a data URL.
// This is intentionally a plain function (not a hook) so it can be reused across components.
export default function Mirror({ videoRef, canvasRef, mirrorCapture = false }) {
  const canvas = canvasRef && canvasRef.current;
  const video = videoRef && videoRef.current;

  if (!video || !canvas) {
    console.error('capturePhoto: missing video or canvas ref');
    return null;
  }

  const width = video.videoWidth || video.clientWidth || 640;
  const height = video.videoHeight || video.clientHeight || 480;

  if (!width || !height) {
    console.error('Video Dimensions are not available.');
    return null;
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (mirrorCapture) {
    ctx.save();
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, width, height);
    ctx.restore();
  } else {
    ctx.drawImage(video, 0, 0, width, height);
  }

  try {
    return canvas.toDataURL('image/png');
  } catch (err) {
    console.error('Failed to export image from canvas', err);
    return null;
  }
}
