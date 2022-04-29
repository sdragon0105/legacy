import React from 'react'
import Slider from '@mui/material/Slider'
import { AreaGraph } from '../../../components/Graphs'
import Feedback from '../../../components/Feedback/Feedback'
import './Prices.css'
import Legend from '../../../components/Legend/Legend'

const crabPoplegends = [
  {
    name: 'Surge',
    color: '#FC252B',
  },
  {
    name: 'Sunken',
    color: '#108C8C',
  },
  {
    name: 'Prime',
    color: '#C9B22E',
  },
  {
    name: 'Bulk',
    color: '#793024',
  },
  {
    name: 'Craboid',
    color: '#0068EC',
  },
  {
    name: 'Ruined',
    color: '#533FB4',
  },
  {
    name: 'Gem',
    color: '#EC2C9E',
  },
  {
    name: 'Organic',
    color: '#34A527',
  },
]
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function Prices(props) {
  return (
    <>
      <div className="pricesComingSoon">COMING SOON ...</div>
      <div className="prices">
        <div className="pricesFilter">
          <div
            className="applyChanges"
            onClick={() => {
              props.setApplyChanges(!props.applyChanges)
            }}
          >
            <div>Filters</div>
            <div className="applyChangeButton">Apply Changes</div>
          </div>
          <div className="firstFilters">
            <div className="filterItem">
              <h3>Breed Count</h3>
              <Slider
                min={0}
                max={5}
                step={1}
                value={props.breed}
                onChange={(event, newValue) => {
                  props.setBreed(newValue)
                }}
                valueLabelDisplay="auto"
                marks={[
                  { value: 0, label: 0 },
                  { value: 5, label: 5 },
                ]}
              />
            </div>
            <div className="filterItem">
              <h3>Legend</h3>
              <Slider
                min={0}
                max={6}
                step={1}
                value={props.legend}
                onChange={(event, newValue) => {
                  props.setLegend(newValue)
                }}
                valueLabelDisplay="auto"
                marks={[
                  { value: 0, label: 0 },
                  { value: 6, label: 6 },
                ]}
              />
            </div>
            <div className="filterItem">
              <h3>Purity</h3>
              <Slider
                min={0}
                max={6}
                step={1}
                value={props.purity}
                onChange={(event, newValue) => {
                  props.setPurity(newValue)
                }}
                valueLabelDisplay="auto"
                marks={[
                  { value: 0, label: 0 },
                  { value: 6, label: 6 },
                ]}
              />
            </div>
          </div>
          <div className="secondFilters">
            <div className="filterItem">
              <h3>Stage</h3>
              <div className="filterCheckbox">
                {/* <div>
                  <input
                    type="checkbox"
                    id="egg"
                    name="stage"
                    value="EGG"
                    checked={props.stage === 0}
                    onChange={(e) => {
                      props.setStage(e.target.checked ? 0 : 1)
                    }}
                  />
                  <label htmlFor="egg">Egg</label>
                </div> */}
                <div>
                  <input
                    type="checkbox"
                    id="adult"
                    name="stage"
                    value="ADULT"
                    checked={props.stage === 1}
                    onChange={(e) => {
                      props.setStage(e.target.checked ? 1 : 0)
                    }}
                  />
                  <label htmlFor="adult">Adult</label>
                </div>
              </div>
            </div>
            <div className="filterItem">
              <h3>Type</h3>
              <div className="filterCheckbox">
                <div>
                  <input
                    type="checkbox"
                    id="origin"
                    name="type"
                    value="ORIGIN"
                    checked={props.type[0] === 1}
                    onChange={(e) => {
                      let bool = 0
                      if (e.target.checked) {
                        bool = 1
                      } else {
                        bool = 0
                      }

                      let newArr = [bool, props.type[1]]

                      props.setType(newArr)
                    }}
                  />
                  <label htmlFor="origin">Origin</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="genesis"
                    name="type"
                    value="GENESIS"
                    checked={props.type[1] === 1}
                    onChange={(e) => {
                      let bool = 0
                      if (e.target.checked) {
                        bool = 1
                      } else {
                        bool = 0
                      }

                      let newArr = [props.type[0], bool]

                      props.setType(newArr)
                    }}
                  />
                  <label htmlFor="genesis">Genesis</label>
                </div>
              </div>
            </div>
            <div className="filterItem">
              <h3>Class</h3>
              <div className="classFilterCheckbox">
                <div className="classFilterRow">
                  <div>
                    <input
                      type="checkbox"
                      id="surge"
                      name="class"
                      value="SURGE"
                      checked={props.classes.indexOf(1) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 1])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(1), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="surge">SURGE</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="prime"
                      name="class"
                      value="PRIME"
                      checked={props.classes.indexOf(3) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 3])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(3), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="prime">PRIME</label>
                  </div>
                </div>

                <div className="classFilterRow">
                  <div>
                    <input
                      type="checkbox"
                      id="craboid"
                      name="class"
                      value="CRABOID"
                      checked={props.classes.indexOf(5) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 5])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(5), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="craboid">CRABOID</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="gem"
                      name="class"
                      value="GEM"
                      checked={props.classes.indexOf(7) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 7])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(7), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="gem">GEM</label>
                  </div>
                </div>

                <div className="classFilterRow">
                  <div>
                    <input
                      type="checkbox"
                      id="sunken"
                      name="class"
                      value="SUNKEN"
                      checked={props.classes.indexOf(2) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 2])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(2), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="sunken">SUNKEN</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="bul"
                      name="class"
                      value="BULK"
                      checked={props.classes.indexOf(4) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 4])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(4), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="bul">BULK</label>
                  </div>
                </div>
                <div className="classFilterRow">
                  <div>
                    <input
                      type="checkbox"
                      id="ruined"
                      name="class"
                      value="RUINED"
                      checked={props.classes.indexOf(6) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 6])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(6), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="ruined">RUINED</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="organic"
                      name="class"
                      value="ORGANIC"
                      checked={props.classes.indexOf(8) >= 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          props.setClasses((arr) => [...arr, 8])
                        } else {
                          let tempArr = [...props.classes]
                          tempArr.splice(tempArr.indexOf(8), 1)
                          props.setClasses(tempArr)
                        }
                      }}
                    />
                    <label htmlFor="organic">ORGANIC</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricesGraph">
          <Legend
            legends={
              props.stage === 1
                ? crabPoplegends
                : [{ name: 'Egg', color: '#1370F6' }]
            }
          />
          {props.loading ? (
            <div className="loadingDiv">
              <p className="loadingTag">Crunching Data</p>
              <div className="dot-flashing" />
            </div>
          ) : (
            ''
          )}
          <AreaGraph
            data={props.graphData[props.graphMenu]}
            colors={props.graphDataColors}
            minMax={[0, 'auto']}
            range={props.stage === 1 ? 'all' : ''}
            prices={true}
            tooltipFunction={(e) => {
              return (
                <div
                  style={{
                    padding: '10px',
                    width: '200px',
                    height: '50px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    border: '1px solid #fff',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ color: 'white', alignSelf: 'center' }}>
                    <strong>- {e.point.data.x} -</strong>
                  </div>
                  <div style={{ color: 'white' }}>
                    Value:{' '}
                    <strong style={{ color: e.point.borderColor }}>
                      {numberWithCommas(e.point.data.y.toFixed(2))}
                    </strong>
                  </div>
                </div>
              )
            }}
          />

          <div className="pricesGraphMenu">
            <div
              className={
                props.graphMenu === 0
                  ? 'pricesGraphMenuItem active'
                  : 'pricesGraphMenuItem'
              }
              onClick={() => {
                props.setGraphMenu(0)
              }}
            >
              <h3>Floor Price</h3>
            </div>
            <div
              className={
                props.graphMenu === 1
                  ? 'pricesGraphMenuItem active'
                  : 'pricesGraphMenuItem'
              }
              onClick={() => {
                props.setGraphMenu(1)
              }}
            >
              <h3>Average Price</h3>
            </div>
            <div
              className={
                props.graphMenu === 2
                  ? 'pricesGraphMenuItem active'
                  : 'pricesGraphMenuItem'
              }
              onClick={() => {
                props.setGraphMenu(2)
              }}
            >
              <h3>Crabada Sold</h3>
            </div>
          </div>
          <Feedback style={{ width: '100%' }} />
        </div>
      </div>
    </>
  )
}

export default Prices
