import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App = () => {
    return <>
        <Header />
        <Gallery />
    </>
};

ReactDOM.render(<App />, document.getElementById("root"));