import React from "react";
import Box from '@mui/material/Box';
import ListView from "./layouts/ListView";
import { Skeleton } from "@mui/material";


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

export function PersonList(props: {persons: Array<Person>|null, personsError:any}){
    const {persons,personsError} = props
    if(personsError) return (<p>Error!: {JSON.stringify(personsError)}</p>)
        if(!persons) return (
            <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center"
            }}>
                <Skeleton variant="rounded" width={"90%"} height={100}/>
            </Box>
        )
        return (
            <ListView items={persons} itemViewHolder={(person) => <PersonViewHolder person={person}/>}/>
        )
}