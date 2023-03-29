import LineDivider from "./LineDivider";
import {motion} from "framer-motion"

const container = {
    hidden: {},
    // Animation will happen one by one for each child
    visible: {
        transtion: {staggerChildren: 0.2}
    }
}

const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale: 1}
}
//individula child project
const Project = ({title, subtitle}) => {
    const overlayStyles= `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-orange z-30 flex flex-col justify-center items-center text-center p-16 text-black`
    const projectTitle = title.split(" ").join("-").toLowerCase()

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-roboto">{title}</p>
                <p className="mt-7">{subtitle}</p>
            </div>
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle}/>

        </motion.div>

    )
}

const Projects = () => {
    return(
        <section id="projects" className="pt-48 pb-48">
            {/* HEADING */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-roboto font-semibold text-4xl mb-5">
                        Projects<span className="text-orange">.</span>
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineDivider width="w-1/3" />

                </div>
                <p className="mt-10 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde itaque quisquam a, enim, vel iusto autem illo rerum
                        quos, suscipit nisi velit ut consequatur aliquam perspic
                        iatis repellat rem sed quia?
                    </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    {/* <div
                    className="flex justify-center text-center items-center p-10 bg-orange
                    max-w-[400pc] max-h-[400px] text-2xl font-roboto font-semibold"
                    >
                        SERENE MENTAL-WELLNESS APP

                    </div> */}
                    <Project title="Project Serene" subtitle="Mental-wellness journal app"/>

                </motion.div>

            </div>


        </section>

    )
}

export default Projects
