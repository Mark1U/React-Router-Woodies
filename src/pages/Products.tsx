import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

type Props = {};

export const Products = ({}: Props) => {
  return (
    <>
      <Hero title="What we have" page="Products" />
      <div className="flex flex-row justify-around items-center pb-32">
        <ProductCard img="/Tisch.png" name="Jenson" link="/products/1" />
        <ProductCard img="/Stuhl.png" name="Jeon" link="/products/2" />
        <ProductCard img="/Schuesseln.png" name="Krisha" link="/products/3" />
      </div>
    </>
  );
};
