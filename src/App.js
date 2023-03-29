import Navbar from "./components/Navbar"
import DotGroup from "./components/DotGroup"
import Landing from "./components/Landing"
import LineDivider from "./components/LineDivider"
import AboutMe from "./components/AboutMe"
import MySkills from "./components/MySkills"
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {

  // Determine which page of the webpage we're on
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  // Check if user screen size is bigger or smaller than 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

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
      {isAboveMediumScreens && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-auto">
      <AboutMe />
    </div>
    <LineDivider />
    <div className="w-5/6 mx-auto md:h-full">
      <MySkills />
    </div>
  </div>
  )

}

export default App;
