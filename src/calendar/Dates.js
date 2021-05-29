import React, {useCallback, useEffect, useState} from 'react';
import './styles/Dates.scss';

const getPrevDates = (plDay, plDate, prev) => {
    if(plDay !== 7) {
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

const Dates = ({year, month}) => {
    
    const [prevLast, setPrevLast] = useState({date: new Date(year, month, 0)});
    const [thisLast, setThisLast] = useState({date: new Date(year, month + 1, 0)});
    const [page, setPage] = useState();

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
    }, [month, getPages]);

    return (
        <div className="Dates">
            {page && page.map((p, index) => <div key={index} className="date">{p}</div>)}
        </div>
    );
}

export default Dates;