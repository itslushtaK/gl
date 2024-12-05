const CategoryCard = () => {
  return (
    <div className="flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center justify-center gap-4 font-semibold sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903]">
        Develop
      </div>
      <div className="bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360]">
        Design
      </div>
    </div>
  );
};

export default CategoryCard;
