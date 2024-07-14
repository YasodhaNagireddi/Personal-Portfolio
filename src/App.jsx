import Header from "./Components/Header"
import Banner from "./Components/Banner"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import Projects from "./Components/Projects"
import { useEffect, useState } from "react"
import { BallTriangle } from 'react-loader-spinner';
import Navbar from "./Components/Navbar"



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      {
        loading ?

          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#1484da"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>

          :

          <div>
            {/* <Header /> */}
            <Navbar />
            <Banner />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Menu />
          </div>
      }
    </>
  )
}

export default App
