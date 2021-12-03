// GalleryItem
import './styles.css';

function GalleryItem(props) {
  const image = props.image;
  return (
    // li refused to take other styling from a sheet, probably something to do with it loading in later. in-line styling was the only thing it would accept, was told to use it after helpcue
    <li className='galleryImage' style={{background: 'rgba(0, 0, 0, 1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image.links[0].href} alt={image.data[0].title} />
    </li>
  )
}

export default GalleryItem; 
