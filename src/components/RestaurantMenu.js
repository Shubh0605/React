import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=535259&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
            );
            const json = await data.json();
            console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setResInfo(null);
        }
    };

    if (!resInfo) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString
    } = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};

    // Get all categories from the menu
    const categories = resInfo?.cards?.find(
        card => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
               card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) || [];

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>Cuisines: {cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>★ {avgRating} ({totalRatingsString})</h3>
            
            {categories.map((category) => {
                const categoryData = category?.card?.card;
                const items = categoryData?.itemCards || categoryData?.categories?.[0]?.itemCards;
                
                return items ? (
                    <div key={categoryData?.title} className="menu-category">
                        <h2>{categoryData?.title}</h2>
                        <ul>
                            {items.map(item => (
                                <li key={item?.card?.info?.id}>
                                    {item?.card?.info?.name} - 
                                    ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     const { resId } = useParams();
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//     const fetchMenu = async () => {
//         try {
//             const data = await fetch(
//                 "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=535259&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
//             );
//             const json = await data.json();
//             setResInfo(json.data);
//         } catch (error) {
//             console.error("Error fetching restaurant data:", error);
//             setResInfo(null);
//         }
//     };

//     if (!resInfo) return <Shimmer />;

//     const {
//         name,
//         cuisines,
//         costForTwoMessage,
//         avgRating,
//         totalRatingsString
//     } = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};

//     const itemCards = resInfo?.cards?.find(
//         card => card?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

//     const sweetCategories = resInfo?.cards?.find(
//         card => card?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories || [];

//     const mainCourse = resInfo?.cards?.find(
//         card => card?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.categories || [];
    
//     const chaat = resInfo?.cards?.find(
//         card => card?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR.cards[4]?.card?.card?.categories || [];

//     return (
//         <div className="menu">
//             <h1>{name}</h1>
//             <h3>Cuisines: {cuisines?.join(", ")}</h3>
//             <h3>{costForTwoMessage}</h3>
//             <h3>★ {avgRating} ({totalRatingsString})</h3>
//             <div className="menu-items">
//                 <h2>Recommended</h2>
//                 <ul>
//                     {itemCards?.map((item) => (
//                         <li key={item?.card?.info?.id}>
//                             {item?.card?.info?.name} - ₹{item?.card?.info?.price/100}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="sweets">
//                 <h2>Sweets</h2>
//                 {sweetCategories.map((category) => (
//                     <div key={category.title} className="sweet-category">
//                         <h3>{category.title}</h3>
//                         <ul>
//                             {category.itemCards?.map((item) => (
//                                 <li key={item?.card?.info?.id}>
//                                     {item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//             <div className="mainCourse">
//                 <h2>Dishes</h2>
//                 {mainCourse.map((category) => (
//                      <div key={category.title} className="dish-category">
//                         <h3>{category.title}</h3>
//                         <ul>
//                             {category.itemCards?.map((item) => (
//                                 <li key={item?.card?.info?.id}>
//                                      {item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }

//                                 </li>
                            

//                             ))}
//                         </ul>
//                      </div>
                

//                 ))}
//             </div>
//             <div className="chaat">
//                 <h2>JhatPat</h2>
//                 {chaat.map((category) => (
//                     <div key={category.title} className="chaat-category">
//                         <h3>{category.title}</h3>
//                         <ul>
//                             {category.itemCards?.map((item) => (
//                                 <li key={item?.card?.info?.id}>
//                                     {item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }
//                                 </li>

//                             ))}
//                         </ul>
//                     </div>

//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RestaurantMenu;