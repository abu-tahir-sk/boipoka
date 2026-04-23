import { useLoaderData } from "react-router";
import { getStoredBook, getStoredWishList } from "../Utility/AddToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import ReadList1 from "./ReadList1";
import WishList1 from "./WishList1";

const ReadList = () => {
  const data = useLoaderData();

  const storedBookData = getStoredBook();
  const convertStoredBook = storedBookData.map((id) => parseInt(id, 10));
  const readList = data.filter((book) =>
    convertStoredBook.includes(book.bookId),
  );
  const storedWishList = getStoredWishList();
  const convertStoredWishList = storedWishList.map((id) => parseInt(id, 10));
  const wishList = data.filter((book) =>
    convertStoredWishList.includes(book.bookId),
  );

  const [sortBy, setSortBy] = useState(null);
  const sortOptions = [
    { name: "Rating", value: "rating" },
    { name: "Pages", value: "totalPages" },
  ];

  return (
    <div>
      <div className="bg-gray-600/5 py-4 rounded">
        <h2 className="font-bold text-4xl text-center">Books </h2>
      </div>
      <div className="text-center py-4">
        <Dropdown
          value={sortBy}
          onChange={(e) => setSortBy(e.value)}
          options={sortOptions}
          optionLabel="name"
          placeholder="Sort By"
          className="gap-4 text-white bg-[#23BE0A] py-3 px-4 rounded-md font-bold"
        />
      </div>
      
      <Tabs>
        <TabList className="mb-6 border-b-2 border-gray-400">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
        
            {readList.map((read) => (
              <ReadList1 key={read.bookId} read={read}></ReadList1>
            ))}
          
        </TabPanel>
        <TabPanel>
        
           
            {wishList.map((wish) => (
              <WishList1 key={wish.bookId} wish={wish}></WishList1>
            ))}
         
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
