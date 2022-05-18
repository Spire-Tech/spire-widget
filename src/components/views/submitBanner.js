import styles from './styles.css'

const SubmitBanner = () => {
  return (
    <div class={styles.__container}>
      <div><img /></div>
      <div class={styles.__container_header}>
        <h3 class={styles.__title}>Submission received!</h3>
        <p class={styles.__desc}>IThank you for taking the time to let us know about your experience.</p>
      </div>
    </div>
  )
}