import { h, Fragment } from 'preact'
import { useReport } from "../../views/reportIssue"
import styles from './styles.css'
import { useState } from 'preact/hooks'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


const CanvasWrapper = ({ addNewImage }) => {
  // const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const { initialShot, setShowCanvas } = useReport()

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      const frame = cropper.getCroppedCanvas().toDataURL();
       addNewImage({ category: "image", file: frame })
       setShowCanvas(false)
    }
  };

  return (
    <div class={styles.__canvas}>
      <div class={styles.__canvas_actions}>
<button class={styles.__canvas_actions_btn} onClick={() => setShowCanvas(false)}>Cancel</button>
<button class={styles.__canvas_actions_btn} onClick={getCropData}>Save</button>
      </div>
      <div class={styles.__canvas_container}>
      <Cropper
          style={{ height: "auto", width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          src={initialShot}
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
      </div>

    </div>
  )
}

export default CanvasWrapper