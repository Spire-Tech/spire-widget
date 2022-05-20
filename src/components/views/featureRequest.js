import { h } from "preact"
import FormButton from "../formInput/FormButton"
import FormInput from "../formInput/FormInput"
import FormTextArea from "../formInput/FormTextarea"
import styles from './styles.css'
import BackIcon from '../../assets/icons/back-icon'
import { useNavigation } from "../../context/NavigationContext"
import { useState } from "preact/hooks"
import useValidate from "../../hooks/useValidate"


const FeatureRequest = () => {
  const { updateActiveView } = useNavigation()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const checkEmail = (/^\S+@\S+$/.test(email))
  const checkMessage = message.length > 3
  const emailError = useValidate(email, checkEmail, submitting, 'Enter a valid email')
  const messageError = useValidate(message, checkMessage, submitting, 'Enter a longer request')


  const handleFeatureRequest = (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (emailError && messageError) {
      setSubmitting(false)
    } else {
      console.log(email, message, 'yooo')
    }
  }

  return (
    <div class={styles.__container}>
      <button onClick={() => updateActiveView('home')} class={styles.__backbtn}>
        <BackIcon />
        <span>Back</span>
      </button>
      <div class={styles.__container_header}>
        <h3 class={styles.__title}>Feature Request</h3>
        <p class={styles.__desc}>Got some ideas? Tell us about it.</p>
      </div>

      <form onSubmit={handleFeatureRequest} class={styles.__form}>
        <FormInput label="What's your email?" type="email" placeholder="example@gmail.com" value={email} onInput={(e) => setEmail(e.target.value)} error={emailError} required />
        <FormTextArea label="Tell us about this feature" placeholder="What are you looking to see and what’s the problem it solves." value={message} onInput={(e) => setMessage(e.target.value)} error={messageError} required />
        <FormButton type="submit">Submit</FormButton>
      </form>
    </div>
  )
}

export default FeatureRequest