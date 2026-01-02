import type { Iportfolios } from "../constants";

export default function PortfoliosItem({
  portfolio,
}: {
  portfolio: Iportfolios;
}) {
  return (
    <li
      data-aos="fade-up"
      data-aos-delay={portfolio.id * 100}
      key={`${portfolio.id}-${portfolio.name}`}
      className="flex-[0_0_85%] min-w-0 min-[550px]:flex-none bg-[#252525] rounded-xl overflow-hidden border border-transparent hover:border-[#FD6F00] transition-all group shadow-lg"
    >
      <a
        href={portfolio.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden">
          <img
            src={portfolio.image}
            alt={portfolio.name}
            className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white bg-[#FD6F00] px-4 py-2 rounded-full text-sm font-bold">
              View Project
            </span>
          </div>
        </div>

        <div className="p-5 flex items-center justify-between bg-[#252525]">
          <h3 className="text-[18px] font-bold text-[#C6C6C6] group-hover:text-[#FD6F00] transition-colors">
            {portfolio.name}
          </h3>
          <div className="w-8 h-8 rounded-full border border-[#575757] flex items-center justify-center group-hover:bg-[#FD6F00] group-hover:border-[#FD6F00] transition-all">
            <span className="text-[#C6C6C6] group-hover:text-white">→</span>
          </div>
        </div>
      </a>
    </li>
  );
}
