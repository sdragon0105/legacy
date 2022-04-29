import React, { memo } from "react";
import { ResponsiveMarimekko } from "@nivo/marimekko";

const Marimekko = ({ data, totalHatching /* see data tab */ }) => (
  <ResponsiveMarimekko
    data={data}
    id="date"
    value="number"
    dimensions={[
      {
        id: "Surge",
        value: "surge",
      },
      {
        id: "Sunken",
        value: "sunken",
      },
      {
        id: "Prime",
        value: "prime",
      },
      {
        id: "Bulk",
        value: "bulk",
      },
      {
        id: "Craboid",
        value: "craboid",
      },
      {
        id: "Ruined",
        value: "ruined",
      },
      {
        id: "Gem",
        value: "gem",
      },
      {
        id: "Organic",
        value: "organic",
      },
      {
        id: "Non-Pure",
        value: "nonPure",
      },
    ]}
    innerPadding={9}
    enableGridX={false}
    enableGridY={false}
    axisTop={null}
    colors={[
      "#FC252B",
      "#108C8C",
      "#C9B22E",
      "#793024",
      "#0068EC",
      "#533FB4",
      "#EC2C9E",
      "#34A527",
      "#FFFFFF",
    ]}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Count",
      legendOffset: -50,
      legendPosition: "middle",
    }}
    axisBottom={null}
    margin={{ top: 40, right: 80, bottom: 100, left: 40 }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    theme={{
      axis: {
        ticks: {
          text: {
            fill: "var(--text-color)",
          },
        },
        legend: {
          text: {
            fill: "var(--text-color)",
            color: "#ffffff",
          },
        },
      },

      crosshair: {
        line: {
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeOpacity: 1,
        },
      },
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 80,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#ffffff",
        itemDirection: "right-to-left",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "square",
      },
    ]}
    tooltip={(e, index) => {
      return (
        <div
          style={{
            padding: "10px",
            width: "200px",
            height: "110px",
            borderRadius: "10px",
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "white", alignSelf: "center" }}>
            <strong>- {e.bar.datum.id} -</strong>
          </div>
          <div style={{ color: "white" }}>
            Class: <strong> {e.bar.id}</strong>
          </div>
          <div style={{ color: "white" }}>
            Count: <strong> {e.bar.value}</strong>
          </div>
          <div style={{ color: "white" }}>
            Ratio:{" "}
            <strong>
              {" "}
              {((100 * e.bar.value) / totalHatching[e.bar.datum.index]).toFixed(
                2
              )}
              %
            </strong>
          </div>
        </div>
      );
    }}
  />
);

export default memo(Marimekko);
