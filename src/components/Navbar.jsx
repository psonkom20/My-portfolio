import {useState} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"


const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
            className= {`${
                selectedPage === lowerCasePage ? "text-orange" : ""
            } hover:text-orange transition duration-500`}
            // Identify which section we're going to move to
            href={`#${lowerCasePage}`}
            // change useState to whichever page is selected
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>

    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    // mobileMode: check whether menu is toggled or not
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const navbarBackground = isTopOfPage ? "" : "bg-black text-white"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className= "flex items-center justify-between mx-auto w-5/6">
                <h4 className= "font-roboto text-2xl">panisara sonkom
                <span className="text-orange text-4xl">.</span>
                </h4>
                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className= "flex justify-between gap-16 font-roboto text-md">
                        <Link
                        page = "Home"
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link
                            page="About"
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
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <button className="rounded-full bg-orange p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src= "../assets/menu-icon.svg" />
                </button>
                )}
                {/* Mobile menu popup */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
                        {/* Close Icon */}
                        <div className= "flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src= "../assets/close-icon.svg"/>
                            </button>

                        </div>
                        {/* Menu Item */}
                        <div className= "flex flex-col gap-10 ml-[33%] text-2xl text-white font-roboto">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
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
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
