import { BottomNavigation, BottomNavigationAction, Button, Stack, TextField } from "@mui/material";
import { createPerson, createRestaurant, mockUrl, url, usePersons, useRestaurants } from "../../data/DataModel";
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
    const {persons, error:errorPersons} = usePersons(url);
    const {restaurants, error:errorRestaurants} = useRestaurants(url);
    const [selectedPage, setSelectedPage] = useState(0);
    const [name, setName] = useState<string|null>(null);
    let navigate = useNavigate();
    return (
        <Stack
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
            <Stack direction="row" spacing="8px" sx={{paddingLeft:"8px", paddingRight:"8px"}}>
                <TextField sx={{flex:1}} label="Name" variant="outlined" value={name} onChange={(event) => {setName(event.target.value)}}/>
                <Button onClick={() => {
                    if(selectedPage === 0){
                        createPerson(url,{
                            name: name ?? "Empty",
                            id: undefined
                        },
                            () => {},
                            (reason: any) => {alert(`Error creating person: ${reason}`)}
                    )
                    }
                    else{
                        createRestaurant(url,{
                            name: name ?? "Empty",
                            id: undefined
                        },
                        () => {},
                        (reason: any) => {alert(`Error creating restaurant: ${reason}`)}
                    )
                    }
                }}>Click me</Button>
            </Stack>
            <Pager 
                selectedPage={selectedPage} 
                persons={persons} 
                restaurants={restaurants}
                personsError={errorPersons}
                restaurantsError={errorRestaurants}
            />
        </Stack>
    )
}

function Pager(props: {
    selectedPage: number,
    persons: Array<Person>|null,
    personsError: any,
    restaurants: Array<Restaurant>|null,
    restaurantsError: any
}){
    const {
        selectedPage,
        persons,
        restaurants,
        personsError
    } = props
    const restaurantError = props.restaurantsError
    if(selectedPage === 0){
        return (
            <div>
                <h1>Person List</h1>
                <PersonList persons={persons} personsError={personsError}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Restaurant List</h1>
                <RestaurantList restaurants={restaurants} restaurantsError={restaurantError}/>
            </div>
        )
    }
}