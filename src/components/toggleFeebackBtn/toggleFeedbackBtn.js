import { h } from 'preact'
import FeedjetIcon from '../../assets/icons/feedjet-icon'
import { useNavigation } from '../../context/NavigationContext'
import style from './toggleFeedback.css'

const ToggleFeedbackBtn = ({ toggleFeedJet }) => {
  const { triggerMinimize, minimize } = useNavigation()
  return (
    <button aria-haspopup="true" aria-expanded={!minimize} onClick={() => triggerMinimize(state => !state)} class={style.__btn}>
      <FeedjetIcon /> Leave feedback
    </button>
  )
}

export default ToggleFeedbackBtn