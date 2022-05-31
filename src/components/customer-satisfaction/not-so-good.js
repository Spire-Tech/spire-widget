import { h } from "preact";

const NotSoGoodEmoji = ({ active }) => {
  return active ? (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911862/icons/notsogood-active_it2v0d.svg" alt="Not so good emoji" />
  ) : (
    <img src="https://res.cloudinary.com/spire-tech/image/upload/v1653911862/icons/notsogood-inactive_hef4ix.svg" alt="Not so good emoji" />
  )
}

export default NotSoGoodEmoji;