import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {index: true, Component: Home}
    ]
  },
]);
export default router;