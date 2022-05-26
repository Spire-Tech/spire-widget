import { h } from 'preact'
import styles from './styles.css'
import StarIcon from '../../assets/icons/star-icon'
import { useState } from 'preact/hooks'

const RatingsComponent = ({ setRatings }) => {
  const [value, setValue] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value)
    setRatings(e.target.value)
  }

  const handleVisual = (state) => {
    switch (state) {
      case 1:
        return (value == 1) || (value == 2) || (value == 3) || (value == 4) || (value == 5)
      case 2:
        return (value == 2) || (value == 3) || (value == 4) || (value == 5)
      case 3:
        return (value == 3) || (value == 4) || (value == 5)
      case 4:
        return (value == 4) || (value == 5)
      case 5:
        return value == 5
      default:
        throw new Error('Invalid state')
    }
  }

  return (
    <div class={styles.__ratings} onChange={handleChange}>
      <label class={`${styles.__ratings_btn} ${handleVisual(1) && styles.__active}`}>
        <StarIcon />
        <input class={styles.__ratings_input} type="radio" name="ratings" value={1} />
      </label>
      <label class={`${styles.__ratings_btn} ${handleVisual(2) && styles.__active}`}>
        <StarIcon />
        <input class={styles.__ratings_input} type="radio" name="ratings" value={2} />
      </label>
      <label class={`${styles.__ratings_btn} ${handleVisual(3) && styles.__active}`}>
        <StarIcon />
        <input class={styles.__ratings_input} type="radio" name="ratings" value={3} />
      </label>
      <label class={`${styles.__ratings_btn} ${handleVisual(4) && styles.__active}`}>
        <StarIcon />
        <input class={styles.__ratings_input} type="radio" name="ratings" value={4} />
      </label>
      <label class={`${styles.__ratings_btn} ${handleVisual(5) && styles.__active}`}>
        <StarIcon />
        <input class={styles.__ratings_input} type="radio" name="ratings" value={5} />
      </label>
    </div>
  )
}

export default RatingsComponent