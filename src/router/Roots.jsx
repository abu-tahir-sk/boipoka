import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import PagesToRead from "../pages/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        Component: PagesToRead,
        path: "/pages-to-read",
      },
    ],
  },
]);
export default router;
