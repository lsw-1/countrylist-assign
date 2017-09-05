import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardComponent from './components/CardComponent';
import CountrySearchBoxComponent from './components/CountrySearchBoxComponent';
import MyCountriesListComponent from './components/MyCountriesListComponent';
import logLifecycle from './hoc/LogLifecycle';

class App extends Component {

    constructor() {
        super();
        this.state = {
            myCountries: []
        };
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.addCountry = this.addCountry.bind(this);
        this.removeCountry = this.removeCountry.bind(this);
    }

    addCountry(country) {
        let existingCountry;
        existingCountry = this.state.myCountries.find(myCountry =>
            myCountry.id === country.id || myCountry.name === country.countryName);
        if (!existingCountry) {
            const newCountry = {id: country.id, name: country.countryName, isFav: false};
            const myCountries = [...this.state.myCountries, newCountry];
            this.setState({myCountries});
        } else {
            console.log('Country is already in the list')
        }
    }

    toggleFavorite(id) {
        const myCountries = this.state.myCountries.map((country) => {
            if (country.id === id) {
                return {
                    ...country,
                    isFav: !country.isFav
                };
            }
            return country;
        });
        this.setState(({
            myCountries
        }));
    }

    removeCountry(id) {
        const myCountries = this.state.myCountries.filter(country => {
            return country.id !== id;
        });
        this.setState({
            myCountries
        });
    }

    render() {
        const {myCountries} = this.state;

        const sortedCountries = myCountries.sort((countryA, countryB) => countryA.name > countryB.name ? 1 : -1);
        const myFavoriteCountries = sortedCountries.filter((country) => country.isFav === true);

        return (
            <div className="App container">
                <div className="card-group mt-lg-4 ">
                    <CardComponent title="My Countries">
                        <CountrySearchBoxComponent addCountry={this.addCountry}/>
                        <MyCountriesListComponent countries={sortedCountries} removeCountry={this.removeCountry}
                                                  toggleFavorite={this.toggleFavorite}/>
                    </CardComponent>

                    <div className="col-2"/>

                    <CardComponent title="My Favorites">
                        <div className="min-height"/>
                        <MyCountriesListComponent countries={myFavoriteCountries} removeCountry={this.removeCountry}
                                                  toggleFavorite={this.toggleFavorite}/>
                    </CardComponent>
                </div>
            </div>
        );
    }
}

export default logLifecycle(App);
