import portfolioImg1 from "../assets/images/portfolioImg-1.png";
import portfolioImg2 from "../assets/images/portfolioImg-2.png";
import portfolioImg3 from "../assets/images/portfolioImg-3.png";
import portfolioImg4 from "../assets/images/portfolioImg-4.png";
import portfolioImg5 from "../assets/images/portfolioImg-5.png";
import portfolioImg6 from "../assets/images/portfolioImg-6.png";
import portfolioImg7 from "../assets/images/portfolioImg-7.png";
import portfolioImg8 from "../assets/images/portfolioImg-8.png";
import portfolioImg9 from "../assets/images/portfolioImg-9.png";
import portfolioImg10 from "../assets/images/portfolioImg-10.png";
import portfolioImg11 from "../assets/images/portfolioImg-11.png";
import portfolioImg12 from "../assets/images/portfolioImg-12.png";

interface Inav {
  label: string;
  link: string;
}

export interface Iportfolios {
  id: number;
  image: string;
  name: string;
  link: string;
}

export interface ISocialMedia {
  id: number;
  label: string;
  link: string;
  icon: string;
}

export const NavLinks: Inav[] = [
  {
    label: "Home",
    link: "/#home",
  },
  {
    label: "About me",
    link: "/#about",
  },
  {
    label: "Portfolio",
    link: "/#portfolio",
  },
  {
    label: "Contact me",
    link: "/#contact",
  },
];

export const Portfolios: Iportfolios[] = [
  {
    id: 1,
    link: "https://stream-vibe-green.vercel.app",
    image: portfolioImg12,
    name: "Stream Vibe",
  },
  {
    id: 2,
    link: "https://project-of-weather.netlify.app",
    image: portfolioImg1,
    name: "Weather",
  },
  {
    id: 3,
    link: "https://first-reactproject.netlify.app",
    image: portfolioImg2,
    name: "Logoipsum",
  },
  {
    id: 4,
    link: "https://second-reactproject.netlify.app",
    image: portfolioImg3,
    name: "Royal Park",
  },
  {
    id: 5,
    link: "https://positivus-project.netlify.app",
    image: portfolioImg4,
    name: "Positivus",
  },
  {
    id: 6,
    link: "https://project-of-foods.netlify.app",
    image: portfolioImg5,
    name: "Restaurant",
  },
  {
    id: 7,
    link: "https://project-woodendot.netlify.app",
    image: portfolioImg6,
    name: "Woodendot",
  },
  {
    id: 8,
    link: "https://project-orderuk.netlify.app",
    image: portfolioImg7,
    name: "Order",
  },
  {
    id: 9,
    link: "https://first-project-router.netlify.app",
    image: portfolioImg8,
    name: "Finsweet",
  },
  {
    id: 10,
    link: "https://project-online-shop.netlify.app",
    image: portfolioImg9,
    name: "Uzum market clone",
  },
  {
    id: 11,
    link: "https://project-of-seedra.netlify.app",
    image: portfolioImg10,
    name: "Seedra",
  },
  {
    id: 12,
    link: "https://full-library-project.netlify.app",
    image: portfolioImg11,
    name: "Library Space",
  },
];

export const SocialMedia: ISocialMedia[] = [
  {
    id: 1,
    label: "GitHub",
    link: "https://github.com/Xusan-077",
    icon: "bi bi-github",
  },
  {
    id: 2,
    label: "Instagram",
    link: "https://instagram.com/xusan__077__",
    icon: "bi bi-instagram",
  },
  {
    id: 3,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/xusan-yarashov-51223239b",
    icon: "bi bi-linkedin",
  },
  {
    id: 4,
    label: "Telegram",
    link: "https://t.me/Xusan_Yarashov",
    icon: "bi bi-telegram",
  },
  {
    id: 5,
    label: "Facebook",
    link: "https://www.facebook.com/people/Xusan-Yarashov/pfbid0CcD7V5dyaSRF2ZqD2dmmRjv19Fd4Cbn447Mf1auHJHoF3cteZXn81cZF54WnUhNBl/",
    icon: "bi bi-facebook",
  },
];
