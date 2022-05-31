import { h } from "preact";

const JustOkayEmoji = ({ active }) => {
  return active ? (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/justokay-active_p2uaso.svg" alt="Just Okay Emoji" />
  ) : (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911860/icons/justokay-inactive_or7pq7.svg" alt="Just Okay Emoji" />
  )
}

export default JustOkayEmoji;