import axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "../ui/person";
import { Restaurant } from "../ui/restaurant";

export const url = "https://us-central1-helloktor-422701.cloudfunctions.net"
//The next url is used with json server instance.
export const mockUrl = "http://192.168.1.5:3030"

export function usePersons(url: string): Array<Person>{
  const {data} = useAxiosRepeater(`${url}/get_persons?cant=10`, 1000)
  return data
}

export function useRestaurants(url: string): Array<Restaurant>{
  const {data} = useAxiosRepeater(`${url}/get_restaurants?cant=10`, 1000)
  return data
}

export function createPerson(url: string, person: Person){
  axios
    .post(
      `${url}/get_persons`,
      person
    )
}

export function createRestaurant(restaurant: Restaurant){}

function useAxiosRepeater(url: string, time: number): {data: any, loading: any,error:any}{
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data)
          setLoading(false);
        })
        .catch((reason) => setError(reason))
    }, time);
    return () => clearInterval(interval);
  }, [url, time]);
  return {
    data: data,
    loading: loading,
    error: error
  }
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