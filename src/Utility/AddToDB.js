const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("already added to read list ");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};
export  {addStoredDB,getStoredBook};
