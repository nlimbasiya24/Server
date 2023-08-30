
import './App.css';
import {MovieDetailsCard} from "./components/MovieDetailsCard"
import { useState,useEffect } from 'react';
import axios from "axios";

function App() {

  const [movies,setMovies]=useState([
  {id:1,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:2,name:"Titnic",rating:"6.7",releasedDate:"10-5-2023"},
  {id:3,name:"Jawan",rating:"6.7",releasedDate:"10-5-2023"},
  {id:4,name:"KGF",rating:"6.7",releasedDate:"10-5-2023"},
  {id:5,name:"KGF2",rating:"6.7",releasedDate:"10-5-2023"},
  {id:6,name:"RRR",rating:"6.7",releasedDate:"10-5-2023"},
  {id:7,name:"Bahubali",rating:"6.7",releasedDate:"10-5-2023"},
  {id:8,name:"Bhubali2",rating:"6.7",releasedDate:"10-5-2023"},
  {id:9,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:10,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:11,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:12,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:13,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:14,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:15,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:16,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:18,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:19,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
  {id:20,name:"DDlj",rating:"6.7",releasedDate:"10-5-2023"},
])

useEffect(()=>{

  async function sendData(){
    try {
      // await axios.post("/api/movies", movies);
         const response = await fetch("http://localhost:5000/api/movies", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body:JSON.stringify({ movies }),
         });

       const note = await response.json();
      console.log('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  sendData()

},[])


  return (
    <div className="App">
      <h1> Movies</h1>
      <div className='list-movies'>
        {movies.map((movie) => (
          <MovieDetailsCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
