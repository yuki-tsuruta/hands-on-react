import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import { useState } from "react"

type ResultsState = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("")
  const [results, setResults] = useState<ResultsState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (e: any) => {
    e.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=34ac5d97dacb4141901134526243112&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
  }

  return (
    <div>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
    </div>
  )
}

export default App
