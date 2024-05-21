import axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "../ui/person";
import { Restaurant } from "../ui/restaurant";

const url = "https://us-central1-helloktor-422701.cloudfunctions.net"

export function usePersons(): Array<Person>{
  const {data} = useAxios(`${url}/get_persons?cant=10`)
  return data
}

export function useRestaurants(): Array<Restaurant>{
  const {data} = useAxios(`${url}/get_restaurants?cant=10`)
  return data
}

function useAxios(url:string): {data: any, loading:any, error:any}{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
      axios
        .get(url)
        .then((response) => {
          setData(response.data)
          setLoading(false);
        })
        .catch((reason) => setError(reason))
    }, [url]
    );
    return {
      data: data,
      loading: loading,
      error: error
    }
  }