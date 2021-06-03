import React, {useCallback, useState} from 'react';

import './styles/Modal.scss';

const Modal = ({open, close}) => {
    const [modalValue, setModalValue] = useState('');

    const onChange = useCallback(e => {
        setModalValue(e.target.value);
    }, []);

    return (
        <div className={`Modal ${open ? 'openModal' : null}`}>
            {open && (
                <section>
                    <header>
                        <div className="dateinfo">2021-10-20 (Wed)</div>
                    </header>
                    <form>
                        <input type="text" placeholder="todo" value={modalValue} onChange={onChange} />
                        <button className="insert">+</button>
                    </form>
                    <div className="list"><div className="list-item"></div></div>
                    <footer>
                        <button className="footer-btn" onClick={() => {close(); setModalValue('');}}>Close</button>
                    </footer>
                </section>
            )}
        </div>
    );
}

export default Modal;