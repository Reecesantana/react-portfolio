import "./index.scss"
import profile from "../../assets/images/profilePicture.PNG"
import wave from "../../assets/images/wave (2).png"
// import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div className="profile">
      <img className="profilepic" src={profile} alt="Profile" />
      </div>
      <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-subtitle">
        <p>
          My name is Reece Santana my background in computers started as need to
          provide to my community. In elementary and middle school I would make
          local html files where I would rip the code from other game sites so
          kids could play flash games with out the school blocking it. Truly the
          Robin Hood of my school. In high school I began to take up 3d
          animation which is where I got introduced to Python my prefered
          general scripting language. I began to continue with 3d animation and
          design in to college and eventually having to work as a sushi chef
          which I would do so for a few years. Until after a lot of though about
          my future I started to work for a local software company which
          reignited my passion for web development!
        </p>
      </div>
      </div>
      <img className="wave" src={wave} alt="waves" />
    </>
  )
}

export default About
