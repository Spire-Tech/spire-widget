import { h, Fragment } from "preact";
import FormButton from "../formInput/FormButton"
import FormInput from "../formInput/FormInput"
import FormTextArea from "../formInput/FormTextarea"
import styles from './styles.css'
import BackIcon from "../../assets/icons/back-icon";
import { useNavigation } from "../../context/NavigationContext";
import { useState } from "preact/hooks"
import useValidate from "../../hooks/useValidate";
import ScreenshotBtn from "./ScreenshotBtn";
import CancelImgIcon from "../../assets/icons/cancel-img-icon";
import { handleImageUpload } from "../../services";
import SubmitBanner from "./submitBanner";
import { sendFeedback } from "../../services"
import LoadingIcon from '../../assets/icons/loading-icon'

const ReportIssue = () => {
  const { activeView, updateActiveView } = useNavigation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const checkEmail = (/^\S+@\S+$/.test(email))
  const checkMessage = message.length > 3
  const emailError = useValidate(email, checkEmail, submitting, 'Enter a valid email')
  const messageError = useValidate(message, checkMessage, submitting, 'Enter a longer request')
  const [images, setImages] = useState([])

  const handleReportIssue = (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (emailError && messageError) {
      setSubmitting(false)
    } else {
      try {
        setLoading(true)
        const media = []
        const uploadPromise = new Promise((resolve, reject) => {
          images.forEach(async (image, index) => {
            const url = await handleImageUpload(image)
            media.push({ fileUrl: url, category: "image" })
            if (index === (images.length - 1)) {
              resolve()
            }
          })
        })

        uploadPromise.then(async () => {
          console.log(media, 'this is media')
          const result = await sendFeedback(activeView.id, email, message, 0, media)
          setSubmitted(true)
          setLoading(false)
          setEmail('')
          setMessage('')
        })

      } catch (e) {
        setLoading(false)
        console.log(e, 'this is error')
      }
    }
  }

  const addNewImage = (img) => {
    const newImg = [...images, img]
    setImages(newImg)
  }

  const removeImg = (index) => {
    const newImages = images.filter(img => images.indexOf(img) !== index)
    setImages(newImages)
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
              <h3 class={styles.__title}>Report an issue</h3>
              <p class={styles.__desc}>Is something wrong? Let us know.</p>
            </div>

            <form onSubmit={handleReportIssue} class={styles.__form}>
              <FormInput label="What's your email?" type="email" placeholder="example@gmail.com" onInput={(e) => setEmail(e.target.value)} error={emailError} required />
              <FormTextArea label="What’s the issue?" placeholder="Tell us more about the issue you’re having. You can take a screenshot." onInput={(e) => setMessage(e.target.value)} error={messageError} required />
              <ScreenshotBtn addNewImage={addNewImage} />
              {
                images.length ? (
                  <div class={styles.__images}>
                    {
                      images.map((imgg, index) => (
                        <div class={styles.__image} key={index}>
                          <button type="button" aria-label="Remove Image" onClick={() => removeImg(index)} class={styles.__imagebtn}>
                            <CancelImgIcon />
                          </button>
                          <img src={imgg} alt="" />
                        </div>
                      ))
                    }
                  </div>
                ) : null
              }
              <FormButton type="submit">{loading ? <LoadingIcon /> : 'Submit'}</FormButton>
            </form>
          </>
        )}
    </div>
  )
}

export default ReportIssue;