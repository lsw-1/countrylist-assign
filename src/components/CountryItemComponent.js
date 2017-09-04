import React, {Component} from 'react'
import PropTypes from 'prop-types'
import star from '../assets/Gpritiranjan-Simple-Christmas-Star.ico'
import garbage from '../assets/garbage-bin-png-1.png'
import {componentMessage} from '../utils/index'

class CountryItemComponent extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        console.log(`mounted item component ${this.props.index}`)
    }

    componentDidUpdate() {
        componentMessage(CountryItemComponent.toString, 'updated')
    }

    handleClick(){
        this.props.toggleFavorite(this.props.index)
    }

    render() {
        const {isfavorite, index, name, toggleFavorite} = this.props
        const favoriteStar = isfavorite ? <img className="App-logo" src={star} alt="star"/> :
            <img className="App-logo" src={star} alt="star"/>

        return (
            <div onClick={this.handleClick} className="col-12 list-group list-group-item">
                <p className=""> {name} </p>
                <div>
                    {favoriteStar}
                    <img className="App-logo" src={garbage} alt="garbage"/>
                </div>
            </div>
        )
    }


}

export default CountryItemComponent