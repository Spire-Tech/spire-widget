import { h } from 'preact'
import brandimg from '../../assets/images/flutterwave-logo.png'
import SpireIcon from '../../assets/icons/spire-icon'
import CloseIcon from '../../assets/icons/close-icon'
import styles from './home.css'
import ListWrapper from '../listWrapper/listWrapper'
import { useNavigation } from '../../context/NavigationContext'
import RateExperience from '../rateExperience/rateExperience'
import ReportIssue from '../reportIssue/reportIssue'
import FeatureRequest from '../featureRequest/featureRequest'

const Home = ({ toggleFeedJet }) => {
  const { activeView } = useNavigation()


  const returnView = () => {
    switch (activeView) {
      case 'home':
        return <ListWrapper />
      case 'rate-experience':
        return <RateExperience />
      case 'report-issue':
        return <ReportIssue />
      case 'feature-request':
        return <FeatureRequest />
      default:
        throw new Error('Invalid view')
    }
  }

  return (
    <div class={styles.__box}>
      <button onClick={toggleFeedJet} class={styles.__box_btn}>
        <CloseIcon />
      </button>
      {activeView}
      <div class={styles.__box_img}>
        <img src={brandimg} alt="" />
      </div>
      {
        returnView()
      }
      <div class={styles.__box_spire}>
        <SpireIcon />
        <div class={styles.__box_spire_text}>Powered by <a href="getspire.io">Spire</a> </div>
      </div>
    </div>
  )
}

export default Home