import { BottomNavigation, BottomNavigationAction, Button, Stack } from "@mui/material";
import { createPerson, mockUrl, usePersons, useRestaurants } from "../../data/DataModel";
import { Person, PersonList } from "../person";
import { Restaurant, RestaurantList } from "../restaurant";
import { useState } from "react";
import MainAppBar from "../widgets/MainAppBar";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { navigateToLoginPage } from "./LoginPage";

export const MAINROUTE = "/dashboard"

export function navigateToMainPage(navigate: NavigateFunction){navigate(MAINROUTE)}

export default function MainPage(){
    const url = mockUrl;
    const persons = usePersons(url);
    const restaurants = useRestaurants(url);
    const [selectedPage, setSelectedPage] = useState(0);
    let navigate = useNavigate();
    return (
        <Stack
            alignItems="stretch"
            justifyContent="space-between"
        >
            <MainAppBar onLogout={() => {navigateToLoginPage(navigate)}}/>
            <BottomNavigation
                showLabels
                value={selectedPage}
                onChange={(event, newValue) => { setSelectedPage(newValue) }}
            >
                <BottomNavigationAction label="Persons"/>
                <BottomNavigationAction label="Restaurants"/>
            </BottomNavigation>
            <Button onClick={() => {
                createPerson(url,{
                    name: "PersonName",
                    id: undefined
                })
            }}>Click me</Button>
            <Pager 
                selectedPage={selectedPage} 
                persons={persons} 
                restaurants={restaurants}
            />
        </Stack>
    )
}

function Pager(props: {
    selectedPage: number,
    persons: Array<Person>|null,
    restaurants: Array<Restaurant>|null
}){
    const selectedPage = props.selectedPage
    const persons = props.persons
    const restaurants = props.restaurants
    if(selectedPage === 0){
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