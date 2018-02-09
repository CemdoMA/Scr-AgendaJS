import React from 'react';
/**
 * Time component
 * @param props
 * @returns {XML}
 */
class Time extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let time = [];
        for (let i = 6; i <= 23; i++) {
            time.push(
                <div key={i} className="time__current">
                    { i < 10 ?  "0" + i + ":00" : i + ":00" }
                </div>

            );
        }
        return (
            <div className="time">
                {time}
            </div>
        );
    }

}

export default Time;