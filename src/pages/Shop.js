import React from "react";
import { ShopList } from "../helpers/ShopList";
import ShopItem from "../components/ShopItem";
import "../styles/Shop.css";

function Shop() {
    return(
        <div className="menu">
            <h1 className="menuTile">Products on sale</h1>
            <div className="menuList">{ShopList.map((shopItem, key) => {
                return ( <ShopItem key={key} image={shopItem.image} name={shopItem.name} price={shopItem.price} /> );
            })}</div>
        </div>
    );
}

export default Shop;