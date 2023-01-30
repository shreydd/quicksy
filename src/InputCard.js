
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
        <div className="input-card">
            <input type="text" className="quicksy-tag mb-p-1" />
            <textarea type="text" className="quicksy-tag-content mb-p-1" />
            <button onClick={ () => clickHandler()}>Add</button>
        </div>
    )
}

export default InputCard;