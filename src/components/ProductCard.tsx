import Button from "./Button";

type Props = {
  name: string;
  img: string;
  link: string;
};
export const ProductCard = ({ name, img, link }: Props) => {
  return (
    <div className="relative inline-block">
      <img className="block w-full h-auto" src={img} alt={name} />
      <div className="absolute top-2 left-2 text-white font-bold text-xl drop-shadow-md">
        {name}
      </div>
      <Button text="Shop now" link={link}></Button>
    </div>
  );
};
