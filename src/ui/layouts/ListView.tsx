import { ReactNode } from "react"

export default function ListView<T>(props: {
    items: Array<T>,
    itemViewHolder: (item: T) => ReactNode
}){
    const items = props.items
    const itemViewHolder = props.itemViewHolder
    return (
        <div>
            {items.map(itemViewHolder)}
        </div>
    )
}