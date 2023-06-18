import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardBody } from "shards-react";
import { BASE_URL } from "../../constant/api";

const Discussions = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    const getList = async () => {
      await fetch(`${BASE_URL}/api/report/waterlevel`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          // console.log(json);
          setChartOptions({
            chart: {
              height: 350,
              type: "bar"
            },
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: "50%"
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 2
            },
            grid: {
              row: {
                colors: ["#fff", "#f2f2f2"]
              }
            },
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: [
                json[0].time,
                json[1].time,
                json[2].time,
                json[3].time,
                json[4].time,
                json[5].time,
                json[6].time,
                json[7].time,
                json[8].time,
                json[9].time,
                json[10].time,
                json[11].time,
                json[12].time,
                json[13].time,
                json[14].time,
                json[15].time,
                json[16].time,
                json[17].time,
                json[18].time,
                json[19].time,
                json[20].time,
                json[21].time,
                json[22].time,
                json[23].time
              ],
              tickPlacement: "on"
            },
            yaxis: {
              title: {
                text: ""
              }
            },
            fill: {
              type: "fill"
            }
          });
          setChartSeries([
            {
              name: "Level",
              data: [
                json[0].value,
                json[1].value,
                json[2].value,
                json[3].value,
                json[4].value,
                json[5].value,
                json[6].value,
                json[7].value,
                json[8].value,
                json[9].value,
                json[10].value,
                json[11].value,
                json[12].value,
                json[13].value,
                json[14].value,
                json[15].value,
                json[16].value,
                json[17].value,
                json[18].value,
                json[19].value,
                json[20].value,
                json[21].value,
                json[22].value,
                json[23].value
              ]
            }
          ]);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getList();
  }, []);

  return (
    <Card small className="blog-comments">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Water Level (Water Detention Tank)</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={400}
        />
      </CardBody>
    </Card>
  );
};

export default Discussions;
