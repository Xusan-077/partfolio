import type { ISocialMedia } from "../constants";

export default function SocialMediaLink({ item }: { item: ISocialMedia }) {
  return (
    <div className="bg-[#1C1A19FF] flex items-center justify-center w-10 h-10 rounded-[50%] border border-[#575757]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        href={`${item.link}`}
      >
        <i className={`${item.icon} text-white`}></i>
      </a>
    </div>
  );
}
