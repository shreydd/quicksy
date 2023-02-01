const Note = (props) => {

    const copyHandler = (noteContent) => {
        try {
            navigator.clipboard.writeText(noteContent)
            console.error('done')
        } catch {
            console.error('not done')
        }
    }

    const deleteHandler = (notetag) => {
        browser.storage.local.remove(notetag);
    }
    
    return(
        <div className="note-card flex-space-btw-align-center">
            <div className="tag">
                <p className="tag">{props?.tag}</p>
                <p className="note-card-content">Content: {props?.val}</p>
            </div>
            <div className="buttons">
                <button className="copy-btn" onClick={() => copyHandler(props?.val)}>Copy</button>
                <button className="delete-btn" onClick={() => deleteHandler(props?.tag)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;