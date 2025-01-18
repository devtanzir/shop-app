import { trendingProducts } from "../../../components/constants/trending";
import DefaultTitle from "./default-title";

const Trending = () => {
  return (
    <>
      <DefaultTitle title="TRENDING PRODUCTS" />
      <div className="space-y-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="flex items-start space-x-4">
            <img
              src={product?.image}
              alt={product.name}
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h3 className="text-[13px] text-black cursor-pointer hover:text-primary tracking-wide">
                {product.name}
              </h3>
              <p className="text-[13px] text-[#666] mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
