import axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "../ui/person";
import { Restaurant } from "../ui/restaurant";

export const url = "https://us-central1-helloktor-422701.cloudfunctions.net"
//The next url is used with json server instance.
export const mockUrl = "http://192.168.1.5:3030"

export function usePersons(url: string): {
  persons: Array<Person>|null,
  loading: any,
  error: any
}{
  const {data, loading, error} = useAxiosRepeater(`${url}/get_persons?cant=10`, 1000)
  return {
    persons: data,
    loading: loading,
    error: error
  }
}

export function useRestaurants(url: string): {
  restaurants: Array<Restaurant>|null,
  loading: any,
  error: any
}{
  const {data, loading, error} = useAxiosRepeater(`${url}/get_restaurants?cant=10`, 1000)
  return {
    restaurants: data,
    loading: loading,
    error: error
  }
}

export function createPerson(url: string, person: Person){
  axios
    .post(
      `${url}/get_persons`,
      person
    )
}

export function createRestaurant(url: string, restaurant: Restaurant){
  axios
  .post(
    `${url}/get_restaurants`,
    restaurant
  )
}

function useAxiosRepeater(url: string, time: number): {data: any|null, loading: any,error:any}{
  const [data, setData] = useState<any|null>(null);
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