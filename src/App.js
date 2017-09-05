import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import CardComponent from './components/CardComponent'
import CountrySearchBoxComponent from './components/CountrySearchBoxComponent'
import MyCountriesListComponent from './components/MyCountriesListComponent'
import {componentMessage} from './utils/index'

class App extends Component {

    constructor() {
        super()
        this.state = {
            myCountries: [

            ]
        }
        this.toggleFavorite = this.toggleFavorite.bind(this)
        this.addCountry = this.addCountry.bind(this)
        this.removeCountry = this.removeCountry.bind(this)
    }

    componentDidMount() {
        componentMessage('App', 'Mounted')
    }

    componentWillUnmount() {
        componentMessage('App', 'Unmounted')
    }

    addCountry(country) {
        let id = Math.random()
        const newCountry = {id: id, name: country, isFav: false}
        const myCountries = [...this.state.myCountries, newCountry]
        this.setState({
            myCountries
        })
    }

    toggleFavorite(id) {
        // const editedCountry = this.state.myCountries[cIndex]
        // console.log(editedCountry)
        // editedCountry.isFav = !editedCountry.isFav
        const myCountries = this.state.myCountries.map((country) => {
            console.log('index' + country.id)
            console.log('cindex' + id)
            if (country.id === id) {
                country.isFav = !country.isFav
            }
            return country
        })
        // const myCountries = [this.state.myCountries.slice(0, index), editedCountry, this.state.myCountries.slice(index+1, this.state.myCountries.length)]
        this.setState(({
            myCountries
        }))
    }

    removeCountry(id) {
        const myCountries = this.state.myCountries.filter(country => {
            return country.id !== id
        })
        this.setState({
            myCountries
        })
    }

    render() {
        const {myCountries} = this.state

        const myNonFavoriteCountries = myCountries.filter(country => country.isFav === false)

        const myFavoriteCountries = myCountries.filter((country) => country.isFav === true)

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
                        <MyCountriesListComponent countries={myFavoriteCountries} removeCountry={this.removeCountry}
                                                  toggleFavorite={this.toggleFavorite}/>
                    </CardComponent>
                </div>
            </div>
        )
    }
}

export default App
