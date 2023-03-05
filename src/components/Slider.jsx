import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
    <>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.jUbQvdlzf9BVR1Uz5vGxOwHaFj?pid=ImgDet&rs=1" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.7ff70c1c43aebb79d07e912266c54762?rik=YuLB7YeNskzOUw&pid=ImgRaw&r=0" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.810dfdb082750db97318d0389a1610cc?rik=3WZjr5dhCr5Wig&pid=ImgRaw&r=0" className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default Slider