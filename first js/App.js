const containerDiv = React.createElement("div", {id:"container"}, [
    React.createElement("div", {id:"container1"}, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2"),
  ]),
    
    React.createElement("div",{id:"container2"}, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2"),
    ]),
 ]);0
console.log(containerDiv);   //reactElement === objectT5R
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerDiv); 