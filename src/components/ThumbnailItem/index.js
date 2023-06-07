// Write your code here
import './index.css'

const ThumbnailItem = props => {
  const {imageList, changeMainImage, isActive} = props
  const imageChangeId = () => {
    changeMainImage(imageList.id)
  }

  const applyNewProperty = isActive ? '' : 'with-opacity'

  return (
    <li key={imageList.id} className="each-item">
      <button className="img-btn" type="button" onClick={imageChangeId}>
        <img
          className={applyNewProperty}
          src={imageList.thumbnailUrl}
          alt={imageList.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
