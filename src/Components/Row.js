import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';
import { v4 as uuidv4 } from "uuid";

const baseUrl = "https://rickandmortyapi.com/api/character";

function Row({ title , fetchUrl }) {
  const [char, setChar] = useState([]);  
  const [id, setId] = useState("");

  useEffect(() => {
    async function fetchData(){
     const request = await axios.get(fetchUrl);
     setChar(request.data.results);
     console.log(request.data.results);
     return request;
    } fetchData();
    
  }, [setChar]); 

    return (
        <div className="row" >
               {char.map(char =>(
                 <div className='row__card' key={uuidv4()} >
                <img 
                key={char.id}                
                className={`row__image`}
                src={`${char.image}`}
                /> 
                <p className='row__name' key={uuidv4()}>
                  Name: {char.name} </p>
                  <p className='row__name' key={uuidv4()}>
                  Status: {char.status}</p>
                  <p className='row__name' key={uuidv4()}>
                  Location: {char.location.name}  </p>
                  <p className='row__name' key={uuidv4()}>
                  Origin: {char.origin.name} </p>
                  <p className='row__name' key={uuidv4()}>
                  Species: {char.species} </p>
                  <p className='row__name' key={uuidv4()}>
                  Gender: {char.gender} </p>
              </div>             
              ))}
        </div>
    )
}

export default Row;