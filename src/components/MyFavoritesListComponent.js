import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CountryItemComponent from './CountryItemComponent'

class MyFavoritesListComponent extends Component {

    constructor(props){
        super()
    }

    render(){
        const {countries} = this.props

        const mappedCountries = countries.sort(country => country.name).map((country, index) => {
            return <CountryItemComponent key={index} index={index} name={country.name} isFavorite={country.isFav} />
        })

        return(
            <div>
                {mappedCountries}
            </div>
        )
    }

}

MyFavoritesListComponent.propTypes = {

}

export default MyFavoritesListComponent