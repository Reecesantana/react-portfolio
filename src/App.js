import { Routes,Route } from 'react-router-dom'
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/AboutMe';
import Project from './components/Projects';


function App() {
  return (
<Routes>
  <Route path="/" element= {<Layout />} >
    <Route index element={<Home />} />
    </Route>
    <Route path="/contact" element= {<Layout />} >
    <Route index element={<Contact />} />
    </Route>
    <Route path="/about" element= {<Layout />} >
    <Route index element={<About />} />
    </Route>
    <Route path="/projects" element= {<Layout />} >
    <Route index element={<Project />} />
    </Route>
</Routes>
  )
}

export default App;
