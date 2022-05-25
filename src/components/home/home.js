import { h, Fragment } from 'preact'
import brandimg from '../../assets/images/flutterwave-logo.png'
import SpireIcon from '../../assets/icons/spire-icon'
import CloseIcon from '../../assets/icons/close-icon'
import styles from './home.css'
import ListWrapper from '../listWrapper/listWrapper'
import { useNavigation } from '../../context/NavigationContext'
import RateExperience from '../views/rateExperience'
import ReportIssue from '../views/reportIssue'
import FeatureRequest from '../views/featureRequest'

const Home = ({ toggleFeedJet, blocks, businessName }) => {
  const { activeView } = useNavigation()

  const returnView = () => {
    switch (activeView.title) {
      case 'home':
        return <ListWrapper blocks={blocks} />
      case 'ratings':
        return <RateExperience />
      case 'issue-reports':
        return <ReportIssue />
      case 'feature-requests':
        return <FeatureRequest />
      default:
        throw new Error('Invalid view')
    }
  }

  return (
    <>
      <button onClick={toggleFeedJet} class={styles.__box_btn}>
        <CloseIcon />
      </button>
      <div class={styles.__box}>
        <div class={styles.__box_title}>
          <h5>{businessName}</h5>
        </div>
        {
          returnView()
        }
        <div class={styles.__box_spire}>
          <SpireIcon />
          <div class={styles.__box_spire_text}>Powered by <a href="https://getspire.io" target="_blank">Spire</a> </div>
        </div>
      </div>
    </>
  )
}

export default Home