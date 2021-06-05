import React from 'react';
import {connect} from 'react-redux';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, initDate, openModal}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} openModal={openModal} />
    );
};

const mapStateToProps = state => ({
    year: state.year,
    month: state.month,
    initDate: state.initDate
});

export default connect(
    mapStateToProps
)(DatesContainer);