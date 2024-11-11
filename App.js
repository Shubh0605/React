const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
 React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I m Shubham"),
    React.createElement("h2", {}, "Deepak"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I m Shubham"),
    React.createElement("h2", {}, "Deepak"),
  ])
);
root.render(parent);
