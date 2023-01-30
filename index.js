import React from "react";
import ReactDOM from "react-dom/client";
import InputCard from "./src/InputCard";
import DisplayContainer from "./src/DisplayContainer";

const AppLayout = () => {
    return(
        <>
            <h4>Quicksy</h4>
            <p>Add stuff you want to copy</p>
            <InputCard />
            <DisplayContainer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)