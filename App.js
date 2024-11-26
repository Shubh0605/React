import React from "react";

import ReactDOM from "react-dom/client";

import img from "./images/kaju.jpg";

//header
//1.logo
//2.nav-item
//body
//1.search bar
//2.Restaurant Container
//3.Restaurant card
//-- Dish Name
//- Image
//- Restaurant Name
//- Rating
//- Cuisines
//- Time to Deliver
//4.Footer
// - Copyright
// - Links
// - Address
// - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-item-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Restaurantcard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        className="kajuimage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280e",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <Restaurantcard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//react element
//  const heading = React.createElement("h1", { id: "heading" }, "Hello Namaste");
//console.log(heading);

// react components

//1.class based components-old
//2.functional based components (simple javascript function which return react element or jsx code)
// const Title = () =>(
//     <h1 className="head" tabIndex="5">Namaste react using jsx</h1>
// );

// const HeadingComponent = () =>(
//     <div id="container">

//     <h1 className="heading">Namaste React functional component</h1>
//     {heading}
//     {Title()}
//     {2/0}
//     <Title/>
//     </div>
// );

//JSX html like or XML like syntax

// const jsxheading = <h1 id="heading">Namaste react</h1>;
// console.log(jsxheading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//  React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I m Shubham"),
//     React.createElement("h2", {}, "Deepak"),
//   ]),------" }, [
//     React.createElement("h1", {}, "I m Shubham"),
//     React.createElement("h2", {}, "Deepak"),
//   ])
// root.render(parent);
