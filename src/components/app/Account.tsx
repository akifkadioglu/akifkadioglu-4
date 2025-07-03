
/* component */
import { Divider } from "../Divider"

/* icon */
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

export const Account = () => {
    const dividerText = "Online";
    const accountLogoSize = 30
    const accounts = [
        {
            icon: FaGithub,
            link: "https://github.com/akifkadioglu",
            color: "",
        },
        {
            icon: FaYoutube,
            link: "https://www.youtube.com/channel/UCMVyPOiByM3jJSUEsBzEdww",
            color: "#FF0000",
        },
        {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/akifkadioglu/",
            color: "#0072B1",
        },
        {
            icon: BiLogoTelegram,
            link: "https://t.me/akifkadioglu",
            color: "#0088CC",
        },
        {
            icon: IoMdMail,
            link: "mailto: akif.kadioglu.28@gmail.com",
            color: "#EA4335",
        }, {
            icon: FaInstagram,
            link: "https://www.instagram.com/akifkadioglu",
            color: "#D62976 ",
        }, {
            icon: FaXTwitter,
            link: "https://twitter.com/akifkadioglu",
            color: "",
        },
    ]

    return (
        <div className='space-y-5'>
            <Divider text={dividerText} />

            <div className='text-center space-y-2 space-x-5' >
                {
                    accounts.map((e, index) =>
                        <button aria-label={e.link} key={index}>
                            <Link aria-label={e.link} href={e.link} target='_blank'>
                                <e.icon size={accountLogoSize} color={e.color} />
                            </Link>
                        </button>
                    )
                }
            </div>
        </div>
    )
}
