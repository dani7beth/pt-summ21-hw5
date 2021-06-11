import MenuItemForm from "./MenuItemForm";

const MenuItems = ({ menuItems, editItem, deleteItem }) => {
  const renderItems = () => {
    return menuItems.map((item) => (
      <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <input type="checkbox" checked={item.glutenFree} />
        <MenuItemForm
          id={item.id}
          name={item.name}
          price={item.price}
          glutenFree={item.glutenFree}
          editItem={editItem}
        />
        <button
          onClick={() => {
            deleteItem(item.id);
          }}
        >
          Delete
        </button>
      </>
    ));
  };
  return (
    <>
      <h1>Here are the Items on the Menu</h1>
      {renderItems()}
    </>
  );
};
export default MenuItems;
