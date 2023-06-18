import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, FormSelect, Row, Col } from "shards-react";
import plug_img from "../../assets/images/electric-plug.png";

const Consumption = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <Row>
        <Col>
          <h6 className="m-0">ELECTRICITY CONSUMPTION</h6>
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
      <img
        src={plug_img}
        alt="Image Title"
        width="100"
        style={{ alignSelf: "center", marginBottom: 20, marginTop: 30 }}
      />
      <h3
        style={{
          alignSelf: "center",
          fontWeight: "bold",
          color: "skyblue",
          marginBottom: 30
        }}
      >
        1.007 kWh
      </h3>
    </CardBody>
  </Card>
);

export default Consumption;
