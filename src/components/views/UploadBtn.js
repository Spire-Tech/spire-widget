import { h, Fragment } from 'preact'
import styles from './styles.css'
import CameraIcon from '../../assets/icons/camera-icon'

const UploadBtn = () => {
  <>
    <button type="button" class={styles.__screenshotbtn}><CameraIcon /> Upload Image</button>
  </>
}

export default UploadBtn