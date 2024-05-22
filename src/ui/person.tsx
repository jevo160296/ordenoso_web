import React from "react";
import Box from '@mui/material/Box';
import ListView from "./layouts/ListView";


export type Person = {
    id: number | undefined,
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
        <ListView items={persons} itemViewHolder={(person) => <PersonViewHolder person={person}/>}/>
    )
}