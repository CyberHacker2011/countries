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
    if (country.country_id === onePage) {
      selectedCountry = country;
    }
  });

  const borderCountriesStyle = "dark:bg-secondary px-3 py-1 rounded-sm drop-shadow-md shadow-md";
  const handleBackBtn = () => {
    setOnePage(null);
  };

  if (!selectedCountry) {
    return (
      <div className="block p-7">
        <span>Invalid country selected</span>
        <button
          className="dark:bg-secondary inline-flex items-center gap-3 border-none bg-white drop-shadow-md shadow-md py-2 px-5 text-sm font-sans rounded-md m-5"
          onClick={handleBackBtn}
        >
          {theme ? backSymbolDark : backSymbolWhite} Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Back Button */}
      <div className="mb-5">
        <button
          className="dark:bg-secondary flex items-center gap-3 border-none bg-white drop-shadow-md shadow-md py-2 px-5 text-sm font-sans rounded-md"
          onClick={handleBackBtn}
        >
          {theme ? backSymbolDark : backSymbolWhite} Back
        </button>
      </div>

      {/* Country Details */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Flag */}
        <div className="rounded-lg shadow-lg">
          <img
            className="w-full h-full rounded-lg"
            src={selectedCountry.country_flag}
            alt={`${selectedCountry.country_name} flag`}
          />
        </div>

        {/* Country Info */}
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold">{selectedCountry.country_name}</h1>

          <div className="space-y-2 text-sm md:text-base">
            <p><b>Native Name:</b> {selectedCountry.country_nativename || "N/A"}</p>
            <p><b>Population:</b> {selectedCountry.country_population?.toLocaleString() || "N/A"}</p>
            <p><b>Region:</b> {selectedCountry.country_region || "N/A"}</p>
            <p><b>Capital:</b> {selectedCountry.country_capital || "N/A"}</p>
            <p><b>Subregion:</b> {selectedCountry.country_subregion || "N/A"}</p>
            <p><b>Top Level Domain:</b> {selectedCountry.country_topleveldomain || "N/A"}</p>
            <p><b>Currencies:</b> {selectedCountry.country_currencies?.join(", ") || "N/A"}</p>
            <p><b>Languages:</b> {selectedCountry.country_languages?.join(", ") || "N/A"}</p>
          </div>

          {/* Border Countries */}
          <div>
            <span className="text-lg font-bold">Border Countries:&emsp;</span>
            <div className="inline-flex flex-wrap gap-2 mt-2">
              {selectedCountry.country_bordercountries?.length > 0 ? (
                selectedCountry.country_bordercountries.map((borderCountry, index) => (
                  <span key={index} className={borderCountriesStyle}>
                    {borderCountry}
                  </span>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;