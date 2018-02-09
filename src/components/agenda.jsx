import React from 'react';
import Appointment from './appointment';
import Day from './day';
import Time from './time';
/**
 * Agenda component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="agenda">
                <div className="week">
                    <Time/>
                    <Day name="Monday">

                    </Day>
                    <Day name="Tuesday">

                    </Day>
                    <Day name="Wednesday">

                    </Day>
                    <Day name="Thursday">

                    </Day>
                    <Day name="Friday">

                    </Day>
                    <Day name="Saturday">

                    </Day>
                    <Day name="Sunday">

                    </Day>
                </div>
            </div>
        );
    }

}

export default Agenda;