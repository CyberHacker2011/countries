import React, { useContext } from 'react';
import { countriesDataContext, themeController, onePageContext } from '../App';

const CountryPage = () => {
  const backSymbolWhite = (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="#111517" />
    </svg>
  );
  const backSymbolDark = (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="white" />
    </svg>
  );

  const countriesData = useContext(countriesDataContext);
  const theme = useContext(themeController).theme;
  const { onePage, setOnePage } = useContext(onePageContext);

  let selectedCountry;
  countriesData.forEach(country => {
    if (country.country_id === onePage ){
      selectedCountry = country;
    }
  });
  const borderCountriesStyle = "dark:bg-secondary px-3 py-1 rounded-sm drop-shadow-md shadow-md ";
  const infosCountryStyle = "flex flex-wrap"
  const handleBackBtn = () => {
    setOnePage(null);
  };

  if (!selectedCountry) {
    return (
      <div className="block p-7">
        <span>Invalid country selected</span>
        <button className="dark:bg-secondary inline-flex items-center gap-3 border-none bg-white drop-shadow-md shadow-md py-2 px-5 text-sm font-sans rounded-md m-5" onClick={handleBackBtn}>
          {theme ? backSymbolDark : backSymbolWhite} Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="block p-10">
        <button className="dark:bg-secondary flex items-center gap-3 border-none bg-white drop-shadow-md shadow-md py-2 px-5 text-sm font-sans rounded-md" onClick={handleBackBtn}>
          {theme ? backSymbolDark : backSymbolWhite} Back
        </button>
      </div>
      <div className="grid lg:grid-cols-2 mx-auto grid-cols-1 lg:gap-32 gap-10 px-10">
        <div className="md:w-xl md:h-96 w-xl h-64 rounded-lg shadow-lg">
          <img className="w-full h-full rounded-lg" src={selectedCountry.country_flag} alt="Img" />
        </div>
        <div className="grid lg:gap-0 gap-5 mr-3">
          <div className="flex items-center">
            <span className="text-3xl font-bold max-h-24">{selectedCountry.country_name}</span>
          </div>
          <div className="flex flex-col md:flex-wrap py-3 max-h-44 text-md md:text-lg md:gap-x-3">
            <span><b>Native Name:</b> {selectedCountry.country_nativename}</span>
            <span><b>Population:</b> {selectedCountry.country_population}</span>
            <span><b>Region:</b> {selectedCountry.country_region}</span>
            <span><b>Capital:</b> {selectedCountry.country_capital}</span>
            <span><b>Subregion:</b> {selectedCountry.country_subregion}</span>
            <span><b>Top Level Domain:</b> {selectedCountry.country_topleveldomain}</span>
            <span><b>Currencies:</b> {selectedCountry.country_currencies}</span>
            <span><b>Languages:</b> {selectedCountry.country_languages}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Border Countries:&emsp;</span>
            <div className="inline-flex flex-wrap gap-2 lg:m-0 mt-2 ">
              {selectedCountry.country_bordercountries?.map((borderCountry, index) => (
                <a key={index}  className={borderCountriesStyle}>{borderCountry }</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
