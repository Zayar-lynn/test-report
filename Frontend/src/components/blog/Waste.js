import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardBody, FormSelect, Row, Col } from "shards-react";

const Waste = () => {
  return (
    <Card small>
      <CardBody className="d-flex flex-column" style={{height: "460px"}}>
        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
          Waste Collections
        </p>
        <table
          style={{
            alignSelf: "center",
            borderTop: "3px solid skyblue",
            width: "300px"
          }}
        >
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              36.5
            </td>
          </tr>
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              45.5
            </td>
          </tr>
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              18.8
            </td>
          </tr>
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              55.6
            </td>
          </tr>
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              44.0
            </td>
          </tr>
          <tr>
            <td
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              77.1
            </td>
          </tr>
        </table>
        <p style={{ textAlign: "center", marginTop: 30 }}>Current months vs</p>
        <p style={{ textAlign: "center" }}>last 3 months averages</p>
        <Row>
          <Col>
            <p style={{ fontWeight: "bold", textAlign: "right" }}>21.0</p>
          </Col>
          <Col>
            <p
              style={{ fontWeight: "bold", textAlign: "left", color: "red" }}
            >
              30.65%
            </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Waste;
