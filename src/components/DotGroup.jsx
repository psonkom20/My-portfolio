import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({selectedPage, setSelectedPage}) => {
    const selectedStyles = `relative bg-orange before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-orange before:left-[-50%]
    before:top-[-50%]`
    return <div className= "flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink
            className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
            w-3 h-3 rounded-full`}
            // Identify which section we're going to move to
            href= "#home"
            // change useState to whichever page is selected
            onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
            className={`${selectedPage === 'about' ? selectedStyles : "bg-dark-grey"}
            w-3 h-3 rounded-full`}
            // Identify which section we're going to move to
            href="#about"
            // change useState to whichever page is selected
            onClick={() => setSelectedPage('about')}
        />
        <AnchorLink
            className={`${selectedPage === 'skills' ? selectedStyles : "bg-dark-grey"}
            w-3 h-3 rounded-full`}
            // Identify which section we're going to move to
            href="#skills"
            // change useState to whichever page is selected
            onClick={() => setSelectedPage('skills')}
        />
        <AnchorLink
            className={`${selectedPage === 'projects' ? selectedStyles : "bg-dark-grey"}
            w-3 h-3 rounded-full`}
            // Identify which section we're going to move to
            href="#projects"
            // change useState to whichever page is selected
            onClick={() => setSelectedPage('projects')}
        />
        <AnchorLink
            className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-grey"}
            w-3 h-3 rounded-full`}
            // Identify which section we're going to move to
            href="#contact"
            // change useState to whichever page is selected
            onClick={() => setSelectedPage('contact')}
        />
    </div>
}

export default DotGroup