import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CountryItemComponent from './CountryItemComponent';
import logLifecycle from '../hoc/LogLifecycle';

const ITEMS_PER_PAGE = 10;

class MyCountriesListComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1
        };
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
    }

    onNext() {
        const indexOfLastCountry = this.state.currentPage * ITEMS_PER_PAGE;
        if (this.props.countries.length >= indexOfLastCountry) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    onPrevious() {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    render() {
        const {currentPage} = this.state;
        const {countries, toggleFavorite, removeCountry} = this.props;

        const indexOfLastCountry = currentPage * ITEMS_PER_PAGE;
        const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE;
        const pagedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

        const mappedCountryList = pagedCountries.map((country, index) => (
            <CountryItemComponent key={country.id} {...{country, toggleFavorite, removeCountry}}/>
        ));

        const showNextButton = currentPage * ITEMS_PER_PAGE < countries.length;
        const showPrevButton = currentPage > 1;


        return (
            <div className="mb-0 rounded">
                <div className="list-group ml-2 countries-list border  rounded mb-4 mt-4">
                    {mappedCountryList}
                </div>
                <div className="col-12 btn-group">
                    <button onClick={this.onPrevious} className="btn btn-primary col-4"
                            style={!showPrevButton ? {opacity: 0.2} : null}>prev page
                    </button>
                    <div className="col-2"/>
                    <button onClick={this.onNext} className="btn btn-primary col-4"
                            style={!showNextButton ? {opacity: 0.2} : null}>next page
                    </button>
                </div>
            </div>
        );
    }

}

MyCountriesListComponent.propTypes = {
    countries: PropTypes.array
};

export default logLifecycle(MyCountriesListComponent);