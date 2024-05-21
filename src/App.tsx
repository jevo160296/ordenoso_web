import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState } from "react";
import Person from './ui/person';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const {data, loading, error} = useAxios(`${baseURL}/1`);

  return (
    <div className="App">
      <h1>Data</h1>
      <p>{`Loading: ${loading}`}</p>
      <p>{`Error: ${error}`}</p>
      <Person {...data}/>
    </div>
  );
}

function useAxios(url:string): {data: {title: string, body: string}, loading:any, error:any}{
  const [data, setData] = useState({
    title: "",
    body: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  axios
      .get(url)
      .then((response) => {
        setData(response.data)
        setLoading(false);
      })
      .catch((reason) => setError(reason));
  return {
    data: data,
    loading: loading,
    error: error
  }
}

export default App;
