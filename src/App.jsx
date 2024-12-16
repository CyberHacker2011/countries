import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import SFcontainer from './components/SFcontainer';
import CountriesCard from './components/CountriesCard';
import CountryPage from './components/CountryPage';
import { countriesData } from './assets/CountriesData';

export const themeController = createContext();
export const countriesDataContext = createContext();
export const onePageContext = createContext();
export const searchQueryContext = createContext();
export const filterQueryContext = createContext();

const App = () => {
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");
  const [onePage, setOnePage] = useState(localStorage.getItem('onepage') || null); 
  const [isOnePage, setIsOnePage] = useState(!!localStorage.getItem('onepage'));
  const [searchQuery, setSearchQuery] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);
  const filterFiltering = ()=>{
    if (filterQuery){
      let filtered = countriesData.filter(country =>
        country.country_region.toLowerCase().trim() === filterQuery.toLowerCase().trim())
      setFilteredCountries(filtered)
    }else{
      setFilteredCountries(countriesData)
    } 
  }
  const searchFiltering = ()=>{
    if (searchQuery && searchQuery.trim()) {
      let filtered = countriesData.filter(country =>
        country.country_name.toLowerCase().trim().startsWith(searchQuery.toLowerCase().trim())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countriesData);
    }
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    if (onePage) {
      localStorage.setItem('onepage', onePage); 
    } else {
      localStorage.removeItem('onepage'); 
    }
    setIsOnePage(!!onePage); 
  }, [onePage]);
  useEffect(()=>{
    if (filterQuery && !searchQuery){
      filterFiltering();
    }else if(!filterQuery && searchQuery){
      searchFiltering()
    }else{
      if (filterQuery && searchQuery && searchQuery.trim()){
        let filtered = countriesData.filter(country =>
          (country.country_region.toLowerCase().trim() === filterQuery.toLowerCase().trim()) && (country.country_name.toLowerCase().trim().startsWith(searchQuery.toLowerCase().trim())))
        
        setFilteredCountries(filtered)
      }else{
        setFilteredCountries(countriesData)
      } 
    }
  },[filterQuery,searchQuery,countriesData])
  

  return (
    <themeController.Provider value={{ theme, setTheme }}>
      <countriesDataContext.Provider value={filteredCountries}>
        <onePageContext.Provider value={{ onePage, setOnePage }}>
          <filterQueryContext.Provider value={{filterQuery, setFilterQuery}}>
            <searchQueryContext.Provider value={{searchQuery,setSearchQuery}}>
              {isOnePage ? (
                <>
                  <Header />
                  <CountryPage />
                </>
              ) : (
                <>
                  <Header />
                  <SFcontainer />
                  <CountriesCard />
                </>
              )}
            </searchQueryContext.Provider>
          </filterQueryContext.Provider>
        </onePageContext.Provider>
      </countriesDataContext.Provider>
    </themeController.Provider>
  );
};

export default App;
