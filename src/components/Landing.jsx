import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap 16 py-10">
            {/* IMAGE SECTION */}
            <div className= "md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                <div className= "relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                    before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                    before:border-2 before:border-orange before:z-[-1]">
                    <img alt="profile" className="hover:animate-bounce z-10 w-full max-w-[400px] md:max-w-[600px]" src="../assets/profile.png" />
                </div>
                ) : (
                <img alt="profile" className="hover:animate-bounce z-10 w-full max-w-[400px] md:max-w-[600px]" src="../assets/profile.png" />
                )}

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADING */}
                    <motion.div>

                </motion.div>

            </div>
        </section>
    )

}

export default Landing