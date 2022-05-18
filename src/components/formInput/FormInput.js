import { h } from "preact";
import styles from './styles.css'

const FormInput = ({ label, reqText, ...otherProps }) => {
  return (
    <div class={styles.__formcontrol}>
      <label class={styles.__label}>{label}<span>{reqText}</span></label>
      <input class={styles.__input} {...otherProps} />
    </div>
  )
}

export default FormInput