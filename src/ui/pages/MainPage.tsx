import { usePersons } from "../../data/DataModel";
import { PersonList } from "../person";

export default function MainPage(){
    const persons = usePersons();
    if(!persons) return <p>Loading...</p>
    return (
        <div>
            <h1>Data</h1>
            <PersonList persons={persons}/>
        </div>
    )
}