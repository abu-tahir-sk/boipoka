import { GiCalendarHalfYear } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const WishList1 = ({wish}) => {
      const {
    image,
    bookName,
    author,
    category,
    rating,
    tags,
   
    totalPages,
    yearOfPublishing,
    publisher,
  } = wish;
      return (
           <div className="flex items-start gap-8 p-6 border border-gray-300 rounded-2xl mb-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white  shadow-md">
                 <div className="bg-gray-100  rounded-2xl w-2/12 flex justify-center items-center ">
                   <img
                     className="w-[144px]  h-[200px] rotate-x-15  -rotate-y-30 skew-3 rounded p-4"
                     src={image}
                     alt=""
                   />
                 </div>
                 <div className="w-10/12">
                   <h3 className="text-2xl font-bold py-2">{bookName}</h3>
                   <p><span>By : </span>{author}</p>
                   <div className="flex items-center gap-6 pb-2">
                   <span className="font-bold mr-2">Tags : </span>  {tags.map((tag, index) => (
                       <button className="py-2 px-4 bg-[#23BE0A]/5 text-[#23BE0A]  work-sans text-[16px] font-medium rounded-full" key={index}>#{tag}</button>
                     ))}
                      <span className=" flex items-center gap-2"><GiCalendarHalfYear />Year of Publishing : </span> {yearOfPublishing}
                   </div>
                   <div className="flex items-center gap-4 pb-2">
                       <h5 className="flex items-center gap-2"><IoPeopleOutline />Publisher : {publisher}</h5>
                       <p className="flex items-center gap-2"><MdOutlineContactPage />
           Pages : {totalPages}</p>
                   </div>
                   <div className="border-t border-gray-300"></div>
                   <div className="flex items-center gap-6 pt-3">
                       <button className="text-[#328EFF] bg-[#328EFF]/15 py-2 px-4 rounded-4xl"><span>Category</span>{category}</button>
                       <button className="text-[#FFAC33] bg-[#FFAC33]/15 py-2 px-4 rounded-4xl">Rating : {rating}</button>
                       <button className="text-white bg-[#23BE0A] py-2 px-4 rounded-4xl">View Details</button>
                   </div>
                 </div>
               </div>
      );
};

export default WishList1;