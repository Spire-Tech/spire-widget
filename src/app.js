import { h } from "preact";
import { useState, useEffect } from 'preact/hooks'
import styles from './app.css'
import Home from "./components/home/home";
import ToggleFeedbackBtn from "./components/toggleFeebackBtn/toggleFeedbackBtn";
import Navigation from "./context/NavigationContext";
import { getWidget } from './services'

const App = ({ token }) => {
  const [showFeedJet, setShowFeedJet] = useState(false)
  const [loading, setLoading] = useState(false)
  const [blocks, setBlocks] = useState([])
  const [businessName, setBusinessName] = useState('')

  const toggleFeedJet = () => {
    setShowFeedJet(status => !status)
  }

  const fetchWidget = async () => {
    try {
      setLoading(true)
      const data = await getWidget()
      setBusinessName(data.widget.businessName)
      setBlocks(data.widget.validatedFeedBlocks)
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
      <div class={`${styles.__feedjet}`}>
        {/* {showFeedJet && (
          <div class={styles.__feedjet_overlay}></div>
        )} */}
        {showFeedJet ? (
          <Home toggleFeedJet={toggleFeedJet} blocks={blocks} businessName={businessName} />
        ) : (
          <ToggleFeedbackBtn toggleFeedJet={toggleFeedJet} />
        )}

      </div>
    </Navigation>
  )
}

export default App;