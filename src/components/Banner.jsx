

const Banner = () => {
  return (
    <div className="md:flex items-center justify-between rounded bg-[#131313]/5 p-10 ">
      <div className="">
        <h1 className="text-5xl  font-bold playfair-display leading-snug mb-2">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="bg-[#23BE0A]  px-4 py-3 text-white font-bold rounded  hover:bg-green-600 inline-block active:translate-y-px shadow  hover:shadow-xl ">
          View The List
        </button>
      </div>
      <div>
        <img src="../../src/assets/image/pngwing 1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
