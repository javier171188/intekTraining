import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import getPhotos from "./utils/getPhotos";

const App = () => {
    return <>
        <Header />
        <Gallery getPhotos={getPhotos} />
    </>
};

ReactDOM.render(<App />, document.getElementById("root"));