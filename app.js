/**
 * <div id ="parent">
 *    <div id = "child">
 *    <h1>I am a tag<h1>
 *    <h2>Hello React!!<h2>
 *    </div>
 * </div>
 *
 */

const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [
        React.createElement("h1", {}, "I am a tag"),
        React.createElement("h2", {}, "Hello React!!")
    ])
); 

// const heading = React.createElement("h1", {id: "heading"}, "Hello World by React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);