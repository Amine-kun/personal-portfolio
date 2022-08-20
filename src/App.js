import react,{useState, useEffect} from 'react';
import './App.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';

import ProjectDetails from './container/ProjectDetails/ProjectDetails';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Works from './container/Works/Works';
import Skills from './container/Skills/Skills';
import Header from './container/Header/Header';
import Contact from './container/Contact/Contact';
import MainHeader from './components/MainHeader/MainHeader';
import FloatingHeader from './components/FloatingHeader/FloatingHeader';

import logo from './assets/logo2.png';
import './assets/shapes.scss';


function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [startLoading, setStartLoading] = useState(false);
   
        useEffect(() => {
            setTimeout(()=>{setIsLoading(false)},2000);
            setTimeout(()=>{setStartLoading(true)},600);
        }, [])


  return (
    <>

        {!isLoading 
                ?<div className={isDarkMode ? "app" : "app__lightmode"}>
                    <MainHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                    <Routes>
                        <Route path="/" element={<>
                                                    <FloatingHeader/>
                                                    <Header/>
                                                    <About/>
                                                    <Skills isDarkMode={isDarkMode}/>
                                                    <Works isDarkMode={isDarkMode}/>
                                                    <Contact isDarkMode={isDarkMode}/>
                                                </>
                                            }/>

                        <Route path="/Project/:id" element={<ProjectDetails/>}/>
                    </Routes>
                    <Footer/>
                </div>

                : <div className="app app__flex loading" style={{backgroundColor:"var(--white-color-light)"}}>
                   
                    <motion.img
                              src={logo}
                              alt="logo" 
                              className="logo"
                              initial={{ scale: 1 }}
                              animate={{ rotate: 360, scale: 1.1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration:1
                              }}
                        />
                    <span className="upper" ></span>
                    <span id="id" className="loader" style={{left:`${startLoading ? 0 : -2000}px`}}></span>
                  </div>
        }
    </>
  );
}

export default App;
