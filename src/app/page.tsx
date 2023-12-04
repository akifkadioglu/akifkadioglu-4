"use client"
import { motion } from "framer-motion"
import { routes } from '@/core/routes';
import Image from 'next/image';
import Link from 'next/link';
import { FaGolang, FaXTwitter } from "react-icons/fa6";
import { FaVuejs, FaReact, FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

import { Divider } from '../components/Divider';

export default function Home() {
  const appLogoSize = 250
  const logoSize = 50
  const dividerText = "Accounts";
  const accountLogoSize = 30
  const pages = [
    {
      title: "About Me",
      link: routes.ABOUT_ME
    },
    {
      title: "Resume",
      link: routes.ABOUT_ME
    },
  ]
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
      link: "https://www.linkedin.com/in/akif-kadioglu-88429a1b2/",
      color: "#0072B1",
    },
    {
      icon: BiLogoTelegram,
      link: "https://t.me/akifkadioglu",
      color: "#0088CC",
    },
    {
      icon: IoMdMail,
      link: "mailto: akifkadioglu@yaani.com",
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='space-y-16'>
        <center className='mt-5'>
          {
            pages.map((e, index) =>
              <>
                <Link href={e.link} className='underline' key={index} >
                  {e.title}
                </Link>
                {index < pages.length - 1 ? <span className='mx-2'>|</span> : ''}
              </>
            )
          }
        </center>
        <div >
          <div className='flex justify-center'>
            <Image src='/logo.webp' width={appLogoSize} height={appLogoSize} alt='logo' priority />
          </div>
          <div className='flex justify-center'>
            <h1 className='hover:underline text-3xl'>Akif Kadioglu</h1>
          </div>
        </div>
        <div className='flex space-x-10 items-center justify-center'>
          <FaVuejs size={logoSize} color="#41B883" />
          <FaGolang size={logoSize} color="#00ADD8" />
          <FaReact size={logoSize} color="#61dbfb" />
        </div>
        <div className='justify-evenly'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo totam labore corporis hic! Vitae deleniti ullam velit esse illo. Quis rerum, distinctio aut consequatur officia qui necessitatibus velit quae reprehenderit enim libero sit commodi. Provident earum vitae accusamus atque neque.
        </div>
        <div className='space-y-5'>
          <Divider text={dividerText} />
          <div className='flex space-x-7 justify-center' >
            {
              accounts.map((e, index) =>
                <Link href={e.link} target='_blank' key={index}>
                  <e.icon size={accountLogoSize} color={e.color} />
                </Link>)
            }
          </div>
        </div>
      </div>
    </motion.main>
  )
}
