import { h } from "preact";
import styles from './styles.css'

const FormTextArea = ({ label, reqText, ...otherProps }) => {
  return (
    <div class={styles.__formcontrol}>
      <label class={styles.__label}>{label}<span>{reqText}</span></label>
      <textarea class={styles.__textarea} {...otherProps} />
    </div>
  )
}

export default FormTextArea