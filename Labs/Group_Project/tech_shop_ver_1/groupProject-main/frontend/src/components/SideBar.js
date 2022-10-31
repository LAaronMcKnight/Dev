import React from "react";

function Sidebar({ items, setItems }) {
  const handleClick = (event) => {
    let category = event.target.id;
    console.log(category);

    fetch("/api/items/category/" + category)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  const handleClickAll = async () => {
    const response = await fetch("/api/items/");
    const json = await response.json();

    if (response.ok) {
      setItems(json);
    }
    // console.log(items);
  };

 

  return (
    <div className="sidebar">
      <button className="sidebarItem" id="Headphones" onClick={handleClick}>
        Headphones
      </button>
      <button
        className="sidebarItem"
        id="Keyboard & Mouse"
        onClick={handleClick}
      >
        Keyboard & Mouse
      </button>
      <button className="sidebarItem" id="Monitor" onClick={handleClick}>
      Monitors 
      </button>
      <button className="sidebarItem" id="Cell Phones" onClick={handleClick}>
        Cell Phones
      </button>
      <button className="sidebarItem" id="televisions" onClick={handleClick}>
        Televisions
      </button>
      <button className="sidebarItem" id="all" onClick={handleClickAll}>
        All
      </button>
    </div>
  );
}

export default Sidebar;
