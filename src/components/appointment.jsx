import React from 'react';
/**
 * Appointment component
 * @param props
 * @returns {XML}
 */
class Appointment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="appointment">
                <div className="appointment__title">
                    {this.props.title}
                </div>
                <div className="appointment__description">
                    {this.props.description}
                </div>
            </div>
        );
    }

}

export default Appointment;