import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import CardComponent from './components/CardComponent'
import CountrySearchBoxComponent from './components/CountrySearchBoxComponent'
import MyCountriesListComponent from './components/MyCountriesListComponent'
import MyFavoritesListComponent from './components/MyFavoritesListComponent'
import {componentMessage} from './utils/index'

class App extends Component {

    constructor() {
        super()
        this.state = {
            myCountries: [
                {name: 'sweden', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'usa', isFav: false},
                {name: 'france', isFav: false}
            ]
        }
        this.toggleFavorite = this.toggleFavorite.bind(this)
        this.addCountry = this.addCountry.bind(this)
    }

    componentDidMount() {
        componentMessage('App', 'Mounted')
    }

    componentWillUnmount() {
        componentMessage('App', 'Unmounted')
    }

    addCountry() {
        const country = {name: 'sweden', isFav: false}
        this.state.myCountries.push(country)
        this.setState({
            myCountries: this.state.myCountries
        })
    }

    toggleFavorite(index) {
        let myCountries = this.state.myCountries
        let test = myCountries[index].isFav = !this.state.myCountries[index].isFav
        console.log(test)
        console.log(index)
        this.setState((prevState) => {
            myCountries
        })
    }

    removeCountry = (index) => {
        const myCountries = this.state.myCountries.slice(index, 1)
        this.setState({
            myCountries
        })
    }

    render() {
        const {myCountries} = this.state

        let myNonFavoriteCountries = this.state.myCountries.filter(country => country.isFav === false)

        let myFavoriteCountries = this.state.myCountries.filter((country) => country.isFav === true)

        return (
            <div className="App container">
                <div className="card-group mt-lg-4 ">
                    <CardComponent title="My Countries">
                        <CountrySearchBoxComponent addCountry={this.addCountry}/>
                        <MyCountriesListComponent countries={myNonFavoriteCountries} removeCountry={this.removeCountry}
                                                  toggleFavorite={this.toggleFavorite}/>
                    </CardComponent>

                    <div className="col-2"/>

                    <CardComponent title="My Favorites">
                        <MyFavoritesListComponent countries={myFavoriteCountries}/>
                    </CardComponent>
                </div>
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUpVXgx7Y83HwlQ-1BjMNMRCuh5R6Wyik=places"/>
            </div>
        )
    }
}

export default App
