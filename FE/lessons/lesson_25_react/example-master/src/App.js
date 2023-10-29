import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Contacts from "./pages/Contacts/Contacts";
import DetailedProduct from "./pages/DetailedProduct/DetailedProduct";
import SearchPage from "./pages/SearchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:moyId" element={<DetailedProduct />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

// // import React, { useEffect, useState } from "react";

// // const App = () => {
// //   const [userId, setUserId] = useState("0");
// //   const [inputsValues, setInputsValue] = useState("");

// //   const changeIinputValue = (e) => {
// //     // e.target.value занчение inputa
// //     setInputsValue(e.target.value);
// //   };

// //   const searchUser = () => {
// //     setUserId(inputsValues);
// //   };

// //   const getUsersInfo = async () => {
// //     const data = fetch(`/${userId}`);
// //   };

// //   useEffect(() => {
// //     getUsersInfo();
// //   }, [userId]);

// //   return (
// //     <div>
// //       {/* <input value={inputsValues} onChange={(e) => changeIinputValue(e)} /> */}
// //       <input value={inputsValues} onChange={changeIinputValue} />
// //       <button onClick={searchUser}>Search</button>
// //     </div>
// //   );
// // };

// // export default App;






// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement_number, increment_number } from './store/counterReducer.js/counterReducer';

// export default function App() {
//   const dispatch = useDispatch();

//   const { counter } = useSelector((state) => state.counter);

//   const handleIncrementNumber = () => {
//     dispatch(increment_number(1))
//   }
//   const handleDecrementNumber = () => {
//     dispatch(decrement_number(1))
//   }
//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={handleDecrementNumber}>-</button>
//       <button onClick={handleIncrementNumber}>+</button>
//     </div>
//   )
// }
