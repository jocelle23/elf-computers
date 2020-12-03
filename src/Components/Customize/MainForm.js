import React from 'react';
import Specs from './Specs';

export default class CustomizeList extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Specs 
                features={this.props.features}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected} 
                />
            </form>
        )
    }
}