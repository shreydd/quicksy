import { useState } from "react";

const Note = (props) => {

    let [noteContent, setNoteContent] = useState([]);

    let storageItems = browser.storage.local.get(props?.details);

    storageItems.then((result) => {
        let content = Object.values(result);
        setNoteContent(content)
    })

    const copyHandler = (noteContent) => {
        try {
            navigator.clipboard.writeText(noteContent)
            console.error('done')
        } catch {
            console.error('not done')
        }
    }

    const deleteHandler = (noteKey) => {
        browser.storage.local.remove(noteKey);
    }
    
    return(
        <div className="note-card">
            <div className="tag">
                <p className="tag">{props?.details}</p>
                <p className="note-card-content">Content: {noteContent}</p>
            </div>
            <div className="buttons">
                <button className="copy-btn" onClick={() => copyHandler(noteContent)}>Copy</button>
                <button className="delete-btn" onClick={() => deleteHandler(props?.details)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;