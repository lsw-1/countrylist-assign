import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CountryItemComponent from './CountryItemComponent'

class MyCountriesListComponent extends Component {

    constructor() {
        super()
        this.state = {
            currentPage: 1,
            countriesPerPage: 10
        }
        this.onNext = this.onNext.bind(this)
        this.onPrevious = this.onPrevious.bind(this)
    }

    onNext(){
        const indexOfLastCountry = this.state.currentPage * this.state.countriesPerPage;
        console.log(`countries length ${this.props.countries.length} and ${indexOfLastCountry} ` )
        if (this.props.countries.length >= indexOfLastCountry){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
            console.log(this.state.currentPage)
    }

    onPrevious(){
        if (this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        console.log(this.state.currentPage)
        }

    }

    render() {
        const {currentPage, countriesPerPage} = this.state
        const {countries, toggleFavorite, removeCountry } = this.props

        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const pagedCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

        const mappedCountryList = pagedCountries.map((country, index) => {
                return <CountryItemComponent key={index} country={country}
                                             toggleFavorite={toggleFavorite} removeCountry={removeCountry}/>
            }
        )

return (
            <div>
                <div className="list-group">
                    {mappedCountryList}
                </div>
                <div style={{display: this.state.currentPage * this.state.countriesPerPage <= 10 ? "none" : "inline-block" }} className="col-12 btn-group mt-sm-4">
                    <button onClick={this.onPrevious} className="btn btn-primary col-4">prev page</button>
                    <div className="col-2"/>
                    <button onClick={this.onNext} className="btn btn-primary col-4">next page</button>
                </div>
            </div>

        )
    }

}

MyCountriesListComponent.propTypes = {
    countries: PropTypes.array
}

export default MyCountriesListComponent