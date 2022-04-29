import React from "react";
import "./Economy.css";
import { TUS } from "../../../images";
import { AreaGraph, BarGraph } from "../../../components/Graphs";
import Feedback from "../../../components/Feedback/Feedback";
import Legend from "../../../components/Legend/Legend";

const marketplaceMenu = ["Sales (TUS)", "Average Price (TUS)", "Crabada Sold"];
const TUSMenu = ["Net Supply", "Issuance Rate", "Issuance & Breed"];

const marketLegend = [
  [
    {
      name: "TUS Volume",
      color: "#ae38a1",
    },
  ],
  [
    {
      name: "TUS Volume",
      color: "#ae38a1",
    },
  ],
  [
    {
      name: "Crab Count",
      color: "#ae38a1",
    },
  ],
];

const tusLegend = [
  [
    {
      name: "Net Supply",
      color: "#ae38a1",
    },
  ],
  [
    {
      name: "Issuance %",
      color: "#ae38a1",
    },
    {
      name: "Breeding %",
      color: "var(--blue)",
    },
    {
      name: "Net Inflation",
      color: "#ffffff",
    },
  ],
  [
    {
      name: "Issuance",
      color: "var(--blue)",
    },
    {
      name: "Breeding",
      color: "#ae38a1",
    },
  ],
];

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Economy(props) {

  return (
    <div className='crabadaEconomy'>
      <div className='economyData'>
        <div className='economyDataItem'>
          <div className='economyDataSelectorTitle'>
            <img src={TUS} className='dashboardIcon' alt='' />
            <h3 className='bgColor'>Marketplace</h3>
          </div>
          <div className='dashboardMenuColumn'>
            {marketplaceMenu.map((menu, index) => (
              <div
                className={props.menus[0] === index ? 'dashboardMenuItem active' : 'dashboardMenuItem'}
                key={index}
                onClick={() => {
                  props.setMenus([index, props.menus[1]]);
                }}
              >
                {props.menus[0] === index ? <div className='blueCircle' /> : ''}
                <div className='dashboardMenuItemTitle bgColor'>{menu}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='economyDataGraph'>
          <div className='economyDataGraphTitle'>
            <h2>Sales</h2>
            <div className='timeFilter'>
              <div
                className={props.timeFilter[0] === '24hrs' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => ['24hrs', arr[1]]);
                }}
              >
                24hrs
              </div>
              <div
                className={props.timeFilter[0] === '7days' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => ['7days', arr[1]]);
                }}
              >
                Last 7 Days
              </div>
              <div
                className={props.timeFilter[0] === 'all' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => ['all', arr[1]]);
                }}
              >
                All time
              </div>
            </div>

            <Legend legends={marketLegend[props.menus[0]]} />
          </div>
          <div style={{ width: '100%', height: '320px' }}>
            <AreaGraph
              data={props.market.length > 1 ? props.market[props.menus[0]] : []}
              colors={['#ae38a1']}
              range={props.timeFilter[0]}
              tooltipFunction={(e) => {
                return (
                  <div
                    style={{
                      padding: '10px',
                      width: '200px',
                      height: '50px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0,0,0,0.75)',
                      border: '1px solid #fff',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ color: 'white', alignSelf: 'center' }}>
                      <strong>- {e.point.data.x} -</strong>
                    </div>
                    <div style={{ color: 'white' }}>
                      Value: <strong> {props.menus[0] === 1 ? numberWithCommas(e.point.data.y).split('.')[0] : numberWithCommas(e.point.data.y)}</strong>
                    </div>
                  </div>
                );
              }}
              minMax={props.marketMinMax[props.menus[0]]}
            />
          </div>
        </div>
      </div>
      <div className='economyData'>
        <div className='economyDataItem'>
          <div className='economyDataSelectorTitle'>
            <img src={TUS} className='dashboardIcon' alt='' />
            <h3 className='bgColor'>Treasure Under Sea</h3>
          </div>
          <div className='dashboardMenuColumn'>
            {TUSMenu.map((menu, index) => (
              <div
                className={props.menus[1] === index ? 'dashboardMenuItem active' : 'dashboardMenuItem'}
                key={index}
                onClick={() => {
                  props.setMenus([props.menus[0], index]);
                }}
              >
                {props.menus[1] === index ? <div className='blueCircle' /> : ''}
                <div className='dashboardMenuItemTitle'>{menu}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='economyDataGraph'>
          <div className='economyDataGraphTitle bgColor'>
            <h2>TREASURE UNDER SEA (TUS)</h2>
            <div className='timeFilter'>
              <div
                className={props.timeFilter[1] === '7days' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => [arr[0], '7days']);
                }}
              >
                Last 7 Days
              </div>
              <div
                className={props.timeFilter[1] === '30days' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => [arr[0], '30days']);
                }}
              >
                30 Days
              </div>
              <div
                className={props.timeFilter[1] === 'all' ? 'timeFilterItem active' : 'timeFilterItem'}
                onClick={() => {
                  props.setTimeFilter((arr) => [arr[0], 'all']);
                }}
              >
                All time
              </div>
            </div>

            <Legend legends={tusLegend[props.menus[1]]} />
          </div>

          {props.menus[1] !== 2 ? (
            <div style={{ width: '100%', height: '320px' }}>
              <AreaGraph
                data={props.token.length > 1 ? props.token[props.menus[1]] : []}
                colors={['#ae38a1', 'var(--blue)', '#ffffff']}
                range={props.timeFilter[1]}
                tooltipFunction={(e) => {
                  return (
                    <div
                      style={{
                        padding: '10px',
                        width: '200px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(0,0,0,0.75)',
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
                        <strong
                          style={{
                            color: props.menus[1] === 1 ? e.point.borderColor : 'white',
                          }}
                        >
                          {' '}
                          {props.menus[1] === 1 ? e.point.data.y.toFixed(2) + '%' : numberWithCommas(e.point.data.y)}
                        </strong>
                      </div>
                    </div>
                  );
                }}
                minMax={props.tokenMinMax[props.menus[1]]}
                percentage={props.menus[1] === 1}
              />
            </div>
          ) : (
            <div style={{ width: '100%', height: '320px' }}>
              <BarGraph
                data={props.token.length > 1 ? props.token[props.menus[1]] : []}
                keys={props.token.length > 1 ? props.token[props.menus[1]][0]['keys'] : []}
                range={props.timeFilter[1]}
                tooltipFunction={(e) => {
                  return (
                    <div
                      style={{
                        padding: '10px',
                        width: '200px',
                        height: '75px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(0,0,0,0.75)',
                        border: '1px solid #fff',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ color: 'white', alignSelf: 'center' }}>
                        <strong>- {e.point.data.x} -</strong>
                      </div>
                      <div style={{ color: 'white' }}>
                        <strong> {numberWithCommas(e.point.data.y)}</strong>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Feedback />
    </div>
  );
}

export defaul