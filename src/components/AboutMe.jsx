import LineDivider from "./LineDivider"
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion"


const AboutMe = () => {

    return (
        <section id="about" className="pt-10 pb-24">
            {/* HEADER */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="w-5/6 mx-auto md:h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >

                    <p className="font-roboto font-semibold text-4xl mb-5 text-black">
                        About Me
                        <span className="text-orange">.</span>
                    </p>
                    <LineDivider width="w-1/2"/>
                </motion.div>
            </div>

            {/* BODY */}
            <div className="md:flex md:justify-between md:gap-16 mt-28 ">


                <motion.div
                    className="w-5/6 mx-auto md:h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-roboto text-6xl font-bold mb-5  text-black">
                        Humastic problem-solver 🧐

                    </p>
                    <p className="font-roboto text-6xl font-bold mb-7  text-black">
                        Life-long learner 🔎

                    </p>
                    <p className=" font-roboto  text-xl mb-5 leading-loose  text-black">
                        Hi! 👋🏼 I'm Panisara, a  front-end developer
                        and product designer based in Sydney, Australia.
                        I'm passionate about turning ideas into meaningful
                        products with strong social impact. I love working
                        collaboratively and thrive in a dynamic environment.
                        I'm always up for a challenge, so catch me (a beginner 🤓)
                        attempting a V6 problem at the bouldering gym.

                    </p>

                </motion.div>
            </div>

        </section>
    )

}

export default AboutMe
