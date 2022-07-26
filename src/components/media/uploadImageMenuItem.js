import { h } from 'preact'
import UploadIcon from "../../assets/icons/upload-icon"
import styles from './styles.css'

const UploadImageMenuItem = ({ addNewImage, closeMenu}) => {
  const fileInput = document.createElement("input")
  fileInput.type = "file"

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
    <li onClick={handleSelectImage} role="menuitem" class={styles.__menu_item}><UploadIcon /> Upload Image</li>
  )
}

export default UploadImageMenuItem