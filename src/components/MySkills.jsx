import LineDivider from "./LineDivider";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER SECTION */}
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
                    <p className="font-roboto font-semibold text-4xl mb-5">
                        MY TECH STACKS<span className="text-orange">.</span>
                    </p>
                    <LineDivider width="w-1/2"/>
                </motion.div>
                {/* SKILLs */}
            </div>
            <motion.div
                className='w-full mt-32'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center py-8'>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src="../assets/htmlLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-28 mx-auto' src="../assets/cssLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-32 mx-auto mt-4' src="../assets/javascriptLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-32 mx-auto mt-6' src="../assets/reactLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-32 mx-auto' src="../assets/pythonLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-32 mx-auto' src="../assets/tailwindLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-36 m-auto mt-6' src="../assets/nextLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-48 m-auto mt-6' src="../assets/figmaLogo.png" alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                </div>
            </motion.div>

        </section>
    )

}

export default MySkills
