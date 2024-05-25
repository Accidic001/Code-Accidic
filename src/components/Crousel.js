import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./components.css"
import img1 from "../Images//img1.png"
import img2 from "../Images//img2.png"
import img3 from "../Images//img3.png"
import img4 from "../Images//img4.png"


export default function Crousel() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100'  style={{height:'90vh'}} src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className='text-success'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' style={{height:'90vh'}} src={img2} text="First slide" />
        <Carousel.Caption>
          <h3 className='text-success'>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' style={{height:'90vh'}} src={img3} text="First slide" />
        <Carousel.Caption>
          <h3 className='text-success'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
