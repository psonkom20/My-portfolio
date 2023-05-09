import LineDivider from './LineDivider'
import {useForm} from 'react-hook-form'
import {motion} from 'framer-motion'

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm()

    const onSubmit = async (e) => {
        //check if form is valid
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
        <section id="contact" className="py-48">
            {/* HEADING */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-roboto font-semibold text-4xl mb-5 text-black">
                        Contact Me<span className="text-orange">.</span>
                    </p>
                </div>
                <LineDivider width="w-1/2" />
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="md:flex md:jusitfy-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 flex items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/contactPF.png" alt="profile image"/>
                </motion.div>
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/6d2a554bba35aafabd0db889c9576c00"
                        method="POST"
                    >
                        <input
                        className="w-full border-2 border-orange font-semi-bold placeholder-opaque-black p-3"
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "This field is required"}
                                {errors.name.type === 'maxLength' && "Max legth is 100 char."}
                            </p>
                        )}

                        <input
                            className="w-full border-2 border-orange font-semi-bold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "This field is required"}
                                {errors.name.type === 'pattern' && "Invalid Email Address"}
                            </p>
                        )}

                        <textarea
                            className="w-full border-2 border-orange font-semi-bold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength:2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "This field is required"}
                                {errors.name.type === 'maxLength' && "Max length is 2000 characters"}
                            </p>
                        )}

                        <button
                        type="submit"
                        className="p-5 rounded-full border-2 border-orange font-semibold text-black mt-5 hover:bg-orange
                        hover:text-white transition duration-500"
                        >
                            LET'S CONNECT
                        </button>

                    </form>
                </motion.div>

            </div>

        </section>
    )

}

export default Contact
