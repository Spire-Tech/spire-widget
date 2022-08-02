import { h, Fragment } from 'preact'
import { useState, useRef } from 'preact/hooks'
import VideoIcon from '../../assets/icons/video-icon'
import { useNavigation } from '../../context/NavigationContext'
import { useReport } from '../../views/reportIssue'
import styles from './styles.css'

const ScreenRecordBtn = ({ addNewVideo }) => {
  const [start, setStart] = useState(false)
  const { setShowCanvas, setInitialShot } = useReport()
  const { triggerMinimize } = useNavigation()
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
      const url = URL.createObjectURL(blob)
      setInitialShot({type: 'video', file: blob, url: url })
      setShowCanvas(true)
      // addNewVideo({ category: "video", file: blob })
      stream.getTracks().forEach(track => track.stop())
      recordedChunks = [];
    };
    recorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return recorder;
  }

  // const cameraW=1280;
  // const cameraH=720;
  // const cameraFR=25;

  // const cameraOptions = {
  //     audio:false,
  //     video:{
  //         width: { min: 100, ideal: cameraW, max: 1920 },
  //         height: { min: 100, ideal: cameraH, max: 1080 },
  //         frameRate: {ideal: cameraFR}
  //     }
  // };

  // const video= document.getElementById("video1");           
  // navigator.mediaDevices.getUserMedia(camera1Options).then(function(stream1){
  //   video1.srcObject=stream1;})

  const startRecord = async () => {
    try {
      triggerMinimize(true)
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
    triggerMinimize(false)
    setStart(false)
  }




  return (
    <>
      <button type="button" class={styles.__screenrecordbtn} onClick={start ? stopRecord : startRecord}><VideoIcon /> {start ? 'Stop Record' : 'Record Screen'}</button>
    </>
  )
}

export default ScreenRecordBtn