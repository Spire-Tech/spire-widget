import { h, Fragment } from "preact"
import FormButton from "../formInput/FormButton"
import FormInput from "../formInput/FormInput"
import FormTextArea from "../formInput/FormTextarea"
import styles from './styles.css'
import BackIcon from '../../assets/icons/back-icon'
import { useNavigation } from "../../context/NavigationContext"
import { useState } from "preact/hooks"
import useValidate from "../../hooks/useValidate"
import CsatRatings from "../customer-satisfaction/CsatRatings"
import { sendFeedback } from "../../services"
import SubmitBanner from "./submitBanner"
import LoadingIcon from '../../assets/icons/loading-icon'


const RateExperience = () => {
  const { activeView, updateActiveView } = useNavigation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [ratings, setRatings] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const checkEmail = (/^\S+@\S+$/.test(email))
  const emailError = useValidate(email, checkEmail, submitting, 'Enter a valid email')


  const handleRateExperience = async (e) => {
    console.log(ratings, 'this is ratinsss')
    e.preventDefault()
    setSubmitting(true)
    if (emailError && messageError) {
      setSubmitting(false)
    } else {
      try {
        setLoading(true)
        const result = await sendFeedback(activeView.id, email, message, ratings)
        setSubmitted(true)
        setEmail('')
        setMessage('')
        setLoading(false)
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
            <button onClick={() => updateActiveView('home')} class={styles.__backbtn}>
              <BackIcon />
              <span>Back</span>
            </button>
            <div class={styles.__container_header}>
              <h3 class={styles.__title}>How was your experience</h3>
              <p class={styles.__desc}>Let us know how we can improve.</p>
            </div>
            <form onSubmit={handleRateExperience} class={styles.__form}>
              <CsatRatings setRatings={setRatings} />
              {
                ratings ? (
                  <>
                    <FormInput label="What's your email?" type="email" placeholder="example@gmail.com" onInput={(e) => setEmail(e.target.value)} error={emailError} required />
                    <FormTextArea label="Leave us a comment" placeholder="Let us know how we can improve" onInput={(e) => setMessage(e.target.value)} />
                    <FormButton type="submit">{loading ? <LoadingIcon /> : 'Submit'}</FormButton>
                  </>
                ) : null
              }
            </form>
          </>
        )
      }

    </div>
  )
}

export default RateExperience