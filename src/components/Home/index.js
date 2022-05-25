import './index.scss';
import wave from "../../assets/images/wave.png"
// import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <>
  <div className ="container">
      <div className='gradient'>
     <div className='title'>
       <h1>Hello my name is Reece</h1>
     </div>
    <div className='subtitle'>
      <p>I am a self taught programmer. Who uses HTML, CSS, Javascript, Python, SQL, Swift. Is familiar with frame works like React, Flask and Django</p>
    </div>
      </div>
  </div>
<img className='wave' src={wave} alt="Wave" />
  </>
  );
}

export default Home