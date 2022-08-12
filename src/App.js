import react,{useState} from 'react';
import './App.scss';
import './assets/shapes.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';

import ProjectDetails from './container/ProjectDetails/ProjectDetails';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Works from './container/Works/Works';
import Skills from './container/Skills/Skills';
import Header from './container/Header/Header';
import Contact from './container/Contact/Contact';
import MainHeader from './components/MainHeader/MainHeader';
import FloatingHeader from './components/FloatingHeader/FloatingHeader';

function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "app" : "app__lightmode"}>
        <MainHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
            <Route path="/" element={<>
                                        <FloatingHeader/>
                                        <Header/>
                                        <About/>
                                        <Skills isDarkMode={isDarkMode}/>
                                        <Works isDarkMode={isDarkMode}/>
                                        <Contact isDarkMode={isDarkMode}/>
                                        <Footer/>
                                    </>
                                }/>

            <Route path="/Project/:id" element={<ProjectDetails/>}/>
        </Routes>

    </div>
  );
}

export default App;
