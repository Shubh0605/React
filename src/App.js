import React from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
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
