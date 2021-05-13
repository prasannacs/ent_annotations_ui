import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'

class SuccessMessage extends React.Component {
    render() {
        return (
            <div>
                <Alert variant="success">
                    <Alert.Heading>Query, successful!</Alert.Heading>
                    <hr />
                    <p className="mb-1">
                        <Alert.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5">Click the Report</Alert.Link>
                    </p>
                </Alert>
            </div>
        );
    }
}

export default SuccessMessage;