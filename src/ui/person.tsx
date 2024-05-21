import React from "react";
import Box from '@mui/material/Box';


export type Person = {
    name: string
}

export function PersonViewHolder(props: {person: Person}){
    const person = props.person
    return (
        <Box>
            Person: {person.name}
        </Box>
    )
}

export function PersonList(props: {persons: Array<Person>}){
    const persons = props.persons
    return (
        <div>
            {persons.map((person) => <PersonViewHolder person={person}/>)}
        </div>
    )
}