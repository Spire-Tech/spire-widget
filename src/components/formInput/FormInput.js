import { h, Fragment } from "preact";
import styles from './styles.css'

const FormInput = ({ error, ...otherProps }) => {
  return (
    <div class={styles.__formcontrol}>
      <input class={`${styles.__input} ${error && styles.__error}`} {...otherProps} />
      <span class={styles.__error}>{error && error}</span>
    </div>
  )
}

export default FormInput