import { Box, Skeleton } from "@mui/material"
import ListView from "./layouts/ListView"


export type Restaurant = { 
    restaurantId: number,
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

export function RestaurantList(props: {restaurants: Array<Restaurant>|null}){
    const restaurants = props.restaurants;
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