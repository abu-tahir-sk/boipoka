import { useLoaderData } from "react-router";
import { getStoredBook } from "../Utility/AddToDB";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
        

const ReadList = () => {
  const data = useLoaderData();

  const storedBookData = getStoredBook();
  const convertStoredBook = storedBookData.map((id) => parseInt(id,10));
  const readList = data.filter((book) =>
    convertStoredBook.includes(book.bookId),
  );

   const [sortBy, setSortBy] = useState(null);
    const sortOptions = [
  { name: "Rating", value: "rating" },
  { name: "Pages", value: "totalPages" },
];
   

  return <div>
     <div className="bg-gray-600/5 py-4 rounded">
       <h2 className="font-bold text-4xl text-center">Books </h2>
     </div>
     <div className="text-center py-4">
      <Dropdown value={sortBy} onChange={(e) => setSortBy(e.value)} options={sortOptions} optionLabel="name" 
    placeholder="Sort By" className="gap-4 text-white bg-[#23BE0A] py-3 px-4 rounded-md font-bold" />
         </div>
      Read List:{readList.length}
      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2> {readList.map(read=><div key={read.bookId}>
        <img src={read.image} alt="" />
      </div>)}</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  
  </div>;
};

export default ReadList;
