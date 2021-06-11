import { useState } from "react";

const MenuItemForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [price, setPrice] = useState(props.price ? props.price : "");
  const [glutenFree, setGlutenFree] = useState(
    props.glutenFree ? props.glutenFree : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.id) {
      props.editItem({ name, price, glutenFree, id: props.id });
    } else {
      props.addItem({ name, price, glutenFree });
    }
    setName("");
    setPrice("");
    setGlutenFree(false);
  };

  return (
    <>
      {console.log(props)}
      <h1>{props.id ? `${props.name} Form` : "Add Menu Item"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          value={name}
          placeholder="Name"
        />
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          name="price"
          value={price}
          placeholder="Price"
        />
        <input
          type="checkbox"
          onChange={(e) => {
            setGlutenFree(e.target.Value);
          }}
          value={glutenFree}
          checked={glutenFree}
        />
        <button type="submit">{props.id ? "Edit Item" : "Add Item"}</button>
      </form>
    </>
  );
};
export default MenuItemForm;
