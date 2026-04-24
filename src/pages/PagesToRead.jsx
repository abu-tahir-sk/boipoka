import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  Cell,
} from "recharts";
import { useLoaderData } from "react-router";

// const TriangleBar = (props) => {
//   const { x, y, width, height, fill } = props;
//   return (
//     <path
//       d={`M ${x},${y + height} 
//           L ${x + width / 2},${y} 
//           L ${x + width},${y + height} Z`}
//       fill={fill}
//     />
//   );
// };
const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <path
     
      d={`M ${x},${y + height} 
          L ${x + width / 2},${y} 
          L ${x + width},${y + height} Z`}
     
      fill={fill}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const PagesToRead = () => {
  const data = useLoaderData();

  const colors = ["#1e90ff", "#14b8a6", "#fbbf24", "#fb923c", "#ef4444"];

  return (
    <div className="text-black w-full h-screen flex flex-col items-center">
      <h2
        style={{
          textAlign: "center",
          color: "#3b82f6",
          marginBottom: "20px",
        }}
      >
        Reading Progress
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <XAxis dataKey="bookName" />
          <YAxis />

          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;