import { h } from "preact";
import { useState, useEffect } from 'preact/hooks'
import styles from './app.css'
import Home from "./views/home";
import ToggleFeedbackBtn from "./components/toggleFeebackBtn/toggleFeedbackBtn";
import Navigation from "./context/NavigationContext";
import { getWidget } from './services'
import { handlePostioning } from "./utils";

const App = ({ token }) => {
  const [loading, setLoading] = useState(false)
  const [blocks, setBlocks] = useState([])
  const [businessName, setBusinessName] = useState('')
  const [businessId, setBusinessId] = useState('')
  const [widgetId, setWidgetId] = useState('')
  const [position, setPosition] = useState('')

  const fetchWidget = async () => {
    try {
      setLoading(true)
      const data = await getWidget()
      // console.log(data, 'this is widget data')
      setBusinessName(data.data.businessName || data.data.title)
      setBusinessId(data.data.businessId)
      setWidgetId(data.data.id)
      setBlocks(data.data.blocks)
      setPosition(data.data.feedbackButtonStyles.buttonPosition)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }

  }

  useEffect(() => {
    fetchWidget()
  }, [])

  return (
    <Navigation>
      {
        !loading && (
        <div class={`${styles.__feedjet} ${styles[handlePostioning(position)]}`}>
          <Home blocks={blocks} businessName={businessName} businessId={businessId} widgetId={widgetId} position={position} />
          <ToggleFeedbackBtn position={position} />
      </div>
        )
      }
    </Navigation>
  )
}

export default App;