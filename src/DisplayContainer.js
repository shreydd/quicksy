import { useEffect, useState } from "react";
import Note from "../src/Note";
import { url } from "../constants";


//TODO: improve web link - qr code
//TODO: input box improvement

const DisplayContainer = () => {

    const [noteKey, setNoteKey] = useState([]);
    const [noteValue, setNoteValue] = useState([]);
    const [entries, setEntries] = useState([]);

    const [webLink, setWebLink] = useState('');

    let storageItems = browser.storage.local.get(null);

    storageItems.then((result) => {
        let keys = Object.keys(result);
        let values = Object.values(result);
        setNoteKey(keys)
        setNoteValue(values)

        let itemEntries = Object.entries(result);
        setEntries(itemEntries)
    })

    useEffect(() => {
        let queryString = url

        let tagQuery = noteKey.join(",").replace(/\s/g, "-");
        let valQuery = noteValue.join(",").replace(/\s/g, "-");

        queryString = queryString.concat(`?tag=${tagQuery}&val=${valQuery}`)

        setWebLink(queryString)
    }, [entries])

    return (
        <>
            <div className="display-container" >
                {
                    noteKey.map((item, index) => {
                        return (
                            <Note tag={item} val={noteValue[index]} />
                        )
                    })
                }
                <div className="link-container">
                    <a href={webLink}>Web link</a>
                </div>
            </div>
        </>
    )
}

export default DisplayContainer;