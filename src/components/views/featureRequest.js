import { h } from "preact"
import FormButton from "../formInput/FormButton"
import FormInput from "../formInput/FormInput"
import FormTextArea from "../formInput/FormTextarea"
import styles from './styles.css'
import BackIcon from '../../assets/icons/back-icon'
import { useNavigation } from "../../context/NavigationContext"


const FeatureRequest = () => {
  const { updateActiveView } = useNavigation()
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

      <form class={styles.__form}>
        <FormInput label="What's your email?" type="email" placeholder="example@gmail.com" />
        <FormTextArea label="Tell us about this feature" placeholder="What are you looking to see and what’s the problem it solves." />
        <FormButton type="submit">Submit</FormButton>
      </form>
    </div>
  )
}

export default FeatureRequest