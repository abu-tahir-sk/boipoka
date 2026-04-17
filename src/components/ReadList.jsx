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
    const cities = [
        { name: 'New York', },
        { name: 'Rome', },
       
    ];

  return <div>
     <div className="bg-gray-600/5 py-4 rounded">
       <h2 className="font-bold text-4xl text-center">Books </h2>
     </div>
     <div className="text-center py-4">
      <button className="text-white bg-[#23BE0A] py-3 px-4 rounded-md font-bold"><Dropdown value={sortBy} onChange={(e) => setSortBy(e.value)} options={cities} optionLabel="name" 
    placeholder="Sort By" className="gap-4 " /></button>
         </div>
      Read List:{readList.length}
      <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  
  </div>;
};

export default ReadList;
