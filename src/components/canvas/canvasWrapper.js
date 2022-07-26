import { h, Fragment } from 'preact'
import { useReport } from "../../views/reportIssue"
import styles from './styles.css'
import { useState } from 'preact/hooks'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


const CanvasWrapper = ({ addNewMedia }) => {
  // const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const { initialShot, setShowCanvas } = useReport()

  const saveImage = () => {
    if (typeof cropper !== "undefined") {
      const frame = cropper.getCroppedCanvas().toDataURL();
       addNewMedia({ category: "image", file: frame })
       setShowCanvas(false)
    }
  };

  const saveVideo = () => {
    addNewMedia({category: "video", file: initialShot.file, url: initialShot.url})
    setShowCanvas(false)
  }

  const handleSave = () => {
    if(initialShot.type === "video") {
      saveVideo()
     }else if (initialShot.type === "image") {
      saveImage()
     }
  }

  return (
    <div class={styles.__canvas}>
      <div class={styles.__canvas_actions}>
<button class={styles.__canvas_actions_btn} onClick={() => setShowCanvas(false)}>Cancel</button>
<button class={styles.__canvas_actions_btn} onClick={handleSave}>Save</button>
      </div>
      <div class={styles.__canvas_container}>
      {
        initialShot.type === 'image' ? (
        <Cropper
          style={{ height: "auto", width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          src={initialShot.file}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
        ) : (
          <video class={styles.__canvas_container_video} src={initialShot.url} controls/>
        )
      }
      </div>

    </div>
  )
}

export default CanvasWrapper