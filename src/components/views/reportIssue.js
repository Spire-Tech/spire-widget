import { h } from "preact";
import FormButton from "../formInput/FormButton"
import FormInput from "../formInput/FormInput"
import FormTextArea from "../formInput/FormTextarea"
import styles from './styles.css'
import CameraIcon from '../../assets/icons/camera-icon'
import BackIcon from "../../assets/icons/back-icon";
import { useNavigation } from "../../context/NavigationContext";

const ReportIssue = () => {
  const { updateActiveView } = useNavigation()

  return (
    <div class={styles.__container}>
      <button onClick={() => updateActiveView('home')} class={styles.__backbtn}>
        <BackIcon />
        <span>Back</span>
      </button>
      <div class={styles.__container_header}>
        <h3 class={styles.__title}>Report an issue</h3>
        <p class={styles.__desc}>Is something wrong? Let us know.</p>
      </div>

      <form class={styles.__form}>
        <FormInput label="What's your email?" type="email" placeholder="example@gmail.com" />
        <FormTextArea label="What’s the issue?" placeholder="Tell us more about the issue you’re having. You can take a screenshot." />
        <button class={styles.__screenshotbtn}><CameraIcon /> Take screenshot</button>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </div>
  )
}

export default ReportIssue;