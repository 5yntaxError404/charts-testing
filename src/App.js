import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes, Outlet } from "react-router";
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';
import { Line } from 'react-chartjs-2';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart'

// READ ME BEFORE EDITING.
/*
  FIRST THINGS FIRST RUN THE FOLLOWING NPMS.

  npm i chart.js && npm i react-chartjs-2


  Second, these will require a JSON file to work properly. API
  Should have made an endpoint to make it easy to grab budget data.
  Simply follow the same layout below. Animations can be changed,
  however, animations are already applied by default ;)
 
  Third, I have listed MULTIPLE charts for you guys to use. Please
  Try to find a way to use them all! Its just a simple copy paste!
  Resize to what you  need, color it how you want and etc.
*/

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id), // i believe this is the axis labels?
    datasets: // Add more please, should match DB and Both Sides of FE.
    [
      {
        label: "Monthly Income",  // legend example
        data: UserData.map((data) => data.MonthlyIncome),
        data: UserData.map((data) => data.Travel),  // Pretty sure you can concatenate data types so it just has one category.
        backgroundColor:["green","cyan"], // can use RGBA and HEX Values.
        borderColor:["black"],  // can have a border too
        borderWidth: 2
      },
      {
        label: "Housing",
        data: UserData.map((data) => data.Housing),
        backgroundColor:["blue"],
        borderColor:["black"],  // can have a border too
        borderWidth: 2
      },
      {
        label: "Entertainment",
        data: UserData.map((data) => data.Entertainment),
        backgroundColor:["orange"],
        borderColor:["black"],  // can have a border too
        borderWidth: 2
      },
  ]
  });

  // The charts below should be used according to what info we need. 


  return (
    <div className="App">
      <div style={{width: 700}}>
        <BarChart chartData={userData}/>
        <LineChart chartData={userData}/>
        <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
