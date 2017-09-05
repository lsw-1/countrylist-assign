import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';
import logLifecycle from '../hoc/LogLifecycle';


class CountrySearchBoxComponent extends React.Component {
    state = {address: ''};
    onChange = (address) => {
        this.setState({address});
    };
    handleFormSubmit = (event) => {
        event.preventDefault();
        geocodeByAddress(this.state.address)
            .then(results => {
                let countryName = this.state.address;
                try {
                    countryName = results[0]
                        .address_components[results[0].address_components.length - 1]
                        .long_name || results[0].formatted_address;
                } catch (err) {
                    console.log('couldnt find location');
                }
                const id = results[0].place_id || Math.random();
                return {countryName, id};
            }).then(
            answer => this.props.addCountry(answer)
        )
            .catch(error => console.error(error));
    };

    render() {
        const {address} = this.state;

        const inputProps = {
            value: address,
            onChange: this.onChange,
            placeholder: 'search for country'
        };

        const autoCompleteStyles = {
            autocompleteContainer: {zIndex: 100},
        };

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="col-8 d-inline-block">
                    <PlacesAutocomplete styles={autoCompleteStyles} inputProps={inputProps} options={{
                        types: ['(regions)']
                    }}/>
                </div>
                <button className="btn-primary btn" type="submit">Add +</button>
            </form>
        );
    }
}

CountrySearchBoxComponent.propTypes = {
    addCountry: PropTypes.func.isRequired
};

export default logLifecycle(CountrySearchBoxComponent);



