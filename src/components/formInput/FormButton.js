import { h } from "preact";
import styles from './styles.css'

const FormButton = ({ children, ...otherProps }) => {
  return (
    <button class={styles.__submitbtn}>
      {children}
    </button>
  )
}

export default FormButton