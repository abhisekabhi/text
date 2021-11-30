import React from 'react'

function Alerts(props) {
    return (
       props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alerts.type}</strong>: {props.alerts.msg}
            
        </div>
    )
}

export default Alerts
