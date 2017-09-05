import React from 'react'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import {componentMessage} from '../utils/index'


class CountrySearchBoxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
        this.onChange = (address) => this.setState({address})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        this.props.addCountry(this.state.address)

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        return (
            <form className="" onSubmit={this.handleFormSubmit}>
                <div className="col-8 d-inline-block">
                    <PlacesAutocomplete className="d-inline-block" inputProps={inputProps}/>
                </div>
                <button className="btn-primary btn" type="submit">Add +</button>
            </form>
        )
    }

    componentDidMount() {
        console.log('CountrySearchBoxComponent', 'mounted')
    }

    componentDidUpdate() {
        componentMessage('CountrySearchBoxComponent', 'updated')
    }

    componentWillUnmount() {
        componentMessage('CountrySearchBoxComponent', 'removed')
    }

}

export default CountrySearchBoxComponent



