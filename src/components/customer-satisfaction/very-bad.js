import { h } from "preact";

const VeryBadEmoji = ({ active }) => {
  return active ? (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/bad-active_rwjzk1.svg" alt="Just Okay Emoji" />
  ) : (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/bad-inactive_fpjl88.svg" alt="Just Okay Emoji" />
  )
}

export default VeryBadEmoji;