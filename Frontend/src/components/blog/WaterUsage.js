import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";

const WaterUsage = () => {
  const [chartOptions] = useState({
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "0%"
        }
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        },
        dataLabels: {
          name: {
            color: "#777" // Specify the color for the label names
          },
          value: {
            color: "#000000" // Specify the color for the label values
          },
          total: {
            color: "blue" // Specify the color for the total label
          }
        }
      }
    },
    labels: ["Level"]
  });

  const [chartSeries] = useState([0]);

  return (
    <Card small className="blog-comments">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Water Usage</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          height={300}
        />
      </CardBody>
      <CardFooter>
        <p style={{ textAlign: "center" }}>Current water level is 0m</p>
        <p>17/06/2023 09:04</p>
      </CardFooter>
    </Card>
  );
};

export default WaterUsage;
