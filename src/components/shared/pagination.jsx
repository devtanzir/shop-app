const Pagination = () => {
  return (
    <>
      <div className="flex justify-center mt-16 space-x-1">
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          ‹
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] bg-[#EF2D56] text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          5
        </button>
        <button className="w-8 h-8 flex items-center justify-center border border-[#E7E7E7] text-[#666] hover:bg-black hover:text-white">
          ›
        </button>
      </div>
    </>
  );
};

export default Pagination;
