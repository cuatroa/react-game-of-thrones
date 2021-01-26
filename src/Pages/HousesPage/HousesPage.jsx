import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HousesGallery } from './components/HousesGallery/HousesGallery';
import { HousesSearch } from './components/HousesSearch/HousesSearch';

let allHouses = [];

export function HousesPage () {

    const [filteredHouses, setFilteredHouses] = useState([]);
    console.log('total', allHouses);
    console.log('filtered', filteredHouses);
    
    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses/').then((res) => {
            const housesLocal = res.data;
            allHouses = housesLocal;
            setFilteredHouses(housesLocal)
        })
    }, [])

    const filterHouses = (filterValues) => {
        const filteredLocalHouses = [];

        for (const house of allHouses) {
            let houseIsOk = true;
            for (const key in filterValues) {
                if (filterValues.hasOwnProperty(key)) {
                    const localValue = house[key];
                    const filterValue = filterValues[key];
                    if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
                        houseIsOk = false;
                        break;
                    }
                }
            }

            if (houseIsOk) {
                filteredLocalHouses.push(house);
            }
        }

        setFilteredHouses(filteredLocalHouses);
    }


    return (
        <div>
            <HousesSearch fnSubmit={filterHouses}/>
            <HousesGallery houses={filteredHouses}/>
        </div>
    );
}