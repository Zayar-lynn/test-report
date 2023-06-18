import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Overview from "../components/blog/Overview";
import OverviewBtn from "../components/blog/OverviewBtn";
import Consumption from "../components/blog/Consumption";
import Footprint from "../components/blog/Footpring";
import WaterLevel from "../components/blog/WaterLevel";
import WaterUsage from "../components/blog/WaterUsage";
import Recyclable from "../components/blog/Recyclable";
import Waste from "../components/blog/Waste";
import Abnomality from "../components/blog/Abnomality";

const Dashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    <Row id="all_chart">
      {/* OverviewBtn */}
      <Col lg="3" md="12" sm="12" className="mb-4">
        <OverviewBtn chart_id="all_chart" />
      </Col>

      {/* Overview */}
      <Col lg="9" md="12" sm="12" className="mb-4">
        <Overview />
      </Col>

      {/* Consumption */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <Consumption />
      </Col>
      
      {/* Abnomality */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <Abnomality />
      </Col>

      {/* Footprint */}
      {/* <Col lg="6" md="6" sm="12" className="mb-4">
        <Footprint />
      </Col> */}

      {/* WaterLevel */}
      <Col lg="9" md="12" sm="12" className="mb-4">
        <WaterLevel />
      </Col>

      {/* Top WaterUsage */}
      <Col lg="3" md="12" sm="12" className="mb-4">
        <WaterUsage />
      </Col>

      {/* Top Recyclable */}
      <Col lg="6" md="12" sm="12" className="mb-4">
        <Recyclable />
      </Col>

      {/* Waste */}
      <Col lg="6" md="12" sm="12" className="mb-4">
        <Waste />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
