import { useCallback, useEffect, useState } from "react";
import { MenuSection } from "./menu-section";
import axios from "axios";
import '../styles/card.css'

function Menu() {
  const [menu, setMenu] = useState([]);
  const url = `/json/menu.json`;

  const fetchMenu = useCallback(async () => {
    try {
      const response = await axios.get(url);
      
      // Convert { Matcha: [...], Hojicha: [...] } directly to [ ["Matcha", [...]], ... ]
      if (response.data && typeof response.data === "object") {
        setMenu(Object.entries(response.data));
      }
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return (
    <>
      <MenuSection menu={menu} />
      <p className="fyi">Images displayed belong to the respectful owners. They were not crafted nor taken by me.</p>
    </>
  );
}

export default Menu;