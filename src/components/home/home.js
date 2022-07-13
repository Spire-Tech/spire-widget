import { h, Fragment } from 'preact'
import SpireIcon from '../../assets/icons/spire-icon'
import CloseIcon from '../../assets/icons/close-icon'
import styles from './home.css'
import ListWrapper from '../listWrapper/listWrapper'
import { useNavigation } from '../../context/NavigationContext'
import RateExperience from '../views/rateExperience'
import ReportIssue from '../views/reportIssue'
import FeatureRequest from '../views/featureRequest'

const Home = ({ positon, blocks, businessName, businessId, widgetId }) => {
  const { activeView, minimize, triggerMinimize } = useNavigation()

  const returnView = () => {
    switch (activeView.title) {
      case 'home':
        return <ListWrapper blocks={blocks} businessId={businessId} widgetId={widgetId} />
      case 'satisfactions':
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
      <button onClick={() => triggerMinimize(true)} class={`${styles.__box_btn} ${minimize ? styles.__hide : ''}`} aria-label="close menu">
        <CloseIcon />
      </button>
      <div role="menu" class={`${styles.__box} ${minimize ? styles.__hide : ''}`}>
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