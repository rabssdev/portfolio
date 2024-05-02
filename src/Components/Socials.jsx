import FacebookIcon from "../assets/facebook.svg"; // Replace with your actual icon imports
import DiscordIcon from "../assets/discord.svg";
import GmailIcon from "../assets/gmail.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import WhatsAppIcon from "../assets/whatsapp.svg";
import GitHubIcon from "../assets/github.svg";
import { motion } from "framer-motion";


import React from "react";

export default function Socials() {
  const variants = {
    hover: {
      rotate: [0, 360],
      transition: {
        duration: 0.2,
        ease: "linear",
        loop: Infinity,
      },
    },
  };

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://web.facebook.com/andrianina.rasolofo.5/", // Replace with your actual link
    },
    {
      icon: DiscordIcon,
      href: "https://discord.com/widget?id=1229366295175237663&theme=dark", // Replace with your actual link
    },
    {
      icon: GmailIcon,
      href: "mailto:rabssdev@gmail.com", // Replace with your actual link
    },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/rabssdev", // Replace with your actual link
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/261345621854?text=Bonjour", // Replace with your actual link
    },
    {
      icon: GitHubIcon,
      href: "https://github.com/rabssdev", // Replace with your actual link
    },
  ];
  return (
    <div className="flex flex-row gap-4">
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.href}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <motion.img
            src={socialLink.icon}
            alt="img"
            srcSet=""
            variants={variants}
            whileHover="hover"
          />
        </a>
      ))}
      
    </div>
  );
}
