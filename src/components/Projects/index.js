import './index.scss';
import calc from "../../assets/images/Calc preview.png"
import wave from "../../assets/images/wave (3).png"
import cardwave from "../../assets/images/wave (4).png"
import cardwave1 from "../../assets/images/wave (5).png"
// import { Link } from 'react-router-dom';


const Project = () => {
  return(
<>
<div className='grid'>
  {/* calculator app */}
<div className='project-card'>
  <div className='project-title'>
    <h2>Calculator Project</h2>
  </div>
  <div className='project-preview'>
    <img src={calc} alt="Calcultor App" className='calculator-project' />
  </div>
  <img className='card-wave' src={cardwave} alt='waves' />
  <div className='project-description'>

  </div>
</div>
<div className='project-card'></div>
{/* password generator */}
<div className='project-card'>
  <div className='project-title'>
    <h2>Random Password Generator</h2>
  </div>
  <div className='project-preview'>
    <img src={calc} alt="Calcultor App" className='calculator-project' />
  </div>
  <img className='card-wave' src={cardwave1} alt='waves' />
  <div className='project-description'>

  </div>
</div>
<div className='project-card'></div>
</div>
<img className='wave' src={wave} alt='waves' />
</>
  );
}

export default Project