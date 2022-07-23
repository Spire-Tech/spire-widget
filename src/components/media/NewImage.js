import { h } from "preact"
import PlusIcon from "../../assets/icons/plus-icon"
import Menu from "./Menu"
import { useState } from 'preact/hooks'
import styles from './styles.css'


const NewImage = ({ addNewImage }) => {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <div class={styles.__add_image}>
      <button onClick={() => setShowMenu(status => !status)} type="button" aria-haspopup="true" aria-expanded={showMenu} aria-label="Add Image" class={styles.__add_image_btn}>
        <PlusIcon />
      </button>
      {showMenu && (
        <Menu addNewImage={addNewImage} closeMenu={() => setShowMenu(false)} />
      )}
    </div>
  )
}

export default NewImage