import { Box } from "@mui/material"
import ListView from "./layouts/ListView"


export type Restaurant = { name: string }

export function RestaurantViewHolder(props: {restaurant: Restaurant}){
    const restaurant = props.restaurant
    return (
        <Box>
            Restaurant: {restaurant.name}
        </Box>
    )
}

export function RestaurantList(props: {restaurants: Array<Restaurant>}){
    return <ListView 
        items={props.restaurants} 
        itemViewHolder={(restaurant) => <RestaurantViewHolder restaurant={restaurant}/>}
        />
}