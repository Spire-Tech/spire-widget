import { h } from 'preact'
import styles from './styles.css'

const SubmitBanner = () => {
  return (
    <div class={styles.__container}>
      <div class={styles.__submitimg}>
      <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_hudl912y.json" background="transparent" speed="1"
        style="width: 150px; height: 150px;" autoplay loop></lottie-player>
      </div>
      <div class={styles.__container_header}>
        <h3 class={styles.__title}>Submission received!</h3>
        <p class={styles.__desc}>Thank you for taking the time to let us know about your experience.</p>
      </div>
    </div>
  )
}

export default SubmitBanner