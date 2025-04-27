
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Aamir Sohail",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@aamirsohail9210",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Aamir Sohail",
  description: "A Computer Engineer specializing in backend and blockchain.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Tx3_N-L1wBAixeUoikqcoOMcKDIxHJnm/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated in Computer Engineering from the National University of Sciences and Technology (NUST) in 2020. My professional career started as a web application developer, working remotely for a Netherlands-based startup — AMZ. Over time, I transitioned into blockchain development, combining my passion for technology with the evolving landscape of decentralized systems.",
    "As a senior backend and blockchain developer, I specialize in building scalable, high-performance systems with a focus on security and efficiency. I am experienced in developing smart contracts, decentralized applications (DApps), and integrating blockchain technologies into real-world applications, along with robust backend architectures. I thrive in solving complex technical challenges and ensuring system reliability at scale.",
    "Outside of my professional life, I enjoy diary writing, exploring crypto projects, and expanding my network by meeting new people who share similar interests in technology and personal growth."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web App Development",
      description: "I develop scalable backend systems and APIs for modern web and mobile applications.",
      icons: null,
    },
    {
      title: "Blockchain Development",
      description: "I build secure blockchain solutions using smart contracts and integrate them seamlessly with frontend platforms.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Qalorie",
      description: "Qalorie is an AI all-in-one nutrition and weight loss app designed to help you reach your health and fitness goals. Track your nutrients with our micro & macro calculator, progress and turn your fitness goals into reality.  By leveraging Edamam's & USDA's vast nutritional databases Qalorie provides accurate data.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qalorie-weight-loss-health/id1538149091",
        },
      ]
    },
    {
      title: "SokuNFT",
      description: "An NFT marketplace intended to allow users to buy and sell NFTs and to set referral fees. The company's platform provides NFTs from art to gaming skins to physical goods, giving users more control over their income, allowing creators to spend less time marketing and more time creating.",
      icons: [
        {
          icon: faStaylinked,
          link: "http://sokunft.com/",
        },
        // {
        //   icon: faGooglePlay,
        //   link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        // },
      ]
    },
    {
      title: "Evercalm",
      description: "EverCalm is a menopause app designed to help women track and alleviate menopause symptoms naturally. It leverages the benefits of hypnotherapy to relieve hot flashes and night sweats and improve sleep. With EverCalm, users can access a wide community with monthly group coaching and counselling.",
      icons: [
        {
          icon: faStaylinked,
          link: "https://evercalmmenopause.com/",
        },
      ]
    },
    {
      title: "Astra",
      description: "Contributing to Astra Protocol, which is a next-generation decentralized KYC platform for Web3. It provides regulatory compliance tools for crypto applications, ensuring adherence to AML and KYC standards across the Web3 industry while maintaining the decentralized nature of blockchain systems.",
      icons: [
        {
          icon: faStaylinked,
          link: "https://www.astraprotocol.com/",
        },
      ]
    },
    {
      title: "FromThePage",
      description: "FromThePage is a collaborative platform that enables the transcription, translation, and indexing of historical documents, manuscripts, and records. The platform supports crowd-sourced projects, helping bridge the gap between historical collections and modern digital research.",
      icons: [
        {
          icon: faStaylinked,
          link: "https://www.fromthepage.com/",
        },
      ]
    },
    {
      title: "AMZ-DAPP",
      description: "Developed a full-stack DApp integrating smart contracts with a React frontend and a Node.js backend. Implemented wallet connection (MetaMask), smart contract deployment, event listening, and secure transaction handling for real-world use cases like NFT minting and decentralized voting.",
      icons: [
        {
          icon: faStaylinked,
          link: "",
        },
      ]
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at aamirsohail9210@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:aamirsohail9210@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/aamir_sohail11/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Aamir Sohail | Computer Engineer | Blockchain | Backend developer",
  description: "I develop robust backend systems and APIs for web and mobile apps, and build secure, scalable blockchain solutions using smart contracts. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@aamirsohail",
  description: "Computer Engineer | Blockchain | Backend Developer",
  cards: [
    {
      title: "My website",
      link: "#",
    },
    {
      title: "Qalorie",
      link: "https://www.qalorie.com/",
    },
    {
      title: "Evercalm",
      link: "https://evercalmmenopause.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/assohail/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/aamirsohail6/",
    },
  ]
}