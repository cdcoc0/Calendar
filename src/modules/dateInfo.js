const INCREASEMONTH = 'dateInfo/INCREASEMONTH';
const DECREASEMONTH = 'dateInfo/DECREASEMONTH';

export const increaseMonth = () => ({type: INCREASEMONTH});
export const decreaseMonth = () => ({type: DECREASEMONTH});

const date = new Date();

const initialState = {
    year: date.getFullYear(),
    month: date.getMonth(),
    dates: date.getDate()
};

function dateInfo(state = initialState, action) {
    switch(action.type) {
        case INCREASEMONTH:
            if(state.month === 11) {
                return {
                    ...state,
                    year: state.year + 1,
                    month: 0
                }
            } else {
                return {
                    ...state,
                    month: state.month + 1
                };
            }
        case DECREASEMONTH:
            if(state.month === 0) {
                return {
                    ...state,
                    year: state.year - 1,
                    month: 11
                }
            } else {
                return {
                    ...state,
                    month: state.month - 1
                };
            }
        default:
            return state;
    }
}

export default dateInfo;