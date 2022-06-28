import { h, Fragment } from 'preact'
import styles from './styles.css'
import CameraIcon from '../../assets/icons/camera-icon'


const ScreenshotBtn = ({ addNewImage }) => {
  const video = document.createElement("video")
  const canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');


  const handleCapture = async () => {
    let w, h, ratio;

    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia(
        {
          video: true,
          audio: false
        }
      );
      video.srcObject = captureStream;
      video.height = window.innerHeight
      video.width = window.innerWidth
      video.autoplay = true
      video.crossOrigin = 'anonymous'
      video.addEventListener('loadedmetadata', function () {
        ratio = video.videoWidth / video.videoHeight;
        w = video.videoWidth - 100;
        h = parseInt(w / ratio, 10);
        canvas.width = w;
        canvas.height = h;
        context.fillRect(0, 0, w, h);
        context.drawImage(video, 0, 0, w, h);
        const frame = canvas.toDataURL('image/png')
        addNewImage({ category: "image", file: frame })
        captureStream.getTracks().forEach(track => track.stop());
      }, false);

    } catch (err) {
      console.error("Error: " + err);
    }
  };

  return (
    <>
      <button type="button" onClick={handleCapture} class={styles.__screenshotbtn}><CameraIcon /> Take screenshot</button>
    </>
  )
}

export default ScreenshotBtn