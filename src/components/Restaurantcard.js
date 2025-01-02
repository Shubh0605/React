import { CDN_URL } from "../utils/constant";
const Restaurantcard = (props) => {
<<<<<<< HEAD
    const { resData } = props;

    console.log('card line 5 called', resData);
    console.log('card line 6 called', resData?.data);
    console.log('card image ID', resData?.data?.cloudinaryImageId);
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime } = {},
    } = resData?.info || {};

    console.log('costForTwo', costForTwo);
  
    return (
      <div className="res-card">
        <img
          className="kajuimage"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    );
  };
  export default Restaurantcard;
=======
  const { resData } = props;

  console.log('card line 5 called', resData);
  console.log('card line 6 called', resData?.data);
  console.log('card image ID', resData?.data?.cloudinaryImageId);

  const { 
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info || {};

console.log('costForTwo', costForTwo);

  return (
    <div className="res-card">
      <img className="kajuimage" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo }</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default Restaurantcard;
>>>>>>> cdec3a2cfae382fb510954fae4eff47d1c08feaf
