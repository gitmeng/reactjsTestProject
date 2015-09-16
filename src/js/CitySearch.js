var CitySearch = React.createClass({
    getCountries: function() {
        return [{
            Id: 11,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Aruba",
            ParentCountryId: 11,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 51,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Curaçao",
            ParentCountryId: 51,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 22,
            IsFlightOnly: true,
            IsFlightOnlyCharter: true,
            IsFlightOnlyIndependent: false,
            IsPackageCharter: true,
            IsPackageIndependent: false,
            Name: "Cypern",
            ParentCountryId: 22,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 72,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Förenade Arabemiraten",
            ParentCountryId: 72,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 36,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Indonesien",
            ParentCountryId: 36,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 20,
            IsFlightOnly: true,
            IsFlightOnlyCharter: true,
            IsFlightOnlyIndependent: false,
            IsPackageCharter: true,
            IsPackageIndependent: false,
            Name: "Kroatien",
            ParentCountryId: 20,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 21,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Kuba",
            ParentCountryId: 21,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 45,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Malaysia",
            ParentCountryId: 45,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 50,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Nederländerna",
            ParentCountryId: 50,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 65,
            IsFlightOnly: true,
            IsFlightOnlyCharter: true,
            IsFlightOnlyIndependent: false,
            IsPackageCharter: true,
            IsPackageIndependent: false,
            Name: "Spanien",
            ParentCountryId: 65,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 69,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Thailand",
            ParentCountryId: 69,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 71,
            IsFlightOnly: true,
            IsFlightOnlyCharter: true,
            IsFlightOnlyIndependent: false,
            IsPackageCharter: true,
            IsPackageIndependent: false,
            Name: "Turkiet",
            ParentCountryId: 71,
            ParentId: -1,
            ValidForSearch: true
        }, {
            Id: 74,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "USA",
            ParentCountryId: 74,
            ParentId: -1,
            ValidForSearch: true
        }];
    },
    getResorts: function() {
        return [{
            Id: 37560,
            IsFlightOnly: true,
            IsFlightOnlyCharter: false,
            IsFlightOnlyIndependent: true,
            IsPackageCharter: false,
            IsPackageIndependent: true,
            Name: "Goa",
            ParentCountryId: 35,
            ParentId: 35,
            Children: [{
                Id: 3815,
                IsFlightOnly: true,
                IsFlightOnlyCharter: false,
                IsFlightOnlyIndependent: true,
                IsPackageCharter: false,
                IsPackageIndependent: true,
                Name: "Norra Goa",
                ParentCountryId: 35,
                ParentId: 37560,
                Children: [],
                IsArea: false,
                IsCity: false,
                IsResort: true,
                ValidForSearch: true
            }, {
                Id: 3816,
                IsFlightOnly: true,
                IsFlightOnlyCharter: false,
                IsFlightOnlyIndependent: true,
                IsPackageCharter: false,
                IsPackageIndependent: true,
                Name: "Panaji",
                ParentCountryId: 35,
                ParentId: 37560,
                Children: [],
                IsArea: false,
                IsCity: false,
                IsResort: true,
                ValidForSearch: true
            }, {
                Id: 3817,
                IsFlightOnly: true,
                IsFlightOnlyCharter: false,
                IsFlightOnlyIndependent: true,
                IsPackageCharter: false,
                IsPackageIndependent: true,
                Name: "Södra Goa",
                ParentCountryId: 35,
                ParentId: 37560,
                Children: [],
                IsArea: false,
                IsCity: false,
                IsResort: true,
                ValidForSearch: true
            }],
            IsArea: true,
            IsCity: false,
            IsResort: false,
            ValidForSearch: true
        }];
    },
    getInitialState: function() {
        return {
            countries: this.getCountries(),
            areas: [{
                Name: "initArea"
            }, {
                Name: "initArea2"
            }]
        };
    },
    render: function() {
        return (
            <div className="city-search">
                <div className="city-search__label">Cityresor</div>
                <CountryDropdown countries={this.state.countries} countryChanged={this.countryChanged}/>
                <AreaDropdown areas={this.state.areas} />
            </div>
        )
    },
    countryChanged: function(){
        this.setState({areas: this.getResorts()});
    }
});

var CountryDropdown = React.createClass({
    render: function() {
        return (
            <div className="country-dropdown">
                <select onChange={this.props.countryChanged}>
                    {
                        this.props.countries.map(function(country) {
                            return (
                                <option>
                                    {country.Name}
                                </option>
                            );
                        })
                    }
                </select>
            </div>

        );
    }
});

var AreaDropdown = React.createClass({
    render: function() {
        return (
            <select>
                {
                    this.props.areas.map(function(area){
                        return(
                            <option>
                                {area.Name}
                            </option>
                        );
                    })
                }
            </select>
        );
    }
});
