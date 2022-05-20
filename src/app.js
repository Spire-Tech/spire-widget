import { h } from "preact";
import { useState } from 'preact/hooks'
import styles from './app.css'
import Home from "./components/home/home";
import ToggleFeedbackBtn from "./components/toggleFeebackBtn/toggleFeedbackBtn";
import Navigation from "./context/NavigationContext";

const App = ({ token }) => {
  const [showFeedJet, setShowFeedJet] = useState(false)

  const toggleFeedJet = () => {
    setShowFeedJet(status => !status)
  }

  return (
    <Navigation>
      <div class={styles.__feedjet}>
        {showFeedJet && (
          <div class={styles.__feedjet_overlay}></div>
        )}
        {showFeedJet && (
          <Home toggleFeedJet={toggleFeedJet} />
        )}
        <ToggleFeedbackBtn toggleFeedJet={toggleFeedJet} />
      </div>
    </Navigation>
  )
}

export default App;