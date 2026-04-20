export default function Item({item, onDeleteItem, ondToogleItem}) {
  return (
    <li key={item.id}>
            <input type="checkbox" defaultChecked={item.checked} onChange={() => ondToogleItem(item.id)} />
            <span style={ item.checked ? {textDecoration: 'line-through' } : {}}>{item.quantity} {item.name}</span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
          </li>
  )
}