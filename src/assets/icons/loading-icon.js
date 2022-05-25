import { h } from 'preact'

const LoadingIcon = () => (
  <svg width="64px" height="64px" viewBox="0 0 128 128" ><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" /><g><circle cx="16" cy="64" r="16" fill="#212020" /><circle cx="16" cy="64" r="16" fill="#6b6a6a" transform="rotate(45,64,64)" /><circle cx="16" cy="64" r="16" fill="#a2a1a1" transform="rotate(90,64,64)" /><circle cx="16" cy="64" r="16" fill="#d3d2d2" transform="rotate(135,64,64)" /><circle cx="16" cy="64" r="16" fill="#e5e5e5" transform="rotate(180,64,64)" /><circle cx="16" cy="64" r="16" fill="#e5e5e5" transform="rotate(225,64,64)" /><circle cx="16" cy="64" r="16" fill="#e5e5e5" transform="rotate(270,64,64)" /><circle cx="16" cy="64" r="16" fill="#e5e5e5" transform="rotate(315,64,64)" /><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="960ms" repeatCount="indefinite"></animateTransform></g></svg>
)

export default LoadingIcon