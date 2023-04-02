import LineDivider from "./LineDivider"
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion"


const AboutMe = () => {

    return (
        <section id="about" className="pt-10 pb-24">
            {/* HEADER */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className=" font-roboto font-semibold text-4xl mb-5">
                        About Me
                        <span className="text-orange">.</span>
                    </p>
                    <LineDivider width="w-1/3"/>
                </motion.div>
            </div>

            {/* BODY */}
            <div className="md:flex md:justify-between md:gap-16 mt-28 ">


                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className=" font-roboto  text-xl mb-5">
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Laboriosam unde hic
                        quidem perferendis atque odio quis
                        nobis harum, maxime nemo laudantium
                        corporis a at? Doloribus, quasi.
                        Cumque cum explicabo tempora.

                    </p>

                </motion.div>
            </div>

        </section>
    )

}

export default AboutMe
