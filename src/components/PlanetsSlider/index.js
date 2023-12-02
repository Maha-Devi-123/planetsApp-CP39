import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div data-testid="planets" className="planet-slider-con">
      <PlanetItem data={planetsList} />
    </div>
  )
}

export default PlanetsSlider
