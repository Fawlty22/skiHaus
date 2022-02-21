import React from 'react';

function Modal({ onClose, currentPhoto}) {
    const {name, category, description, index} = currentPhoto;
    return (
        // jsx
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h1 className="modalTitle">Employee Added Successfully</h1>

                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;