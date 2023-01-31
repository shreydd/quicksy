
// let gettingAllStorageItems = browser.storage.local.get(null);


const clickHandler = () => {
    let tagName = document.querySelector(".quicksy-tag").value;
    let tagContent = document.querySelector(".quicksy-tag-content").value;
    let storingNote = browser.storage.local.set({ [tagName] : tagContent });
    storingNote.then(() => {
        // alert('kinda done')
    })
}

const InputCard = () => {
    return (
        <div className="note-card">
            <div className="input-card">
                <input type="text" className="quicksy-tag mb-p-1" placeholder="Give a tag name to remember by" />
                <input type="text" placeholder="The actual content you would like to copy, ex: a link" className="quicksy-tag-content mb-p-1" />
                <button className="add-btn" onClick={ () => clickHandler()}>Add</button>
            </div>
        </div>
    )
}

export default InputCard;