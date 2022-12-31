import { Carousel as AntCarousel } from 'antd';
import Inicio1 from '../assets/carrusel/inicio1.jpg';
import Inicio2 from '../assets/carrusel/inicio2.jpg';
import Inicio3 from '../assets/carrusel/inicio3.jpg';

const contentStyle = {
  margin: 0,
  height: '400px',
  width: '100%',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const images = [Inicio1, Inicio2, Inicio3];

export const Carousel = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  return (
    <AntCarousel afterChange={onChange} autoplay autoplaySpeed={5_000}>
      {images.map((image) => (
        <div key={image}>
          <div style={contentStyle}>
            <img src={image} alt="Galeria 1" style={imageStyle} />
          </div>
        </div>
      ))}
    </AntCarousel>
  );
};
