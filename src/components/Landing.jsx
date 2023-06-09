import SocialMediaIcons from "./SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 mt-32">
            {/* IMAGE SECTION */}
            <div className= "basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveMediumScreens ? (
                <div className= "relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                    before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                    before:border-2 before:border-orange before:z-[-1]">
                    <img alt="profile" className="hover:animate-bounce z-10 w-full max-w-[400px] md:max-w-[600px]" src="../assets/profile.png" />
                </div>
                ) : (
                <img alt="profile" className="hover:animate-bounce z-10 w-full max-w-[400px] md:max-w-[600px]" src="../assets/profile.png" />
                )}

            </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADING */}
                    <motion.div
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible:{opacity: 1, x: 0},
                    }}
                    >
                        <p className= "text-6xl font-roboto z-10 text-center md:text-start">Panisara sonkom</p>
                        <p className="font-roboto mt-10 mb-7 text-md text-center md:text-start">
                            Hi I'm Panisara (my friends call me Jina)! I design, develop, and turn ideas
                            into impactful products
                        </p>
                    </motion.div>
                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <AnchorLink
                        className="text-black border-2 border-black rounded-sm py-3 px-7 hover:border-orange
                         transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                            Let's talk
                        </AnchorLink>
                    </motion.div>
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <SocialMediaIcons/>

                    </motion.div>

                </div>
        </section>
    )
}

export default Landing