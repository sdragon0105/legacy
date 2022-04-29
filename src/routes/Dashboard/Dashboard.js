import React from 'react'
import './Dashboard.css'
import NavbarContainer from '../../components/Navbar/NavbarContainer'
import {
  CrabadaLogo,
  P2EIcon,
  AVAX,
  TUS,
  CRA,
  CRAM,
  Economy,
  Population,
  InsightsLogo,
  Test,
} from '../../images/index'
import EconomyContainer from '../../games/crabada/Economy/EconomyContainer'
import PricesContainer from '../../games/crabada/Prices/PricesContainer'
import PopulationContainer from '../../games/crabada/Population/PopulationContainer'
import Insights from '../../games/crabada/Insights/Insights'
import Footer from '../../components/Footer/Footer'

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div
        style={{
          width: '100%',
          height: '30px',
          backgroundColor: 'orange',
          textAlign: 'center',
          lineHeight: '30px',
          color: 'white',
          fontWeight: 'bold',
          zIndex: '5',
        }}
      >
        Website is undergoing some maintenance...
      </div>
      {/* <div style={{ position: "fixed", top: "0", zIndex: 30, width: "100%" }}> */}
      <NavbarContainer />
      <div className="dashboardBackgroundBlur" />

      <div className="dashboardTokenStats">
        <img src={P2EIcon} className="dashboardBackground" alt="-" />
        <div className="dashboardTokenStatsWrapper">
          <div>
            <img src={CrabadaLogo} className="dashboardLogo" alt="-" />
          </div>

          <div className="dashboardTokens">
            <div className="tokenCard">
              <img src={AVAX} className="dashboardIcon" alt="-" />
              <p className="dashboardStatsToken">AVAX</p>
              <strong>${props.tokenValues[0]}</strong>
            </div>
            <div className="tokenCard">
              <img src={CRA} className="dashboardIcon" alt="-" />
              <p className="dashboardStatsToken">CRA</p>
              <strong>${props.tokenValues[1]}</strong>
            </div>
            <div className="tokenCard">
              <img src={TUS} className="dashboardIcon" alt="-" />
              <p className="dashboardStatsToken">TUS</p>
              <strong>${props.tokenValues[2]}</strong>
            </div>
            <div className="tokenCard">
              <img src={CRAM} className="dashboardIcon" alt="-" />
              <p className="dashboardStatsToken">CRAM</p>
              <strong>${props.tokenValues[3]}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardNavbar">
        <div
          className={
            props.menu === 0 ? 'dashboardNavItem active' : 'dashboardNavItem'
          }
          onClick={() => {
            props.setMenu(0)
          }}
        >
          <img src={Economy} className="dashboardIcon" alt="" />
          <h2>ECONOMY</h2>
        </div>
        <div
          className={
            props.menu === 1 ? 'dashboardNavItem active' : 'dashboardNavItem'
          }
          onClick={() => {
            props.setMenu(1)
          }}
        >
          <img src={Population} className="dashboardIcon" alt="" />
          <h2>POPULATION</h2>
        </div>
        <div
          className={
            props.menu === 2 ? 'dashboardNavItem active' : 'dashboardNavItem'
          }
          onClick={() => {
            props.setMenu(2)
          }}
        >
          <img src={Test} className="dashboardIcon" alt="" />
          <h2>CRAB PRICES</h2>
        </div>
        <div
          className={
            props.menu === 3 ? 'dashboardNavItem active' : 'dashboardNavItem'
          }
          onClick={() => {
            props.setMenu(3)
          }}
        >
          <img src={InsightsLogo} className="dashboardIcon" alt="" />
          <h2>INSIGHTS</h2>
        </div>
      </div>
      {/* </div> */}
      <div
        style={{
          widht: '100%',
          height: '30px',
          backgroundColor: 'black',
          marginTop: '20px',
        }}
      />
      {props.menu === 0 ? <EconomyContainer /> : ''}
      {props.menu === 1 ? <PopulationContainer /> : ''}
      {props.menu === 2 ? <PricesContainer /> : ''}
      {props.menu === 3 ? <Insights /> : ''}
      <Footer />
    </div>
  )
}

export default Dashboard
