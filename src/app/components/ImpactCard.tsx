import { LinkMain } from "./LinkMain";

interface ImpactCardProps {
  number: number;
  letter: string;
  text: string;
  link?: string;
}

export function ImpactCard({ number, letter, text, link }: ImpactCardProps) {
  return (
    <div className="">
      <div className="flex items-start text-6xl">
        {number}
        <span className="ml-3 mt-6 text-xl">{letter}</span>
      </div>
      <div className="mb-12 text-lg">{text}</div>
      {link && <LinkMain text="View Case Study" link={link} />}
    </div>
  );
}
