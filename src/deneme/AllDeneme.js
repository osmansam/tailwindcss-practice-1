import { React, useState, useEffect } from "react";
import axios from "axios";

const AllDeneme = () => {
  const [deneme, setDeneme] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/deneme")
      .then((res) => {
        setDeneme(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deneme/${id}`);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <div>
      {deneme.map((deneme) => {
        return (
          <div className="deneme" key={deneme._id}>
            <h1>{deneme.ad}</h1>
            <h1>{deneme.soyad}</h1>
            <h1>{deneme.yas}</h1>
            <button onClick={() => handleDelete(deneme._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default AllDeneme;
