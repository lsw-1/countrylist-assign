import React, {Component} from 'react';
import PropTypes from 'prop-types';
import star from '../assets/Gpritiranjan-Simple-Christmas-Star.ico';
import stargrey from '../assets/star-2-xxl.png';
import garbage from '../assets/garbage-bin-png-1.png';
import logLifecycle from '../hoc/LogLifecycle';

class CountryItemComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {


        const {country, toggleFavorite, removeCountry} = this.props;
        const favoriteStar = country.isFav ?
            <img className="icon col-2" src={star} alt="star" onClick={() => toggleFavorite(country.id)}/> :
            <img className="icon col-2" onClick={() => toggleFavorite(country.id)} src={stargrey} alt="star"/>;

        return (
            <div className="col-12 hover">
                <p className="col-6 d-inline-block mr-5 mt-3"> {country.name} </p>
                {favoriteStar}
                <img className="col-2 icon" src={garbage} onClick={() => removeCountry(country.id)} alt="garbage"/>
            </div>
        );
    }
}

CountryItemComponent.propTypes = {
    country: PropTypes.object.isRequired,
    removeCountry: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

export default logLifecycle(CountryItemComponent);