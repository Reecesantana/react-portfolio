import Loader from 'react-loaders';
import './index.scss';


const Contact = () => {
    return(
        <>
    <div className ="container contact-page">
      <div className='contact-me'><h1>Contact Me</h1></div>
        <div className='contact-about'><p>Feel free to contact me about potential projects or general intrest about any of the projects I am working on!</p></div>

     <div className="contact-form">
         <form>
             <ul>
                 <li>
                     <input type="text" name="name" placeholder="Name" required>
                     </input>
                 </li>
                 <li>
                     <input type="email" name="email" placeholder="Email" required>
                     </input>
                 </li>
                 <li>
                     <input type="text" name="subject" placeholder="Subject" required>
                     </input>
                 </li>
                 <li>
                     <textarea name="message" placeholder="Message" required>
                     </textarea>
                 </li>
                 <li>
                     <input type="submit" className="submit-btn" value="send"></input>
                 </li>
             </ul>
         </form>
     </div>

     </div>
     <Loader type=''/>
     </>
    );
  }
  
  export default Contact