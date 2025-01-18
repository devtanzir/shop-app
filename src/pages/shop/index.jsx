import { Heart, ChevronDown } from "lucide-react";
import Banner from "../../components/shared/banner";
import BannerImage from "../../assets/images/banner.png";
import Category from "./components/category";
import Trending from "./components/trending";
import DefaultTitle from "./components/default-title";
import Tags from "./components/tags";
import Pagination from "../../components/shared/pagination";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ShopPage = () => {
  const products = [
    {
      name: "PREMIUM NOTCH BLAZER",
      price: "$79.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "PREMIUM SUIT BLAZER",
      price: "$199.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "VINTAGE SWEATSHIRT",
      price: "$99.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "LONGLINE JERSEY JACKET",
      price: "$69.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "TAILORED BLAZER",
      price: "$129.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "OVERCOAT IN CAMEL",
      price: "$89.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "JACKET WITH FRINGE",
      price: "$36.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "NOTCH BLAZER IN LONGLINE",
      price: "$159.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      name: "WAISTCOAT IN NAVY",
      price: "$209.99",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <Banner
        bgImage={BannerImage}
        punchLine="Free Delivery Worldwide."
        title="PET SHOP"
      />

      <div className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-[270px]">
            <div className="mb-12">
              <Category />
            </div>

            <div className="mb-12">
              <Trending />
            </div>

            <div className="mb-12">
              <DefaultTitle title="SEARCH SHOP" />
              <input
                type="search"
                placeholder="SEARCH"
                className="w-full h-[40px] px-4 text-[13px] border border-[#E7E7E7] focus:outline-none focus:border-primary"
              />
            </div>

            <Tags />
          </div>

          {/* Main Content */}
          <div className="lg:flex-1">
            <div className="flex justify-between items-center mb-10">
              <p className="text-[13px] text-[#666]">
                DISPLAYING 1-9 OF 18 RESULTS
              </p>
              <div className="relative">
                <select className="appearance-none border border-[#E7E7E7] h-[40px] pl-4 pr-10 text-[13px] text-[#666] focus:outline-none min-w-[180px]">
                  <option>SORT BY</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {products.map((product) => (
                <div key={product.name} className="group">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover hover:scale-125 transition duration-700 hover:rotate-6 cursor-pointer"
                    />
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-base text-[#666]  tracking-[1.5px] cursor-pointer hover:text-primary transition duration-200">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{product.price}</p>
                </div>
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ShopPage;
