import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [apiData, setApiData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setApiData(res[currency]))
    }, [currency])
    
    return apiData;

}

export default useCurrencyInfo