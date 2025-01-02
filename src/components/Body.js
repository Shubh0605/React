import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

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
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1");

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      
      const json = await data.json();

      // Updated path to restaurants data
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
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
                <Restaurantcard key={restaurant?.info?.id} resData={restaurant} />
              ))
              : ListOfrestaurants?.map((restaurant) => (
                <Restaurantcard key={restaurant?.info?.id} resData={restaurant} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;