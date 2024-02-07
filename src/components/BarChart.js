import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function BarCharts() {
  const data = require("../data/data.json");

  const [dataCrypto, setDataCrypto] = useState(data.cryptocurrencies);
  const [alignment, setAlignment] = React.useState("0");
  const [index, setIndex] = useState(0);

  const handleChange = (_, newAlignment) => {
    setAlignment(newAlignment);
    setIndex(+newAlignment);
  };

  return (
    <div className="block-chart">
      <div className="toggle-button-group">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="0">{dataCrypto[0].symbol}</ToggleButton>
          <ToggleButton value="1">{dataCrypto[1].symbol}</ToggleButton>
          <ToggleButton value="2">{dataCrypto[2].symbol}</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <h2 style={{ textAlign: "center" }}>{dataCrypto[index].name}</h2>
      <div className="barChart-container">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: Object.keys(dataCrypto[index].average_prices),
            },
          ]}
          series={[{ data: Object.values(dataCrypto[index].average_prices) }]}
          width={700}
          height={400}
        />
      </div>
    </div>
  );
}

export default BarCharts;
