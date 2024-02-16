import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

function PieChart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
  const colors = ["aqua", "green", "violet", "blue", "black", "blueviolet"];
  const backgroundColors = colors.slice(0, uniqueCategories.length);

  const data = {
    labels: uniqueCategories,
    datasets: [
      {
        data: uniqueCategories.map((category) =>
          products.filter((product) => product.category === category).length
        ),
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {};

  return (
    <div style={{ width: "50%" }}>
      <Pie
        style={{ padding: "50px", width: "50%", height: "150px" }}
        data={data}
        options={options}
      ></Pie>
    </div>
  );
}

export default PieChart;
