"use client";
/* utils */
import { routes } from "@/core/routes";

/* core */
import React, { useEffect } from "react";

export const Links = () => {
  const projects = [
    {
      title: "P-Okul",
      link: routes.POKUL,
      description:
        "Pamukkale üniversitesi için oluşturulmuş sosyal medya uygulaması",
      things: ["Nuxt 3", "Tailwind", "Netlify"],
    },
  ];

  useEffect(() => {
    console.log(
      `%cProjeler`,
      "font-weight: bold; font-size: 25px; color:#164e63"
    );
    console.log("\n\n");

    for (let index = 0; index < projects.length; index++) {
      const element = projects[index];
      console.log(
        `%c${element.title}`,
        "font-weight: bold; font-size: 18px; color:#0e7490"
      );
      console.log(element.description);
      console.log(element.link);
      console.log(element.things.join(" | "));
      if (index < projects.length - 1) {
        console.log("\n\n\n");
      }
    }
  }, []);

  return <div className="fixed"></div>;
};
