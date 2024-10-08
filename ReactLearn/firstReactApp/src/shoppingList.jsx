export default function ShoppingListItem({ items }) {
    return (
        <ul>
      {items.map( (i) => (

        <li style={ color: i.completed ? "grey" : "red",
      textDecoration: i.completed ? "line-through" : "none",}>
            {i.item} - {i.quantity}
        </li>
      ))}
      </ul>
    );
  }
