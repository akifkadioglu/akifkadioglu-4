"use client"
/* library */
import { motion } from "framer-motion"

/* utils */
import { routes } from '@/core/routes';

/* core */
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

/* icon */
import { FaGolang, FaXTwitter } from "react-icons/fa6";
import { FaVuejs, FaInstagram, FaGithub, FaReact, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

/* component */
import { Divider } from '../components/Divider';
import { Tooltip } from "../components/Tooltip";

export default function Home() {
  const appLogoSize = 250
  const logoSize = 40
  const dividerText = "Accounts";
  const accountLogoSize = 30
  const skills = [
    {
      icon: FaVuejs,
      title: "Vue js",
      color: "#41B883"
    },
    {
      icon: FaGolang,
      title: "Golang",
      color: "#00ADD8"
    },
    {
      icon: FaReact,
      title: "React js",
      color: "#61dbfb"
    }
  ]
  const pages = [
    {
      title: "Blog",
      link: routes.BLOG
    },
    {
      title: "Resume",
      link: routes.RESUME
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
      <div className='space-y-16 my-10'>
        <center className='mt-5'>
          {
            pages.map((e, index) =>
              <React.Fragment key={index} >
                <Link href={e.link} className='underline' target="_blank">
                  {e.title}
                </Link>
                {index < pages.length - 1 ? <span className='mx-2'>|</span> : ''}
              </React.Fragment >
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
        <div className='flex items-center justify-center'>
          {
            skills.map((e, index) =>
              <React.Fragment key={index} >
                <Tooltip tooltip={e.title}>
                  <e.icon key={index} size={logoSize} color={e.color} />
                </Tooltip>
              </React.Fragment >
            )
          }
        </div>
        <div className='text-center'>
          I have been interested in software for 3 years, I have knowledge about backend, frontend and mobile application development.
        </div>
        <div className='space-y-5'>
          <Divider text={dividerText} />
          <div className='flex space-x-7 justify-center' >
            {
              accounts.map(
                (e, index) =>
                  <Link href={e.link} target='_blank' key={index}>
                    <e.icon size={accountLogoSize} color={e.color} />
                  </Link>
              )
            }
          </div>
        </div>
        <footer className="text-center font-mono my-10 space-y-3">
          <div className="space-x-2">
            <span>You can access the</span>

            <Link
              key={"0"}
              target="_blank"
              href="https://github.com/akifkadioglu/akifkadioglu-4"
              className="transition duration-300 font-bold text-xl hover:underline"
            >
              source codes
            </Link>
            <span>of this website on Github</span>
          </div>
          <div className="space-x-2">
            <span>also you can</span>

            <Link
              key={"1"}
              target="_blank"
              href="https://www.buymeacoffee.com/akifkadioglu"
              className="transition duration-300 font-bold text-xl hover:underline"
            >
              buy me
            </Link>
            <span>a coffee :)</span>

          </div>
        </footer>
      </div>
    </motion.main>
  )
}
