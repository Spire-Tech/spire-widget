import { h } from 'preact'
import styles from './styles.css'
import ScreenshotMenuItem from './ScreenshotMenuItem'
import UploadImageMenuItem from './uploadImageMenuItem'


const Menu = ({ addNewImage, closeMenu }) => {


  return (
    <ul role="menu" class={styles.__menu}>
      <ScreenshotMenuItem addNewImage={addNewImage} closeMenu={closeMenu} />
      <UploadImageMenuItem addNewImage={addNewImage} closeMenu={closeMenu} />
    </ul>
  )
}

export default Menu