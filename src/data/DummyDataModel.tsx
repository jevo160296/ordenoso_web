import { Person } from "../ui/person";
import { Restaurant } from "../ui/restaurant";



export function usePersons(): Array<Person>{
    const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    return values.map((value) => {return {id: value, name: `P${value}`}})
}

export function useRestaurants(): Array<Restaurant>{
    const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    return values.map((value) => {return {id: value, name: `R${value}`}})
}

export function createPerson(props: {person: Person}){}

export function createRestaurant(props: {restaurant: Restaurant}){}