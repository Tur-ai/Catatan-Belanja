import { useState, useEffect } from 'react'; // Tambahkan useEffect
import Header from './Header';
import Footer from './Footer';
import Form from './From';
import GroceryList from './GroceryList';

export default function App() {
  // 1. Inisialisasi state dengan fungsi agar mengambil data dari localStorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('GROCERY_ITEMS');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // 2. Simpan ke localStorage setiap kali state 'items' berubah
  useEffect(() => {
    localStorage.setItem('GROCERY_ITEMS', JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    const confirmClear = window.confirm('Apakah Anda yakin ingin menghapus semua daftar?');
    if (confirmClear) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList 
        items={items} 
        onDeleteItem={handleDeleteItem} 
        ondToogleItem={handleToogleItem} 
        onClearItems={handleClearItems}  
      />
      <Footer items={items} />
    </div>
  );
}