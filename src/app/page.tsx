/* core */
import React from "react";

/* component */
import { Account } from "@/components/app/Account";
import { Links } from "@/components/app/Links";
import { Description } from "@/components/app/Description";
import { Footer } from "@/components/app/Footer";
import { Header } from "@/components/app/Header";
import { Skills } from "@/components/app/Skills";
import { ConfettiParticles } from "@/components/Particles";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="space-y-16 my-10">
        <Skills />
        <Description />
        <Account />
        <Footer />
        <Links />
        <ConfettiParticles />
      </div>
    </div>
  );
}
