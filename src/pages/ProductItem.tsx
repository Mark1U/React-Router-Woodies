import { useParams } from "react-router";
import { Hero } from "../components/Hero";

const data = [
  {
    name: "Jenson",
    desc: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    img: "/Tisch.png",
  },
  {
    name: "Deon",
    desc: "Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    img: "/Stuhl.png",
  },
  {
    name: "Krisha",
    desc: "Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    img: "/Schuesseln.png",
  },
];

export const ProductItem = () => {
  let { id } = useParams<"id">();
  let item = data[Number(id) - 1];
  return (
    <>
      <Hero title={item.name} page="Product" />
      <div className="flex flex-row gap-8 my-8 mx-24 justify-around items-center pb-32">
        <img src={item.img} alt={item.name} />
        <p>{item.desc}</p>
      </div>
    </>
  );
};
