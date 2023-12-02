import Slider from 'react-slick'
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  }

  return (
    <>
      <h1 className="planets-head">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map(each => (
            <div key={each.id}>
              <img
                className="image-edit"
                src={each.imageUrl}
                alt={`planet ${each.name}`}
              />
              <h1 className="name">{each.name} </h1>
              <p className="discription">{each.description} </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default PlanetItem
