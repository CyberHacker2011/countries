import React, { useContext } from 'react';
import { countriesDataContext, onePageContext } from '../App';

const CountriesCard = () => {
  const countriesData = useContext(countriesDataContext);
  const {onePage,setOnePage} = useContext(onePageContext); 

  const BringCountriesCards = ({prop}) => {
    return (
      <div className="dark:bg-secondary mx-auto max-w-72  border-gray-500 shadow-lg p-0 rounded-md cursor-pointer">
        <img src={prop.country_flag} alt="Img" className="rounded-md w-full h-44" />
        <div className="py-3 px-5">
          <span className="text-lg font-bold">{prop.country_name}</span><br />
        </div>
        <div className="px-5 pb-7 flex-row gap-y-7 text-sm font-sans ">
          <span><b>Population:</b>&nbsp;{prop.country_population}</span><br />
          <span><b>Region:</b>&nbsp;{prop.country_region}</span><br />
          <span><b>Capital:</b>&nbsp;{prop.country_capital}</span><br />
        </div>
      </div>
    )
  }
  const handleClickCard = (countryId)=>{
    setOnePage(countryId);
  }
  return (
    <div  className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-7 gap-x-2">
      {countriesData.map((item) => (
        <div key={item.country_id} onClick={()=>handleClickCard(item.country_id)}> 
          <BringCountriesCards prop={item} />
        </div>
      ))}
    </div>
  );
};

export default CountriesCard;
