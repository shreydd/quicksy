import { useEffect, useState } from "react";
import Note from "../src/Note";
import { url } from "../constants";
import QrCreator from 'qr-creator';

//TODO: input box improvement and other smooth functioning

const DisplayContainer = () => {

    const [noteKey, setNoteKey] = useState([]);
    const [noteValue, setNoteValue] = useState([]);
    const [entries, setEntries] = useState([]);
    const [webLink, setWebLink] = useState('');
    let storageItems = browser.storage.local.get(null);

    // getting stored data
    storageItems.then((result) => {
        let keys = Object.keys(result);
        let values = Object.values(result);
        setNoteKey(keys)
        setNoteValue(values)

        let itemEntries = Object.entries(result);
        setEntries(itemEntries)
    })

    // web link generation and qr code
    useEffect(() => {
        let queryString = url
        let tagQuery = noteKey.join(",").replace(/\s/g, "-");
        let valQuery = noteValue.join(",").replace(/\s/g, "-");

        queryString = queryString.concat(`?tag=${tagQuery}&val=${valQuery}`)
        setWebLink(queryString)

        // qr code rendering
        QrCreator.render({
            text: queryString,
            radius: 0.5, // 0.0 to 0.5
            ecLevel: 'H', // L, M, Q, H
            fill: '#00000', // foreground color
            background: null, // color or null for transparent
            size: 280 // in pixels
        }, document.querySelector('#quicksy-qr-code'));

    }, [entries]);


    const toggleQR = () => {
        console.error('here')
        const element = document.getElementById('qr-container');
        if(element.style.display === 'block'){
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }

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
            </div>
            <div className="link-container">
                <button className="add-btn" onClick={() => toggleQR()}>Toggle QR code</button>
                <div id="qr-container">
                    <canvas id="quicksy-qr-code" />
                    <a href={webLink} className='web-link'>Or use this web link</a>
                </div>
            </div>
        </>
    )
}

export default DisplayContainer;