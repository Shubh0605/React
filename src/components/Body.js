import Restaurantcard from "./Restaurantcard";

import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
const Body = () => {
  const [ListOfrestaurants, setListOfrestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("13 line Called");
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();
    setListOfrestaurants(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log('called line 22',ListOfrestaurants);
   };

  if(!ListOfrestaurants) return
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = ListOfrestaurants.filter(
              (resList) => resList.data.avgRating > 4
            );
            setListOfrestaurants(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfrestaurants?.map((restaurant) => (
          <Restaurantcard key={restaurant.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
