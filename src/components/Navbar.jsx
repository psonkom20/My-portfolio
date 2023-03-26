import {useState} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
            className= {`${selectedPage === lowerCasePage ? "text-orange" : ""}
            hover:text-orange transition duration-500`}
            // Identify which section we're going to move to
            href={`#${lowerCasePage}`}
            // change useState to whichever page is selected
            onCLick={() => setSelectedPage(lowerCasePage)}
        >
            {page}

        </AnchorLink>

    )
}

const Navbar = ({selectedPage, setSelectedPage}) => {
    // mobileMode: check wether menu is toggled or not
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className= "flex items-center justify-between mx-auto w-5/6">
                <h4 className= "font-roboto text-3xl font-bold">JINA</h4>
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className= "flex justify-between gap-16 font-roboto text-sm font-semibold">
                        <Link
                        page = "Home"
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link
                            page="About Me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <button>
                    <img alt="menuIcon" src="../Assets/menuIcon.png"/>

                </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
