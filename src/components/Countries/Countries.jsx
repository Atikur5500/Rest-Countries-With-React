import { useState, useEffect } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countriesFlag, setCountriesFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        // const newCountries = [...visitedCountries, country];
        // setVisitedCountries(newCountries)
        // console.log(country)
        setVisitedCountries([...visitedCountries, country])
    }

    const handleCountriesFlag = flag => {
        const newCountriesFlag = [...countriesFlag, flag];
        setCountriesFlag(newCountriesFlag)
        console.log(flag)
    }

    return (
        <div>
           
            <div className=" text-center mt-5">
                <h3 className="text-left ml-5">Total Countries: {countries.length}</h3>
                <h2 className="text-left ml-5">Visited Countries: {visitedCountries.length}</h2>
                <h2 className=" text-2xl text-left ml-5 mt-2">Visited Countries</h2>
                <ul className=" text-left ml-10">
                    {
                        visitedCountries.map(item => <li style={{listStyle: 'number'}} key={item.cca2}>{item}</li>)   
                    }
                </ul>
                <div className=" w-20 mt-5 flex flex-col gap-3 ml-5 md:ml-4">
                    {
                        countriesFlag.map((flag, index) => <img key={index} src={flag}></img>)
                    }
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    // eslint-disable-next-line react/jsx-key
                    countries.map(countryItem => <Country key={countryItem.cca2} country={countryItem} handleVisitedCountry={handleVisitedCountry} handleCountriesFlag={handleCountriesFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;