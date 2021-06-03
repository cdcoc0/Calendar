import React from 'react';
import './styles/Modal.scss';

const Modal = ({open, close}) => {
    return (
        <div className={`Modal ${open ? 'openModal' : null}`}>
            {open && (
                <section>
                    {/* <header>
                        <div className="header-text">Schedule</div>
                        <button className="close" onClick={close}>X</button>
                    </header> */}
                    <form>
                        <input type="text" placeholder="todo" />
                        <button className="insert">+</button>
                    </form>
                    <div className="list"><div className="list-item">todo item</div></div>
                    <footer>
                        <button className="footer-btn" onClick={close}>close</button>
                    </footer>
                </section>
            )}
        </div>
    );
}

export default Modal;