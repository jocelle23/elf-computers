import React from 'react';
import Parts from './Parts';

export default class Specs extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Parts
                        feature={feature}
                        features={this.props.features}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />
                </fieldset>
            );
        });

        return (
            <div>{features}</div>
        )
    }
}



