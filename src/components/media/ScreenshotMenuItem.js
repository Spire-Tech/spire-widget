import { h } from 'preact'
import { useNavigation } from '../../context/NavigationContext'
import CameraIcon from "../../assets/icons/camera-icon"
import styles from './styles.css'
import { useReport } from '../../views/reportIssue'

const ScreenshotMenuItem = ({closeMenu}) => {
  const video = document.createElement("video")
  const canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');
  const { triggerMinimize } = useNavigation()
  const { setShowCanvas, setInitialShot } = useReport()


  const handleCapture = async () => {
    let w, h, ratio;

    try {
      triggerMinimize(true)
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
        setInitialShot({type: 'image', file: frame, url: null})
        setShowCanvas(true)
        captureStream.getTracks().forEach(track => track.stop());
        triggerMinimize(false)
        closeMenu()
        // addNewImage({ category: "image", file: frame })
      }, false);

    } catch (err) {
      triggerMinimize(false)
      console.error("Error: " + err);
    }
  };

  return (
    <li onClick={handleCapture} role="menuitem" class={styles.__menu_item}><CameraIcon /> Take a screenshot</li>
  )
}

export default ScreenshotMenuItem