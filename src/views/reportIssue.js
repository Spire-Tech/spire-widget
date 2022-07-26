import { h, Fragment, createContext } from "preact";
import FormButton from "../components/formInput/FormButton"
import FormInput from "../components/formInput/FormInput"
import FormTextArea from "../components/formInput/FormTextarea"
import styles from './styles.css'
import BackIcon from "../assets/icons/back-icon";
import { useNavigation } from "../context/NavigationContext";
import { useState, useContext } from "preact/hooks"
import useValidate from "../hooks/useValidate";
import ScreenshotBtn from "../components/media/ScreenshotBtn";
import CancelImgIcon from "../assets/icons/cancel-img-icon";
import { handleMediaUpload } from "../services";
import SubmitBanner from "./submitBanner";
import { sendFeedback } from "../services"
import LoadingIcon from '../assets/icons/loading-icon'
import ScreenRecordBtn from "../components/media/ScreenrecordBtn";
import NewImage from "../components/media/NewImage";
import CanvasWrapper from "../components/canvas/canvasWrapper";

const ReportContext = createContext({addNewMedia: null, showCanvas: false, setShowConvas: null, initialShot: null, setInitialShot: null})

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
  const [media, setMedia] = useState([])
  const [mediaType, setMediaType] = useState(null)
  const [showCanvas, setShowCanvas] = useState(false)
  const [initialShot, setInitialShot] = useState(null)



  // const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
  //   (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)))

  const handleReportIssue = (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (emailError && messageError) {
      setSubmitting(false)
    } else {
      try {
        setLoading(true)
        const newMedia = []
        const uploadPromise = new Promise((resolve, reject) => {
          if (media.length) {
            media.forEach(async (item, index) => {
              const url = await handleMediaUpload(item.file)
              newMedia.push({ fileURL: url, category: item.category })
              if (index === (media.length - 1)) {
                resolve()
              }
            })
          } else {
            resolve()
          }
        })

        uploadPromise.then(async () => {
          const result = await sendFeedback({
            id: activeView.id,
            businessId: activeView.businessId,
            feedbackType: activeView.title,
            widgetId: activeView.widgetId,
            email: email,
            comment: message,
            media: newMedia,
            rating: 0
          })
          if (!result.error) {
            setSubmitted(true)
            setLoading(false)
            setEmail('')
            setMessage('')
            setTimeout(() => {
              updateActiveView('home')
            }, 4000)
          }

        })

      } catch (e) {
        setLoading(false)
        console.log(e, 'this is error')
      }
    }
  }

  const addNewMedia = (item) => {
    if(item.category === 'image') {
      setMediaType('IMAGE')
    }else {
      setMediaType('VIDEO')
    }
    const newMedia = [...media, item]
    setMedia(newMedia)
  }

  const removeMedia = (index) => {
    const newMedia = media.filter(item => media.indexOf(item) !== index)
    setMedia(newMedia)
  }

  return (
    <ReportContext.Provider value={{addNewMedia, showCanvas, setShowCanvas, initialShot, setInitialShot }}>
      <>
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
              {
                !media.length && (
                  <div class={styles.__action_flex}>
                    <ScreenshotBtn addNewImage={addNewMedia} />
                    <ScreenRecordBtn addNewVideo={addNewMedia} />
                  </div>
                )
              }
              
              {
                media.length ? (
                  <div class={styles.__images}>
                    {
                      media.map((item, index) => {
                        // const url = URL.createObjectURL(item.file);
                        return (
                          <div class={styles.__image} key={index}>
                            <button type="button" aria-label={`Remove ${item.category}`} onClick={() => removeMedia(index)} class={styles.__imagebtn}>
                              <CancelImgIcon />
                            </button>
                            {
                              item.category === "image" ? (
                                <img src={item.url ? item.url : item.file} alt="image file" />
                              ) : (
                                <img src="https://res.cloudinary.com/spire-tech/image/upload/v1656420275/icons/25481_glz2cs.jpg" alt="video file" />
                              )
                            }
                          </div>
                        )
                      })
                    }
                    {
                      mediaType === 'IMAGE' && (
                        <NewImage addNewImage={addNewMedia} />
                      )
                    }
                  </div>
                ) : null
              }
              <FormButton type="submit">{loading ? <LoadingIcon /> : 'Submit'}</FormButton>
            </form>
          </>
        )}
    </div>
    {showCanvas && <CanvasWrapper addNewImage={addNewMedia} />}
    </>
    </ReportContext.Provider>
  )
}

export default ReportIssue;

export const useReport = () => useContext(ReportContext)