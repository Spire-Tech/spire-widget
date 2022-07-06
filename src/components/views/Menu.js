import { h } from 'preact'
import { useNavigation } from '../../context/NavigationContext'
import CameraIcon from "../../assets/icons/camera-icon"
import UploadIcon from "../../assets/icons/upload-icon"
import styles from './styles.css'


const Menu = ({ addNewImage, closeMenu }) => {
  const video = document.createElement("video")
  const canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');
  const fileInput = document.createElement("input")
  fileInput.type = "file"
  const { triggerMinimize } = useNavigation()


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
        addNewImage({ category: "image", file: frame })
        captureStream.getTracks().forEach(track => track.stop());
      }, false);
      closeMenu()
      triggerMinimize(false)

    } catch (err) {
      triggerMinimize(false)
      console.error("Error: " + err);
    }
  };

  const handleSelectImage = () => {
    fileInput.click()
    fileInput.onchange = () => {
      const fileList = Array.from(fileInput.files);
      if (!fileList) return;
      fileList.forEach((file) => {
        const fileSize = file.size / 1024 / 1024;
        if (fileSize > 2) {
          alert('Image size exceeds 2mb, Upload a smaller image')
        } else {
          const imgsrc = window.URL.createObjectURL(file);
          addNewImage({ file: file, category: "image", url: imgsrc });
        }
      })
      closeMenu()
    }
  }


  return (
    <ul role="menu" class={styles.__menu}>
      <li onClick={handleCapture} role="menuitem" class={styles.__menu_item}><CameraIcon /> Take a screenshot</li>
      <li onClick={handleSelectImage} role="menuitem" class={styles.__menu_item}><UploadIcon /> Upload Image</li>
    </ul>
  )
}

export default Menu