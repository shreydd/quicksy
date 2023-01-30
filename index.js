import React from "react";
import ReactDOM from "react-dom/client";
import InputCard from "./src/InputCard";
import DisplayContainer from "./src/DisplayContainer";

const AppLayout = () => {
    return(
        <>
            <div className="heading">
                <h2>Quick<span>sy</span></h2>
            </div>
            <p className="subtext">Add things you would like to copy quickly</p>
            <div className="app-container">
                <InputCard />
                <DisplayContainer />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)