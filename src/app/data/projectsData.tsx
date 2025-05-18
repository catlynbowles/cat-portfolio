import Image from "next/image";
import transmogrifier from "../assets/transmog.png";
import toc from "../assets/toc.gif";
import aiIos from "../assets/ai-ios.gif";

export const projectsData = [
  {
    value: "$100",
    detail: {
      title:
        "During my time as an engineering apprentice at Upstatement, I helped build a whimsical internal tool—affectionately called the Transmogrifier—for GoNoodle, an educational video platform. It was designed to streamline content workflows and support engagement features. I contributed to front-end development and worked closely with the team to bring this fun, interactive system to life.",
      media: <Image src={transmogrifier} alt="transmogrifier" />,
    },
  },
  {
    value: "$200",
    detail:
      "At Allbridge, I helped create responsive Vue-based splash pages used by over 10,000 hotel guests each month to get online quickly and easily. The goal was to make WiFi onboarding as smooth as possible, and I focused on building clean, accessible UIs that worked seamlessly across a variety of devices and properties.",
  },
  {
    value: "$300",
    detail:
      "At Allbridge, I helped build Skyway, a mobile dashboard for monitoring internet connectivity across 100+ hospitality properties. It gave real-time visibility into thousands of connected devices. I focused on the front-end, using React Native and Vue to create a smooth user experience for internal IT teams troubleshooting complex network issues.",
  },
  {
    value: "$400",
    detail: {
      title:
        "For the web version of Threadable, I designed and developed a dynamic table of contents system that could handle deeply nested book content. It supported structured navigation for thousands of pages, helping over 1,500 monthly users browse chapters with ease. I focused on performance and accessibility while building this system with React.",
      media: <Image src={toc} alt="clickable table of contents demo" />,
    },
  },
  {
    value: "$500",
    detail: {
      title:
        "This was such a fun project to work on! I was responsible for the front-end development of Threadable’s AI-enhanced reading assistant—an interactive feature that helps readers explore, summarize, and discuss books in new ways. I implemented the UI in React Native and collaborated closely with designers to ensure it felt natural, intuitive, and mobile-friendly.",
      media: <Image src={aiIos} alt="AI enhanced reader demo from ios app" />,
    },
  },
];
