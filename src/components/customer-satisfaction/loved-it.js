import { h } from "preact";

const LovedItEmoji = ({ active }) => {
  return active ? (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/lovedit-active_kmon4v.svg" alt="Loved It Emoji" />
  ) : (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/lovedit-inactive_o0m609.svg" alt="Loved It Emoji" />
  )
}

export default LovedItEmoji;