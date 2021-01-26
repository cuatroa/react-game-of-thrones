import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { HousesItem } from './components/HousesItem/HousesItem';

export function HousesDetailPage () {

    let { name } = useParams();
    const [house, setHouse] = useState([]);
  
    useEffect(() => {
      axios.get(`https://api.got.show/api/show/houses/${name}`).then((res) => {
        const house = res.data[0];
        setHouse(house);
        
      });
    }, []);
  
    return (
      <div>
        <HousesItem house={house}/>
      </div>
    );
  }