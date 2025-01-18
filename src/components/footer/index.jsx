import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F8F8F8] py-16">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-[11px] font-semibold mb-6 tracking-wide">
                ABOUT COMET
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed mb-6">
                Fourth Floor
                <br />
                New York, NY 10011
                <br />
                hello@comet.com
              </p>
              <button className="h-[40px] px-6 border border-[#E7E7E7] text-[11px] tracking-wide hover:bg-black hover:text-white transition-colors">
                HIRE US
              </button>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold mb-6 tracking-wide">
                CULTURE
              </h3>
              <ul className="space-y-[11px]">
                {["CULTURE", "TEAM", "PROCESS", "STORY", "CAREERS"].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-[13px] text-[#666] tracking-wide"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold mb-6 tracking-wide">
                CASE STUDIES
              </h3>
              <ul className="space-y-[11px]">
                {[
                  "NELEMAN CAVA",
                  "SWEET LANE",
                  "JEFF BURGER",
                  "JUICE MEDIA",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-[#666] tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold mb-6 tracking-wide">
                STAY IN TOUCH
              </h3>
              <p className="text-[13px] text-[#666] mb-6">
                Sign up to get the latest updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="flex-1 h-[40px] px-4 text-[13px] border border-r-0 border-[#E7E7E7] focus:outline-none"
                />
                <button className="h-[40px] px-6 bg-[#EF2D56] text-white text-[11px] tracking-wide hover:bg-black transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-[13px] text-[#666]">
              © {new Date().getFullYear()} Tanzir Agency
            </p>
            <div className="flex items-center space-x-8">
              {["About", "Services", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={"/"}
                  className="text-[13px] text-[#666] hover:text-black tracking-wide"
                >
                  item
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
