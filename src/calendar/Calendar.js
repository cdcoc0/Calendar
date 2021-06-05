import React, {useState, useEffect, useCallback} from 'react';
import {TodayProvider} from '../contexts/today';
import Background from './Background';
import MonthContainer from '../containers/MonthContainer';
import DatesContainer from '../containers/DatesContainer';
import Modal from './Modal';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Calendar.scss';

const Calendar = () => {
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [modalCtrl, setModalCtrl] = useState(false);

    const openModal = () => {
        setModalCtrl(true);
    };

    const closeModal = () => {
        setModalCtrl(false);
    };

    return (
        <TodayProvider>
            <div className="Calendar">
                <Background />
                <MonthContainer />
                <div className="navSpace">
                    <div className="nav">
                        {/* <MdNavigateBefore /> */}
                    </div>
                    <div className="body">
                        <div className="daysArray">
                            {daysArray.map(d => <div key={d} className="days">{d}</div>)}
                        </div>
                        <DatesContainer openModal={openModal} />
                    </div>
                </div>
                <Modal open={modalCtrl} close={closeModal} />
            </div>
        </TodayProvider>
    );
}

export default Calendar;