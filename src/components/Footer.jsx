import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {

    return (
        <footer className="h-64 bg-orange pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className=" font-roboto font-semibold text-2xl text-white">PANISARA SONKOM</p>
                    <p className="text-white">© SONKOM. All Rights Reserved.</p>
                </div>
            </div>

        </footer>

    )

}

export default Footer
