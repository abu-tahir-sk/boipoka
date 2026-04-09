import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div
      className="work-sans
            "
    >
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
