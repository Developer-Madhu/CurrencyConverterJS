import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [apiData, setApiData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setApiData(res[currency]))
    }, [currency])
    
    console.log(apiData)
    return apiData;

}

export default useCurrencyInfo