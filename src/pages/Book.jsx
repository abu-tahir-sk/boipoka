const Book = ({ singleBook }) => {
  const { image,bookName,author
 } = singleBook;
  return (
    <div className="border">
      <div className="bg-gray-100 m-6   rounded-2xl  ">
        <img className="w-[124px] p-4 h-[177px] rounded mx-auto" src={image} alt="" />
      </div>
      <div>
        <div className="flex justify-around items-center">
          <span>Young Adult</span> <span>Identity</span>
        </div>
        <h4 className="font-bold text-3xl">{bookName
}</h4>
<p>By:{author}</p>
      </div>
    </div>
  );
};

export default Book;
