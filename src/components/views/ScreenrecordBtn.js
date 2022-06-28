import { h, Fragment } from 'preact'
import { useState, useRef } from 'preact/hooks'
import VideoIcon from '../../assets/icons/video-icon'
import styles from './styles.css'

const ScreenRecordBtn = ({ addNewVideo }) => {
  const [start, setStart] = useState(false)
  const mediaRecorder = useRef()


  function createRecorder(stream, mimeType) {
    // the stream data is stored in this array
    let recordedChunks = [];

    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = function (e) {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };
    recorder.onstop = function () {
      const blob = new Blob(recordedChunks, {
        type: mimeType
      });
      addNewVideo({ category: "video", file: blob })
      stream.getTracks().forEach(track => track.stop())
      recordedChunks = [];
    };
    recorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return recorder;
  }

  const startRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: false
      });
      const mimeType = 'video/webm';
      mediaRecorder.current = createRecorder(stream, mimeType)
      setStart(true)
    } catch (error) {
      console.log(error)
    }
  }

  const stopRecord = () => {
    mediaRecorder.current.stop()
    setStart(false)
  }




  return (
    <>
      <button type="button" class={styles.__screenrecordbtn} onClick={start ? stopRecord : startRecord}><VideoIcon /> {start ? 'Stop Record' : 'Record Action'}</button>
    </>
  )
}

export default ScreenRecordBtn