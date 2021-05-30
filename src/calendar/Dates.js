import React, {useCallback, useEffect, useState} from 'react';
import classNames from 'classnames';
import './styles/Dates.scss';

const getPrevDates = (plDay, plDate, prev) => {
    if(plDay !== 6) {
        for(let i = 0; i < plDay + 1; i++) {
            prev.unshift(plDate - i);
        }
    }
};

const getNextDates = (tlDay, next) => {
    for(let i = 1; i < 7 - tlDay; i++) {
        next.push(i);
    }
};

const Dates = ({year, month, date}) => {
    const [prevLast, setPrevLast] = useState({date: new Date(year, month, 0)});
    const [thisLast, setThisLast] = useState({date: new Date(year, month + 1, 0)});
    const [today, setToday] = useState();
    const [page, setPage] = useState([]);

    const plDate = prevLast.date.getDate();
    const plDay = prevLast.date.getDay();
    const tlDate = thisLast.date.getDate();
    const tlDay = thisLast.date.getDay();

    const getPages = useCallback(() => {
        const prev = [];
        const current = [...Array(tlDate + 1).keys()].slice(1);
        const next = [];
        getPrevDates(plDay, plDate, prev);
        getNextDates(tlDay, next);
        setPage(prev.concat(current, next));
    }, [plDay, plDate, tlDay, tlDate]);

    useEffect(() => {
        setPrevLast({date: new Date(year, month, 0)});
        setThisLast({date: new Date(year, month + 1, 0)});
        getPages();
        console.log(page);
        setToday({year, month, date});
    }, [month, page, getPages]);

    const initPage = useCallback(() => {
        const firstDateIndex = page.indexOf(1);
        const lastDateIndex = page.indexOf(tlDate);
        if(!page) {return;}
        return (page.map((p, index) => {
            if(index >= firstDateIndex && index < lastDateIndex + 1) {
                return (
                    <div key={index} className="dateBlock"><span className={`this ${p === today.date ? 'today' : ''}`}>{p}</span></div>
                )
            } else {
                return (
                    <div key={index} className="dateBlock"><span className="other">{p}</span></div>
                );
            }
        }));
    }, [page, tlDate]);

    return (
        <div className="Dates">
            {initPage()}
        </div>
    );
}

export default Dates;