const INCREASEMONTH = 'dateInfo/INCREASEMONTH';
const DECREASEMONTH = 'dateInfo/DECREASEMONTH';

export const increaseMonth = () => ({type: INCREASEMONTH});
export const decreaseMonth = () => ({type: DECREASEMONTH});
// const [prevLast, setPrevLast] = useState({date: new Date(year, month, 0)});
// const [thisLast, setThisLast] = useState({date: new Date(year, month + 1, 0)});

const date = new Date();
const getPrevLast = (y, m) => {
    return new Date(y, m, 0);
};
const getThisLast = (y, m) => {
    return new Date(y, m + 1, 0);
};

const initialState = {
    year: date.getFullYear(),
    month: date.getMonth(),
    initDate: date.getDate(),
    prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
    thisLast: getThisLast(date.getFullYear(), date.getMonth())
};

function dateInfo(state = initialState, action) {
    switch(action.type) {
        case INCREASEMONTH:
            date.setMonth(date.getMonth() + 1);
            return {
                ...state,
                year: date.getFullYear(),
                month: date.getMonth(),
                prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
                thisLast: getThisLast(date.getFullYear(), date.getMonth())
            };
        case DECREASEMONTH:
            date.setMonth(date.getMonth() - 1);
            return {
                ...state,
                year: date.getFullYear(),
                month: date.getMonth(),
                prevLast: getPrevLast(date.getFullYear(), date.getMonth()),
                thisLast: getThisLast(date.getFullYear(), date.getMonth())
            }
        default:
            return state;
    }
}

export default dateInfo;