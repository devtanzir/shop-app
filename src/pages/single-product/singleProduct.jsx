import { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import PlaceHolderImage from "../../assets/images/placeholder.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isColorOpen, setIsColorOpen] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border border-gray-200" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Brown", class: "bg-amber-800" },
  ];

  const { productId } = useParams();
  const { products } = useSelector((state) => state.product);

  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) return null;

  console.log(currentProduct);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-2/3">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Main Image */}
              <div className="flex-1 aspect-[3/4] relative rounded-lg overflow-hidden">
                <img
                  src={currentProduct.image || PlaceHolderImage}
                  alt={currentProduct.name}
                  className="object-cover w-full h-[90vh] rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Title and Rating */}
              <div className="mb-6">
                <h1 className="text-2xl font-semibold mb-2">
                  {currentProduct.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">128 Reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-semibold">
                    ${currentProduct.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${currentProduct.price * 2}
                  </span>
                  <span className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded">
                    -50%
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Color</span>
                  <button
                    onClick={() => setIsColorOpen(!isColorOpen)}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    Select Color <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
                {isColorOpen && (
                  <div className="flex gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full ${color.class} border border-gray-700`}
                        title={color.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Size</span>
                  <button className="text-sm text-gray-600">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`py-2 text-sm border rounded-md transition-colors ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <span className="font-medium block mb-2">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-md w-32">
                  <button
                    className="p-2"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button
                    className="p-2"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-200 rounded-md hover:border-gray-400">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-200 rounded-md hover:border-gray-400">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Product Information Tabs */}
              <div>
                <div className="flex border-b border-gray-200 mb-4">
                  {["Description", "Details", "Delivery"].map((tab) => (
                    <button
                      key={tab}
                      className={`py-2 px-4 text-sm font-medium ${
                        activeTab === tab.toLowerCase()
                          ? "border-b-2 border-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {activeTab === "description" && (
                    <p>
                      Our Premium Cotton T-Shirt is crafted from 100% organic
                      cotton, providing exceptional comfort and durability. The
                      classic fit ensures a timeless look, while the breathable
                      fabric keeps you cool throughout the day. Perfect for
                      everyday wear, this versatile piece is a must-have
                      addition to your wardrobe.
                    </p>
                  )}
                  {activeTab === "details" && (
                    <ul className="list-disc list-inside">
                      <li>100% organic cotton</li>
                      <li>Pre-shrunk fabric</li>
                      <li>Classic fit</li>
                      <li>Ribbed crew neck</li>
                      <li>Machine washable</li>
                    </ul>
                  )}
                  {activeTab === "delivery" && (
                    <div>
                      <p className="mb-2">
                        Free standard shipping on orders over $50
                      </p>
                      <ul className="list-disc list-inside">
                        <li>Standard delivery: 3-5 working days</li>
                        <li>Express delivery: 1-2 working days</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
