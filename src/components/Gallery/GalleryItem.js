// GalleryItem

function GalleryItem(props) {
  const image = props.image;
  return (
    <li className="galleryImage">
      <img src={image.links[0].href} alt={image.data[0].title} />
    </li>
  )
}

export default GalleryItem; 
