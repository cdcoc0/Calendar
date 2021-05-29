import React, {useState, useEffect} from 'react';
import Month from './Month';
import Dates from './Dates';
import './styles/Calendar.scss';

const Calendar = () => {
    const [dates, setDates] = useState({date: new Date()});
    const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const getDates = () => {
        setDates({
            date: new Date()
        });
    };

    useEffect(() => {
        getDates();
    }, []);

    const initYear = dates.date.getFullYear();
    const initMonth = dates.date.getMonth();

    return (
        <div className="Calendar">
            <Month year={initYear} month={initMonth} />
            <div className="body">
                <div className="daysArray">
                    {daysArray.map(d => <div key={d} className="days">{d}</div>)}
                </div>
                <Dates year={initYear} month={initMonth} />
            </div>
        </div>
    );
}

export default Calendar;