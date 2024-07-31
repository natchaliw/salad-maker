import { useState, useEffect } from 'react';

export default function SaladBuilder() {
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [menuId, setMenuId] = useState(null);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const res = await fetch('/api');
    const data = await res.json();
    setMenus(data);
  };

  const createMenu = async () => {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, ingredients }),
    });
    const newMenu = await res.json();
    setMenus([...menus, newMenu]);
  };

  const updateMenu = async () => {
    const res = await fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: menuId, name, ingredients }),
    });
    const updatedMenu = await res.json();
    setMenus(menus.map(menu => menu.id === updatedMenu.id ? updatedMenu : menu));
  };

  const deleteMenu = async (id) => {
    await fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setMenus(menus.filter(menu => menu.id !== id));
  };

  return (
    <div>
      <h1>Salad Builder</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Menu Name"
      />
      {/* <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value.split(','))}
        placeholder="Ingredients (comma separated)"
      /> */}
      <button onClick={createMenu}>Create Menu</button>
      <button onClick={updateMenu}>Update Menu</button>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            {menu.name} - {menu.ingredients.join(', ')}
            <button onClick={() => deleteMenu(menu.id)}>Delete</button>
            <button onClick={() => {
              setMenuId(menu.id);
              setName(menu.name);
              setIngredients(menu.ingredients);
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
