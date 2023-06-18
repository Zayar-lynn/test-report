import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardBody, FormSelect, Row, Col } from "shards-react";
import { BASE_URL } from "../../constant/api";

const Recyclable = () => {
  const [chartSeries, setChartSeries] = useState([]);
  const chartOptions = {
    chart: {
      type: "bar",
      height: 400,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900
            }
          }
        }
      }
    },
    xaxis: {
      type: "",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },
    yaxis: {
      labels: {
        formatter: function(val) {
          return "$" + val + "M";
        }
      }
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  };

  useEffect(() => {
    const getList = async () => {
      await fetch(`${BASE_URL}/api/report/recyclable`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          setChartSeries(json);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getList();
  }, []);

  return (
    <Card small>
      {/* Card Header */}
      <CardHeader className="border-bottom">
        <Row>
          <Col>
            <h6 className="m-0">Recyclable vs Non-recyclable</h6>
          </Col>
          <Col className="text-right">
            <FormSelect
              size="sm"
              value="today"
              style={{ maxWidth: "130px" }}
              onChange={() => {}}
            >
              <option value="last-week">Last Week</option>
              <option value="today">Today</option>
              <option value="last-month">Last Month</option>
              <option value="last-year">Last Year</option>
            </FormSelect>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="d-flex flex-column">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      </CardBody>
    </Card>
  );
};

export default Recyclable;
