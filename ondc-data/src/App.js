import React, { useState,useEffect }  from 'react';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import DisplayData from './Pages/DisplayData/DisplayData';
import CustomerData from './Pages/CustomerData/CustomerData';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));


  //   }

  //   getUsers()

  // }, [])
  return (
    <div className="App">
      {/* {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Aadhar ID: {user.aadhar}</h1>
            <h1>Ration ID: {user.ration}</h1>
            <h1>Driving ID: {user.driving}</h1>
            <h1>ONDC: {user.ondc}</h1>
            <h1>Phone No: {user.phnno}</h1>
            <h1>Job: {user.job}</h1>
            <h1>Rating: {user.rating}</h1>
          </div>
        );
      })} */}
      <Routes>
        <Route path='/display' element={<DisplayData />}/>
        <Route path="/input" element={<CustomerData />}/>
      </Routes>
    </div>
  );
}

export default App;
