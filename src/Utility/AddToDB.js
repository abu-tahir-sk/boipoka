const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const getStoredWishList = () => {
  const storedBookSTR = localStorage.getItem("wishList");
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

const addWishListDB = (id) => {
  const storedBookData = getStoredWishList();
  if (storedBookData.includes(id)) {
    alert("alresdy save to wish");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("wishList", data);
  }
};
export { addStoredDB, getStoredBook, getStoredWishList, addWishListDB };
