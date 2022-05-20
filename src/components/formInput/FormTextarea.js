import { h, Fragment } from "preact";
import styles from './styles.css'

const FormTextArea = ({ label, error, ...otherProps }) => {
  return (
    <div class={styles.__formcontrol}>
      <label class={styles.__label}>{label} <span>{otherProps.required ? (<><span>*</span>Required</>) : '(Optional)'}</span></label>
      <textarea class={`${styles.__textarea} ${error && styles.__error}`} {...otherProps} />
      <span class={styles.__error}>{error && error}</span>
    </div>
  )
}

export default FormTextArea