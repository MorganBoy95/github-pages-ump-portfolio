import React, {useState} from 'react'

function modal({open, id, children, onClose}) {

    const [show, setShow] = useState(false);

    if (!open) return null

    return (
        <>
        <div>
            <button onClick={onClose}>Close Modal</button>
        </div>
        <div 
        className="main-modal" 
        id={id}>
            <span className="close" onClick={() => setShow(false)}>&times;</span>
            <div className="main-modal-content">
                {props.children}
            </div>
        </div>
        <div className="modal-overlay" onClick={() => setShow(false)}></div>
        </>
    )
}

export default modal
