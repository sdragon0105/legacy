import React, { useEffect, useState } from 'react'
import Population from './Population'
import axios from 'axios'

const fetchData = async (callback) => {
  const response = await axios.get(
    'https://p2eanalytics.com/crabada/getPopulation',
  )
  callback(response.data.data)
}

function PopulationContainer() {
  const [crabPieData, setCrabPieData] = useState([])
  const [eggPieData, setEggPieData] = useState([])
  const [crabPopulationData, setCrabPopulationData] = useState([])
  const [eggPopulationData, setEggPopulationData] = useState([])
  const [eggHatchPopulationData, setEggHatchPopulationData] = useState([])
  const [totalHatching, setTotalHatching] = useState([])
  const [totalCrabs, setTotalCrabs] = useState(1)

  useEffect(() => {
    fetchData((allData) => {
      setCrabPopulationData(allData[0])
      setEggPopulationData(allData[1])
      setCrabPieData(allData[2])
      setEggPieData(allData[3])
      setEggHatchPopulationData(allData[4])
      setTotalCrabs(allData[5])
      setTotalHatching(allData[6])
    })
  }, [])
  return totalCrabs === 1 ? (
    <div style={{ height: '500px', backgroundColor: 'black' }} />
  ) : (
    <Population
      crabPieData={crabPieData}
      eggPieData={eggPieData}
      crabPopulationData={crabPopulationData}
      eggPopulationData={eggPopulationData}
      eggHatchPopulationData={eggHatchPopulationData}
      totalCrabs={totalCrabs}
      totalHatching={totalHatching}
    />
  )
}

export default PopulationContainer
