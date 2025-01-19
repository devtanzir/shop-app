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
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/shared/loader";

const ShopPage = () => {
  const { publishedProducts, loading } = useSelector((state) => state.product);

  // Local state for sorting and pagination
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sorting logic
  const sortedProducts = [...publishedProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1); // Reset to the first page on sort change
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader text="Please wait..." size={40} color="text-green-500" />
      </div>
    );
  }

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
                DISPLAYING {paginatedProducts.length} OF{" "}
                {publishedProducts.length} RESULTS
              </p>
              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={handleSortChange}
                  className="appearance-none border border-[#E7E7E7] h-[40px] pl-4 pr-10 text-[13px] text-[#666] focus:outline-none min-w-[180px]"
                >
                  <option value="">SORT BY</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {paginatedProducts.map((product) => (
                <div key={product.name} className="group">
                  <div className="relative overflow-hidden mb-4">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover hover:scale-125 transition duration-700 cursor-pointer"
                      />
                    </Link>
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-base text-[#666]  tracking-[1.5px] cursor-pointer hover:text-primary transition duration-200 line-clamp-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
