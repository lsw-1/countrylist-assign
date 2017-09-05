import React, {Component} from 'react'
import PropTypes from 'prop-types'
import star from '../assets/Gpritiranjan-Simple-Christmas-Star.ico'
import stargrey from '../assets/star-2-xxl.png'
import garbage from '../assets/garbage-bin-png-1.png'
import {componentMessage} from '../utils/index'

class CountryItemComponent extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log(`mounted item component ${this.props.index}`)
    }

    componentDidUpdate() {
        componentMessage('CountryItemComponent', 'updated')
    }

    componentWillUnmount() {
        componentMessage('CountryItemComponent', 'removed')
    }

    render() {
        const { country, toggleFavorite, removeCountry } = this.props
        const favoriteStar = country.isFav ? <img className="App-logo col-2" src={star} alt="star"/> :
            <img className="App-logo col-2"  onClick={() => toggleFavorite(country.id)} src={stargrey} alt="star"/>

        return (
            <div className="col-12 hover">
                <p className="col-6 d-inline-block mr-5"> {country.name} </p>
                    {favoriteStar}
                    <img className="col-2 App-logo" src={garbage} onClick={() => removeCountry(country.id)} alt="garbage"/>
            </div>
        )
    }


}

export default CountryItemComponent