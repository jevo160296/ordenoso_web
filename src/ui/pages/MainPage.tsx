import { usePersons, useRestaurants } from "../../data/DataModel";
import { PersonList } from "../person";
import { RestaurantList } from "../restaurant";

export default function MainPage(){
    const persons = usePersons();
    const restaurants = useRestaurants();
    if(!persons || !restaurants) return <p>Loading...</p>
    return (
        <div>
            <h1>Data</h1>
            <PersonList persons={persons}/>
            <RestaurantList restaurants={restaurants}/>
        </div>
    )
}