import { h, Fragment } from "preact";
import styles from './styles.css'

const FormTextArea = ({ error, ...otherProps }) => {
  return (
    <div class={styles.__formcontrol}>
      <textarea class={`${styles.__textarea} ${error && styles.__error}`} {...otherProps} />
      <span class={styles.__error}>{error && error}</span>
    </div>
  )
}

export default FormTextArea