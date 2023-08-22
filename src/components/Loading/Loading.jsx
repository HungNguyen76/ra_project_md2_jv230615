import loadingIcon from '@img/loading-icon.jpg'
import './Loading.scss'

export default function Loading() {
  return (
    <div className='loading_container'>
      <img className='rotating-image' src={loadingIcon}/>
    </div>
  )
}
