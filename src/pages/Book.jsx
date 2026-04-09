const Book = ({ singleBook }) => {
 const {image}=singleBook
  return (
    <div>
     <img src={image} alt="" />
    </div>
  );
};

export default Book;
