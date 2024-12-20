import { Title } from "@/components/Title";
import { Text } from "@/components/Text";

interface ImpactCardProps {
  value: string;
  title: string;
  description: string;
  size?:
    | "display-large"
    | "display-medium"
    | "display-small"
    | "headline-large"
    | "headline-medium"
    | "headline-small";
  descriptionSize?:
    | "body-large"
    | "body-medium"
    | "body-small"
    | "label-large"
    | "label-medium"
    | "label-small";
}
//TODO: Figure out why the cards are not properly passing the size prop
export const ImpactCard = ({
  value,
  title,
  description,
  size = "headline-large",
  descriptionSize = "body-medium",
}: ImpactCardProps) => {
  return (
    <div className="flex min-h-[20vw] flex-col justify-between gap-[6.50rem] overflow-hidden rounded-lg bg-brand-dark-surface p-6">
      <div className="text-right">
        <Title
          el="h4"
          size={size}
          className="font-medium leading-none text-zinc-50"
        >
          {value}
        </Title>
      </div>
      <div className="flex flex-col gap-[1.13rem]">
        <Title el="h3" size={size} className="text-zinc-50">
          {title}
        </Title>
        <Text el="p" size={descriptionSize} className="text-zinc-50 opacity-80">
          {description}
        </Text>
      </div>
    </div>
  );
};
