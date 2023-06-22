import React from 'react';
import Menu from "./menuApi";
import "./style.css";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ... new Set(
    Menu.map((currElem)=>{
      return currElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Book_menu = () => {

  const [menuData, setMenuData] = React.useState(Menu); //always add first.. it's a hook
  const [menuList, setMenuList] = React.useState(uniqueList);
  const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Book_menu