import useEmblaCarousel from "embla-carousel-react";
import { Portfolios } from "../constants";
import PortfoliosItem from "./PortfoliosItem";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(min-width: 550px)": { active: false },
    },
  });

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="portfolio" className="scroll-mt-30">
      <div className="container">
        <div className="mb-30 max-[768px]:mb-25">
          <div className="">
            <h2 className="text-[#FEFEFE] text-[40px] font-bold mb-10 text-center">
              Portfolio
            </h2>
          </div>

          <div
            ref={isMobile ? emblaRef : null}
            className={`${isMobile ? "overflow-hidden" : ""} w-full`}
          >
            <ul
              className={`${
                isMobile
                  ? "flex flex-row gap-6"
                  : "grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-3 gap-6"
              }`}
            >
              {Portfolios?.map((el) => (
                <PortfoliosItem key={el.id} portfolio={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
