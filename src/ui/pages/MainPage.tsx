import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePersons, useRestaurants } from "../../data/DataModel";
import { Person, PersonList } from "../person";
import { Restaurant, RestaurantList } from "../restaurant";
import { useState } from "react";

export default function MainPage(){
    const persons = usePersons();
    const restaurants = useRestaurants();
    const [selectedPage, setSelectedPage] = useState(0);
    if(!persons || !restaurants) return <p>Loading...</p>
    return (
        <div>
            <Pager 
                selectedPage={selectedPage} 
                persons={persons} 
                restaurants={restaurants}
            />
            <BottomNavigation
                showLabels
                value={selectedPage}
                onChange={(event, newValue) => { setSelectedPage(newValue) }}
            >
                <BottomNavigationAction label="Persons"/>
                <BottomNavigationAction label="Restaurants"/>
            </BottomNavigation>
        </div>
    )
}

function Pager(props: {
    selectedPage: number,
    persons: Array<Person>,
    restaurants: Array<Restaurant>
}){
    const selectedPage = props.selectedPage
    const persons = props.persons
    const restaurants = props.restaurants
    if(selectedPage == 0){
        return (
            <div>
                <h1>Person List</h1>
                <PersonList persons={persons}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Restaurant List</h1>
                <RestaurantList restaurants={restaurants}/>
            </div>
        )
    }
}