import Carousel from 'react-bootstrap/Carousel';
import MaxineMinx from './images/MaxineMinx.jpg';
import Pearl from './images/Pearl.jpg';
import GuidedByAngels from './images/guidedbyangelsedit.jpg';
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item >
        <img
          className="carousel"
          src={Pearl}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First Image</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={MaxineMinx}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second Image</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={GuidedByAngels}
          alt="Third slide"
        />

         <Carousel.Caption>
          {/* <h3>Third Image</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;