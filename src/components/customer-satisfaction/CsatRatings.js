import { h } from 'preact'
import styles from './styles.css'
import { useState } from 'preact/hooks'
import NotSoGoodEmoji from './not-so-good'
import VeryBadEmoji from './very-bad'
import JustOkayEmoji from './just-okay'
import LovedItEmoji from './loved-it'

const CsatRatings = ({ setRatings }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    switch (e.target.value) {
      case 'very-bad':
        setRatings(1)
        break;
      case 'not-good':
        setRatings(2)
        break;
      case 'just-okay':
        setRatings(3)
        break;
      case 'loved-it':
        setRatings(4)
        break;
      default:
        setRatings(0)
        break;
    }
  }

  return (
    <div class={styles.__ratings} onChange={handleChange}>
      <label class={`${styles.__ratings_label} ${value === 'very-bad' && styles.__active}`}>
        <VeryBadEmoji active={value === 'very-bad'} />
        <span>Very Bad</span>
        <input class={styles.__ratings_input} type="radio" name="ratings" value="very-bad" />
      </label>
      <label class={`${styles.__ratings_label} ${value === 'not-good' && styles.__active}`}>
        <NotSoGoodEmoji active={value === 'not-good'} />
        <span>Not so good</span>
        <input class={styles.__ratings_input} type="radio" name="ratings" value="not-good" />
      </label>
      <label class={`${styles.__ratings_label} ${value === 'just-okay' && styles.__active}`}>
        <JustOkayEmoji active={value === 'just-okay'} />
        <span>Just Okay</span>
        <input class={styles.__ratings_input} type="radio" name="ratings" value="just-okay" />
      </label>
      <label class={`${styles.__ratings_label} ${value === 'loved-it' && styles.__active}`}>
        <LovedItEmoji active={value === 'loved-it'} />
        <span>I loved it</span>
        <input class={styles.__ratings_input} type="radio" name="ratings" value="loved-it" />
      </label>
    </div>
  )
}

export default CsatRatings