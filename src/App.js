import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    menuItems: [
      { id: 1, name: "spaghetti", price: 14.99, glutenFree: false },
      { id: 2, name: "greek salad", price: 5.0, glutenFree: true },
      { id: 3, name: "chicken nuggets", price: 4.6, glutenFree: false },
    ],
  };

  //create
  addItem = (menuItem) => {
    let newItem = {
      id: Math.random(),
      name: menuItem.name,
      price: menuItem.price,
      glutenFree: menuItem.glutenFree,
    };
    let menuItems = [...this.state.menuItems, newItem];
    this.setState({ menuItems });
  };

  //update
  editItem = (menuItem) => {
    let menuItems = this.state.menuItems.map((item) =>
      item.id === menuItem.id ? menuItem : item
    );

    this.setState({ menuItems });
  };

  //delete
  deleteItem = (id) => {
    let menuItems = this.state.menuItems.filter((item) => item.id !== id);

    this.setState({ menuItems });
  };

  render() {
    return (
      <div className="App">
        <h1>React Restaurant Menu App</h1>
      </div>
    );
  }
}

export default App;
