import React , {useState}from 'react'
import './CustomerData.css'
import {db} from "../../firebase-config"
import {collection,getDocs, addDoc, addDocs} from "firebase/firestore";

function CustomerData() {
    const {newName, setNewName} = useState("");
    const {newAadhar, setNewAadhar} = useState(0);
    const {newRation, setNewRation} = useState(0);
    const {newPhn, setNewPhn} = useState(0);
    const {newDriving, setNewDriving} = useState(0);
    const {newRating, setNewRating} = useState(0);
    const {newJob, setNewJob} = useState("");

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name:newName,aadhar:newAadhar,
            ration:newRation,phn:newPhn,driving:newDriving,rating:newRating,
            job:newJob} );

    };
  return (
    <div className="main-container">
        <h1 className='input-title'>Customer Details</h1>
        <div className="sub-container">
            <input type="string" placeholder="Client Name" 
            onChange={(event) =>
            {setNewName(event.target.value);                
            }} 
        />
            <input type="number" placeholder="Aadhar Number" onChange={(event) =>
            {setNewAadhar(event.target.value);                
            }} required/>
            <input type="number" placeHolder="Ration ID" onChange={(event) =>
            {setNewRation(event.target.value);                
            }}
            required/>
            <input type="number" placeHolder="Phone Number" onChange={(event) =>
            {setNewPhn(event.target.value);                
            }} required/>
            <input type="number" placeHolder="Driving ID" onChange={(event) =>
            {setNewDriving(event.target.value);                
            }}
            />
            <input type="number" placeholder="Rating" onChange={(event) =>
            {setNewRating(event.target.value);                
            }} />
            <input type="string" placeholder='Your Profession' onChange={(event) =>
            {setNewJob(event.target.value);                
            }}/>
            <button onClick={createUser}>Submit</button>
        </div>
    </div>
  )
}

export default CustomerData