import './index.scss';
import wave from "../../assets/images/wave (3).png"
// import { Link } from 'react-router-dom';


const Project = () => {
  return(
<>
<div className='grid'>
<div className='project-card'>project 1</div>
<div className='project-card'>project 2</div>
<div className='project-card'>project 3</div>
<div className='project-card'>project 4</div>
</div>
<img className='wave' src={wave} alt='waves' />
</>
  );
}

export default Project