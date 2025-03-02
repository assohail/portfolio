
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
  description: "A Computer Engineer specializing in backend development and blockchain.",
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
    "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a web application developer working remotely for a Netherlands based startup — AMZ.",
    "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
    "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web App Development",
      description: "I develop robust backend systems and APIs for web and mobile apps.",
      icons: null,
    },
    {
      title: "Blockchain Development",
      description: "I build secure and scalable blockchain solutions using smart contracts and integrate them with the frontend.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Qalorie",
      description: "Qalorie is an all-in-one nutrition and weight loss app designed to help you reach your health and fitness goals. Track your nutrients with our micro & macro calculator, progress and turn your fitness goals into reality.",
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
      description: "EverCalm is a menopause app designed to help women track and alleviate menopause symptoms naturally. It leverages the benefits of hypnotherapy to relieve hot flashes and night sweats and improve sleep.",
      icons: [
        {
          icon: faStaylinked,
          link: "https://evercalmmenopause.com/",
        },
      ]
    },
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