import React from "react";
import "./Population.css";
import {
  AreaGraph,
  MarimekkoGraph,
  PieGraph,
} from "../../../components/Graphs";
import Legend from "../../../components/Legend/Legend";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const crabPoplegends = [
  {
    name: "Surge",
    color: "#FC252B",
  },
  {
    name: "Sunken",
    color: "#108C8C",
  },
  {
    name: "Prime",
    color: "#C9B22E",
  },
  {
    name: "Bulk",
    color: "#793024",
  },
  {
    name: "Craboid",
    color: "#0068EC",
  },
  {
    name: "Ruined",
    color: "#533FB4",
  },
  {
    name: "Gem",
    color: "#EC2C9E",
  },
  {
    name: "Organic",
    color: "#34A527",
  },
];

const eggPoplegends = [
  {
    name: "Pure",
    color: "#1370F6",
  },
  {
    name: "Non-Pure",
    color: "#FFFFFF",
  },
];
function Population(props) {
  return (
    <div className="populationDashboard">
      <div className="populationRow">
        <div className="populationRowItem">
          <h3>TOTAL CRAB POPULATION</h3>
          <div className="populationPie">
            <PieGraph
              data={props.crabPieData}
              colors={[
                "#FC252B",
                "#108C8C",
                "#C9B22E",
                "#793024",
                "#0068EC",
                "#533FB4",
                "#EC2C9E",
                "#34A527",
              ]}
              total={props.totalCrabs}
            />
          </div>
        </div>
        <div className="populationRowItem">
          <h3>CRABADA TRENDS</h3>
          <Legend legends={crabPoplegends} />
          <div className="populationGraph">
            <AreaGraph
              data={props.crabPopulationData}
              colors={[
                "#FC252B",
                "#108C8C",
                "#C9B22E",
                "#793024",
                "#0068EC",
                "#533FB4",
                "#EC2C9E",
                "#34A527",
              ]}
              minMax={[0, "auto"]}
              tooltipFunction={(e) => {
                return (
                  <div
                    style={{
                      padding: "10px",
                      width: "200px",
                      height: "50px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(0,0,0,0.75)",
                      border: "1px solid #fff",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ color: "white", alignSelf: "center" }}>
                      <strong>- {e.point.data.x} -</strong>
                    </div>
                    <div style={{ color: "white" }}>
                      Value:{" "}
                      <strong style={{ color: e.point.borderColor }}>
                        {numberWithCommas(e.point.data.y)}
                      </strong>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="populationRow">
        <div className="populationRowItem">
          <h3>PURE VS NON-PURE</h3>

          <div className="populationPie">
            <PieGraph
              data={props.eggPieData}
              colors={["#1370F6", "#FFFFFF"]}
              total={props.totalCrabs}
            />
          </div>
        </div>
        <div className="populationRowItem">
          <h3>CRABADA TRENDS</h3>
          <Legend legends={eggPoplegends} />
          <div className="populationGraph">
            <AreaGraph
              data={props.eggPopulationData}
              colors={["#1370F6", "#FFFFFF"]}
              minMax={[0, "auto"]}
              tooltipFunction={(e) => {
                return (
                  <div
                    style={{
                      padding: "10px",
                      width: "200px",
                      height: "50px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(0,0,0,0.75)",
                      border: "1px solid #fff",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ color: "white", alignSelf: "center" }}>
                      <strong>- {e.point.data.x} -</strong>
                    </div>
                    <div style={{ color: "white" }}>
                      Value:{" "}
                      <strong style={{ color: e.point.borderColor }}>
                        {numberWithCommas(e.point.data.y)}
                      </strong>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="hatchingSchedule">
        <h3>Hatching Schedule (next 5 days)</h3>
        <MarimekkoGraph
          data={props.eggHatchPopulationData}
          totalHatching={props.totalHatching}
        />
      </div>
    </div>
  );
}

export default Population;
