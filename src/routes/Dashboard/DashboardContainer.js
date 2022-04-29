import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";

const fetchData = async (callback) => {
  try {
    let response = await axios.get(
      "https://api.crabada.com/public/price/using"
    );
    callback(null, response.data.result);
  } catch (e) {
    callback(e);
  }
};
function DashboardContainer() {
  const [menu, setMenu] = useState(0);
  const [tokenValues, setTokenValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    fetchData((err, res) => {
      if (!err) {
        setTokenValues([
          parseFloat(res.avax_usd).toFixed(4),
          parseFloat(res.cra_usd).toFixed(4),
          parseFloat(res.tus_usd).toFixed(4),
          parseFloat(res.cram_usd).toFixed(4),
        ]);
      }
    });
  }, []);

  return <Dashboard menu={menu} setMenu={setMenu} tokenValues={tokenValues} />;
}

export default DashboardContainer;
