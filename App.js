// const heading = React.createElement("h1", {id: "heading "}, "hello world from react");

const parent = React.createElement(
  "div",
  {id: "parent"},
  React.createElement(
    "div",
    {id: "child"},
    React.createElement(
      "h1",
      {},
      "I am an h1 tag"
    )
  )
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
