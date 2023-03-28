
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-4 gap-4">
            <a
            className="rounded-full bg-orange hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/psonkom/"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png"/>

            </a>
            <a
                className="rounded-full bg-orange hover:opacity-50 transition duration-500"
                href="https://github.com/psonkom20"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src="../assets/github.png" />

            </a>

        </div>
    )

}

export default SocialMediaIcons
