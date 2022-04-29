import React, { useEffect, useState } from 'react'
import Prices from './Prices'
import axios from 'axios'

let cancelToken
const fetchData = async (
  breed,
  legend,
  purity,
  stage,
  type,
  classes,
  callback,
) => {
  try {
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel('Canceling previous request...')
    }

    cancelToken = axios.CancelToken.source()
    const response = await axios.get(
      'https://p2eanalytics.com/crabada/getPrices',
      {
        params: {
          breedMin: stage ? breed[0] : 0,
          breedMax: stage ? breed[1] : 0,
          legendMin: stage ? legend[0] : 0,
          legendMax: stage ? legend[1] : 0,
          purityMin: stage ? purity[0] : 0,
          purityMax: stage ? purity[1] : 0,
          stage: stage,
          isOrigin: stage && type[0] ? 1 : 0,
          isGenesis: stage && type[1] ? 1 : 0,
          classes: stage ? classes : false,
        },
        cancelToken: cancelToken.token,
      },
    )
    callback(null, response.data.data)
  } catch (e) {
    callback(e)
  }
}

const colors = [
  '#FC252B',
  '#108C8C',
  '#C9B22E',
  '#793024',
  '#0068EC',
  '#533FB4',
  '#EC2C9E',
  '#34A527',
]
function PricesContainer() {
  const [breed, setBreed] = useState([0, 5])
  const [legend, setLegend] = useState([0, 6])
  const [purity, setPurity] = useState([0, 6])

  const [stage, setStage] = useState(1) // 0 -> Egg, 1 -> Adult,
  const [type, setType] = useState([0, 0]) // 0 -> Origin, 1 -> Genesis
  const [classes, setClasses] = useState([3]) // Empty = All

  const [graphData, setGraphData] = useState([[], [], []])
  const [graphDataColors, setGraphDataColors] = useState([[]])
  const [graphMenu, setGraphMenu] = useState(0)
  const [loading, setLoading] = useState(true)
  const [applyChanges, setApplyChanges] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetchData(breed, legend, purity, stage, type, classes, (err, res) => {
      if (!err) {
        let allArrays = []
        let tempColors = []
        if (stage === 1) {
          for (let i = 0; i < res.length; i++) {
            let currentArray = res[i]
            let temp = []
            for (let j = 0; j < currentArray.length; j++) {
              if (
                currentArray[j].data.length > 0 &&
                (classes.length === 0 || classes.indexOf(j + 1) >= 0)
              ) {
                temp.push(currentArray[j])
                tempColors.push(colors[j])
              }
            }
            allArrays.push(temp)
          }
        }
        setGraphData(stage === 1 ? allArrays : res)
        setGraphDataColors(stage === 1 ? tempColors : ['#1370F6'])
        setLoading(false)
      }
    })
  }, [applyChanges])

  return (
    <Prices
      breed={breed}
      setBreed={setBreed}
      legend={legend}
      setLegend={setLegend}
      purity={purity}
      setPurity={setPurity}
      stage={stage}
      setStage={setStage}
      type={type}
      setType={setType}
      classes={classes}
      setClasses={setClasses}
      graphData={graphData}
      graphMenu={graphMenu}
      setGraphMenu={setGraphMenu}
      graphDataColors={graphDataColors}
      loading={loading}
      applyChanges={applyChanges}
      setApplyChanges={setApplyChanges}
    />
  )
}

export default PricesContainer
