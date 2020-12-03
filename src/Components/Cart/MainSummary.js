import React from 'react';
import Options from './Options';
import Total from './Total';

export default class MainSummary extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Options 
                selected = {this.props.selected}
                />
                <Total
                selected = {this.props.selected}
                />
            </section>
        )
    }
}