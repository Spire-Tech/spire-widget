import { h } from 'preact'
import styles from './styles.css'
import ImageIcon from '../../assets/icons/image-icon'
import { useState } from 'preact/hooks'
import Menu from './Menu'


const ScreenshotBtn = ({ addNewImage }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div class={styles.__screenshotbtn_container}>
      <button onClick={() => setShowMenu(status => !status)} aria-haspopup="true" aria-expanded={showMenu} type="button" class={styles.__screenshotbtn}><ImageIcon /> Add Image</button>
      {showMenu && (
        <Menu addNewImage={addNewImage} closeMenu={() => setShowMenu(false)} />
      )}
    </div>
  )
}

export default ScreenshotBtn