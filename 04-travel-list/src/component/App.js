import { useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";
import { PackagingList } from "./PackagingList";
import { Form } from "./Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((it) => it.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
