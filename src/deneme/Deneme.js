import { React, useState } from "react";
import axios from "axios";

const Deneme = () => {
  const [values, setValues] = useState({
    ad: "",
    soyad: "",
    yas: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/deneme", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      window.location.reload();
    }, 10);

    setValues({
      ad: "",
      soyad: "",
      yas: "",
    });
  };
  return (
    <form
      className="w-1/3 capitalize flex flex-col justify-center items-center "
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="ad">Ad</label>
        <input
          type="text"
          id="ad"
          name="ad"
          value={values.ad}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="soyad">Soyad</label>
        <input
          type="text"
          id="soyad"
          name="soyad"
          value={values.soyad}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="yas">Yas</label>
        <input
          type="text"
          id="yas"
          name="yas"
          value={values.yas}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Deneme;
