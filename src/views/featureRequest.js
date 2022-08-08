import { h, Fragment } from "preact"
import FormButton from "../components/formInput/FormButton"
import FormInput from "../components/formInput/FormInput"
import FormTextArea from "../components/formInput/FormTextarea"
import styles from './styles.css'
import { useNavigation } from "../context/NavigationContext"
import { useState } from "preact/hooks"
import useValidate from "../hooks/useValidate"
import { sendFeedback } from "../services"
import SubmitBanner from './submitBanner'
import LoadingIcon from '../assets/icons/loading-icon'


const FeatureRequest = () => {
  const { activeView } = useNavigation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const checkEmail = (/^\S+@\S+$/.test(email))
  const checkMessage = message.length > 3
  const emailError = useValidate(email, checkEmail, submitting, 'Enter a valid email')
  const messageError = useValidate(message, checkMessage, submitting, 'Enter a longer request')


  const handleFeatureRequest = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (emailError && messageError) {
      setSubmitting(false)
    } else {
      try {
        setLoading(true)
        const res = await sendFeedback({
          id: activeView.id,
          businessId: activeView.businessId,
          feedbackType: activeView.title,
          widgetId: activeView.widgetId,
          email: email,
          comment: message,
          media: [],
          rating: 0
        })
        if (!res.error) {
          setSubmitted(true)
          setLoading(false)
          setEmail('')
          setMessage('')
        }
      } catch (e) {
        setLoading(false)
        console.log(e, 'this is error')
      }
    }
  }

  return (
    <div class={styles.__container}>
      {
        submitted ? (
          <SubmitBanner />
        ) : (
          <>
            <div class={styles.__container_header}>
              <h3 class={styles.__title}>Feature Request</h3>
              <p class={styles.__desc}>Got some ideas? Tell us about it.</p>
            </div>

            <form onSubmit={handleFeatureRequest} class={styles.__form}>
              <FormInput type="email" placeholder="Your email address" value={email} onInput={(e) => setEmail(e.target.value)} error={emailError} required />
              <FormTextArea placeholder="What are you looking to see and what’s the problem it solves." value={message} onInput={(e) => setMessage(e.target.value)} error={messageError} required />
              <FormButton type="submit">{loading ? <LoadingIcon /> : 'Submit'}</FormButton>
            </form>
          </>
        )
      }
    </div>
  )
}

export default FeatureRequest