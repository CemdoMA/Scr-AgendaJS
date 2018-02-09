import React from 'react';
import Appointment from './appointment';
/**
 * Day component
 * @param props
 * @returns {XML}
 */
class Day extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="day">
                <div className="day__name">
                    {this.props.name}
                </div>
                <Appointment title="Afspraak" description="Vergadering met team" importance="1"/>
            </div>
        );
    }

}

export default Day;