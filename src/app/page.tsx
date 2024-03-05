/* core */
import React from "react";

/* component */
import { Account } from "@/components/app/Account";
import { Links } from "@/components/app/Links";
import { Description } from "@/components/app/Description";
import { Footer } from "@/components/app/Footer";
import { Header } from "@/components/app/Header";
import { Skills } from "@/components/app/Skills";

export default function Home() {
  return (
    <div className='space-y-16 my-10'>
      <Header />
      <Skills />
      <Description />
      <Account />
      <Footer />
      <Links />
    </div>
  )
}
