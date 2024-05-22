import { Box, Skeleton } from "@mui/material"
import ListView from "./layouts/ListView"


export type Restaurant = { 
    id: number|undefined,
    name: string 
}

export function RestaurantViewHolder(props: {restaurant: Restaurant}){
    const restaurant = props.restaurant
    return (
        <Box>
            Restaurant: {restaurant.name}
        </Box>
    )
}

export function RestaurantList(props: {restaurants: Array<Restaurant>|null, restaurantsError:any}){
    const restaurants = props.restaurants;
    const restaurantsError = props.restaurantsError;
    if(restaurantsError) return (<p>Error!: {JSON.stringify(restaurantsError)}</p>)
    if(!restaurants) return (
        <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center"
        }}>
            <Skeleton variant="rounded" width={"90%"} height={100}/>
        </Box>
    )
    return <ListView 
        items={restaurants} 
        itemViewHolder={(restaurant) => <RestaurantViewHolder restaurant={restaurant}/>}
        />
}