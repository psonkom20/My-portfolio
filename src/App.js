import Navbar from "./components/Navbar"
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  // Determine which page of the webpage we're on
  const [selectedPage, setSelectedPage] = useState('home')
  // Check if user screen size is bigger or smaller than 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return <div className="app bg-white">
    <Navbar selectedPage= {selectedPage} setSelectedPage= {selectedPage}/>
  </div>

}

export default App;
