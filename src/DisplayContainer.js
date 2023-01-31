import { useState } from "react";
import Note from "../src/Note";

const DisplayContainer = () => {

    const [noteKey, setNoteKey] = useState([]);

    let storageItems = browser.storage.local.get(null);

    storageItems.then((result) => {
        let keys = Object.keys(result);
        setNoteKey(keys)
    })



    return (
        <>
            {/* <p>Your saved things</p> */}
            <div className="display-container" >{
                noteKey.map((item, index) => {
                    return (
                        <Note details={item} key={index} />
                    )
                })
            }</div>
        </>
    )
}

export default DisplayContainer;