// GalleryItem

function GalleryItem(props) {
  const image = props.image;
  return (
    <div className="galleryImage">
      <img src={image.links[0].href} alt={image.data[0].title} />
    </div>
  )
}

export default GalleryItem;
