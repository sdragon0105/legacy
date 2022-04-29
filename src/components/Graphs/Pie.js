import React from "react";
import { ResponsivePie } from "@nivo/pie";

function Pie({ data, colors, total }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 100 }}
      sortByValue={true}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={colors}
      enableArcLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#ffffff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      tooltip={(e) => {
        return (
          <div
            style={{
              padding: "10px",
              width: "120px",
              height: "50px",
              borderRadius: "10px",
              backgroundColor: "rgba(0,0,0,0.75)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white" }}>
              Count:<strong> {e.datum.value}</strong>
            </div>
            <div style={{ color: "white" }}>
              Ratio:{" "}
              <strong>{(100 * (e.datum.value / total)).toFixed(2)}%</strong>
            </div>
          </div>
        );
      }}
    />
  );
}

export default Pie;
