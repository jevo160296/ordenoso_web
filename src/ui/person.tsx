import React from "react";

function Person(data: {title: string, body: string}){
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Person;