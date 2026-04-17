
import { useLoaderData, useParams } from "react-router";
import { addStoredDB } from "../Utility/AddToDB";


const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);

  const {
    image,
    bookName,
    author,
    category,
    rating,
    tags,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = singleBook;

  const handleRead = (id) => {
    console.log(id)
    addStoredDB(id)
  }

  return (
    <div className=" flex justify-center gap-12  overflow-hidden bg-white mt-14">
      <div className="w-1/2 p-16 bg-[#131313]/5 rounded-lg ">
        <img className="w-[425px] h-[564px] mx-auto  transition-all duration-300 hover:shadow-xl hover:-translate-y-1   skew-3" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <h4 className="font-bold text-2xl playfair-display mt-4 ">
          {bookName}
        </h4>
        <h5 className="">By:{author}</h5>

        <div className="border-b border-[#131313]/15   pt-5"></div>

        <div className="flex justify-between items-center pt-5">
          <div className="font-medium">{category}</div>
        </div>
        <div className="border-b border-[#131313]/15   pt-5"></div>
        <p>{review}</p>

        <div className="flex gap-4 items-center">
          <div className="font-bold">Tags</div>

          {tags.map((tag, index) => (
            <div>
              <button
                className="py-2 px-4 bg-[#23BE0A]/5 text-[#23BE0A]  work-sans text-[16px] font-medium rounded-full"
                key={index}
              >
                #{tag}
              </button>
            </div>
          ))}
        </div>
        <div className="border-b border-[#131313]/15   pt-5"></div>

       <table class="table-auto w-full text-left">

  <tbody>
    <tr>
      <td class="px-4 py-2">Number of pages:</td>
      <td class="px-4 py-2">{totalPages}</td>
    </tr>
    <tr>
      <td class="px-4 py-2">Publisher:</td>
      <td class="px-4 py-2">{publisher}</td>
    </tr>
    <tr>
      <td class="px-4 py-2">Year of Publishing:</td>
      <td class="px-4 py-2">{yearOfPublishing}</td>
    </tr>
    <tr>
      <td class="px-4 py-2">Rating:</td>
      <td class="px-4 py-2">{rating}</td>
    </tr>
  </tbody>
</table>
<div className="flex gap-8 mt-8"><button className="border border-gray-600/25 py-2 px-3 rounded-lg font-bold" onClick={()=>handleRead(id)}>Read</button> <button className="text-white bg-[#50B1C9] font-bold py-2 px-4 rounded-lg">Wishlist</button></div>
      </div>
    </div>
  );
};

export default BookDetails;
