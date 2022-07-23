import { h, Fragment } from 'preact'
import styles from './styles.css'
import CameraIcon from '../../assets/icons/camera-icon'

const UploadBtn = ({ addNewImage }) => {

  const handleSelectImage = (e) => {
    const fileList = Array.from(e.target.files);
    if (!fileList) return;
    fileList.forEach((file) => {
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 2) {
        alert('Image size exceeds 2mb, Upload a smaller image')
      } else {
        const imgsrc = URL.createObjectURL(file);
        addNewImage({ file: file, category: "image", url: imgsrc });
      }
    })
  }

  return (
    <>
      <label role="button" class={styles.__screenshotbtn}><input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleSelectImage} /><CameraIcon /> Upload Image</label>
    </>
  )
}

export default UploadBtn