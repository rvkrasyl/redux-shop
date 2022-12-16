import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

import "./app.css";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.childeren;
    }
}