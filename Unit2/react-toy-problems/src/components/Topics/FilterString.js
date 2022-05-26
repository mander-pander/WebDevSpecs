import React, {Component} from 'react';

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            countries: ['Canada', 'USA', 'Mexico', 'Italy', 'France', 'Japan', 'Australia', 'Vietnam', 'Ukraine'],
            userInput: '',
            filteredCountries: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    filterCountries(userInput) {
        let countries = this.state.countries;
        // console.log(countries)
        let filteredCountries = [];

        for (let i = 0; i < countries.length; i++) {
            if (countries[i].includes(userInput)) {
                filteredCountries.push(countries[i]);
            }
        }

        this.setState({filteredCountries: filteredCountries});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Countries: { JSON.stringify(this.state.countries, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterCountries(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Countries: { JSON.stringify(this.state.filteredCountries, null, 10) } </span>
            </div>
        )
    }
}
