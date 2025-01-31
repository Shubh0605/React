import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfrestaurants, setListOfrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      
      const restaurantData = json?.data?.cards?.find(
        card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      
      const restaurants = restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfrestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfrestaurants([]);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredResults = ListOfrestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaurants(filteredResults);
              setIsFiltered(true);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            if (!isFiltered) {
              const filteredList = ListOfrestaurants.filter((res) => {
                const rating = parseFloat(res?.info?.avgRating);
                return !isNaN(rating) && rating > 4;
              });
              setFilteredRestaurants(filteredList);
              setIsFiltered(true);
            } else {
              setIsFiltered(false);
            }
          }}
        >
          {isFiltered ? "Show All" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {ListOfrestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            {isFiltered
              ? filteredRestaurants.map((restaurant) => (
                <Link key={restaurant?.info?.id} to = {"/restaurants/" + restaurant.info.id }><Restaurantcard  resData={restaurant} /></Link>
                ))
              : ListOfrestaurants?.map((restaurant) => (
                  <Link key={restaurant?.info?.id} to = {"/restaurants/" + restaurant.info.id }><Restaurantcard  resData={restaurant} /></Link>
                ))}
          </>
        )}
      </div>
      <Link to="/restaurants/123">Test Restaurant 123</Link>
    </div>
  );
};

export default Body;