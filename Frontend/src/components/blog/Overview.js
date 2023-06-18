import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, CardBody } from "shards-react";

// url
import { BASE_URL } from "../../../src/constant/api";

const Overview = () => {
  const [chartSeries, setChartSeries] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const getList = async () => {
      await fetch(`${BASE_URL}/api/report/overview`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          setChartSeries([
            {
              name: "Energy Maker (Kwh)",
              data: json
            }
          ]);
          setChartOptions({
            chart: {
              height: 350,
              type: "bar"
            },
            plotOptions: {
              bar: {
                columnWidth: "60%"
              }
            },
            colors: ["#00E396"],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ["Energy Maker (Kwh)", "Average"],
              markers: {
                fillColors: ["#00E396", "#775DD0"]
              }
            }
          });
        })
        .catch(error => {
          console.error(error);
        });
    };
    getList();
  }, []);

  return (
    <Card small>
      <CardBody className="d-flex py-0">
        {chartSeries.length > 0 ?  (
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={400}
            style={{ width: "100%", padding: 20 }}
          />
        ) : (
          <Chart
            options={{}}
            series={[]}
            type="bar"
            height={400}
            style={{ width: "100%", padding: 20 }}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default Overview;
