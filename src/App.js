import Navbar from "./components/Navbar"
import DotGroup from "./components/DotGroup"
import Landing from "./components/Landing"
import LineDivider from "./components/LineDivider"
import AboutMe from "./components/AboutMe"
import MySkills from "./components/MySkills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import {motion} from "framer-motion"

function App() {

  // Determine which page of the webpage we're on
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  // Check if user screen size is bigger or smaller than 1060px
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  //Check if scroll or not
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (<div className="app bg-white">
    <Navbar
      isTopOfPage = {isTopOfPage}
      selectedPage= {selectedPage}
      setSelectedPage= {setSelectedPage}
    />
    <div className= "w-5/6 mx-auto md:h-full">
      {isDesktop && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <motion.div
      margin="0 0 -200px 0"
      amount="all"
      onViewportEnter={() => setSelectedPage("home")}
      >
        <Landing setSelectedPage={setSelectedPage} />
      </motion.div>
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("about")}
      >
        <AboutMe />
      </motion.div>
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <MySkills />
      </motion.div>
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>
    </div>
    <Footer />
  </div>
  )

}

export default App;
