import Rating from "@mui/material/Rating";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { image, bookName, author, category, rating, tags,bookId } = singleBook;
  return (
    <Link to={`/book-details/${bookId}`} className="border border-[#131313]/15 p-6 rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  shadow-md">
      <div className="bg-gray-100 mb-6 rounded-2xl  ">
        <img
          className="w-[124px] p-4 h-[177px] rotate-x-15  -rotate-y-30 skew-3 rounded mx-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-grow">
        <div className="flex gap-4 ">
          {tags.map((tag, index) => (
            <button  className="py-2 px-4 bg-[#23BE0A]/5 text-[#23BE0A]  work-sans text-[16px] font-medium rounded-full" key={index}>{tag}</button>
          ))}
          
        </div>
        <h4 className="font-bold text-2xl playfair-display mt-4 ">
          {bookName}
        </h4>
        <p className="">By:{author}</p>
      </div>
      <div className="border-b border-[#131313]/15  border-dashed pt-5"></div>

      <div className="flex justify-between items-center pt-5">
        <div className="font-medium">{category}</div>
        <div className="flex">
          <h6>{rating}</h6>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      </div>
    </Link>
  );
};

export default Book;
