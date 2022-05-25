import { h } from 'preact'
import styles from './styles.css'

const SubmitBanner = () => {
  return (
    <div class={styles.__container}>
      <div class={styles.__submitimg}><img src="embed.lottiefiles.com/animation/86372" alt="Thumbs up" /></div>
      <div class={styles.__container_header}>
        <h3 class={styles.__title}>Submission received!</h3>
        <p class={styles.__desc}>Thank you for taking the time to let us know about your experience.</p>
      </div>
    </div>
  )
}

export default SubmitBanner