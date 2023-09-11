import { useState } from "react"
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleCountriesFlag }) => {
    const {name, flags, region} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }

    // const passWithParameter = () => handleVisitedCountry(country)
   
    
    return (
        <div className="px-5 md:px-0" >
            <div className="card border  h-full rounded-none shadow-md bg-slate-200">
                <figure><img className=" h-60 w-full" src={flags.png} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name.common}</h2>
                    <p>Country Region:{region}</p>
                    <div className="card-actions justify-center mt-3">
                        <button onClick={handleVisited} className="btn font-bold rounded-sm">{visited ? 'Visited' : 'Going'}
                        </button>

                        <button onClick={() => handleVisitedCountry(country.name.common)}  className="btn font-bold rounded-sm">Mark Visited
                        </button>

                        <button onClick={() => handleCountriesFlag(country.flags.png)}  className="btn font-bold rounded-sm">Country Flag
                        </button>
                        {/* {visited && 'I Want to visit this country!'} */}
                        {visited ? 'I have visit' : 'I Want to visited this country!'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;