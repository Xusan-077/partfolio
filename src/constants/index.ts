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

export const navLinks: Inav[] = [
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
    link: "https://project-of-weather.netlify.app",
    image: portfolioImg1,
    name: "Weather",
  },
  {
    id: 2,
    link: "https://first-reactproject.netlify.app",
    image: portfolioImg2,
    name: "Logoipsum",
  },
  {
    id: 3,
    link: "https://second-reactproject.netlify.app",
    image: portfolioImg3,
    name: "Royal Park",
  },
  {
    id: 4,
    link: "https://positivus-project.netlify.app",
    image: portfolioImg4,
    name: "Positivus",
  },
  {
    id: 5,
    link: "https://project-of-foods.netlify.app",
    image: portfolioImg5,
    name: "Restaurant",
  },
  {
    id: 6,
    link: "https://project-woodendot.netlify.app",
    image: portfolioImg6,
    name: "Woodendot",
  },
  {
    id: 7,
    link: "https://project-orderuk.netlify.app",
    image: portfolioImg7,
    name: "Order",
  },
  {
    id: 8,
    link: "https://first-project-router.netlify.app",
    image: portfolioImg8,
    name: "Finsweet",
  },
  {
    id: 9,
    link: "https://project-online-shop.netlify.app",
    image: portfolioImg9,
    name: "Uzum market clone",
  },
  {
    id: 10,
    link: "https://project-of-seedra.netlify.app",
    image: portfolioImg10,
    name: "Seedra",
  },
  {
    id: 11,
    link: "https://full-library-project.netlify.app",
    image: portfolioImg11,
    name: "Library Space",
  },
];
