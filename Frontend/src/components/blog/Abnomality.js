import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  Row,
  Col,
  Badge
} from "shards-react";

// url
import { BASE_URL } from "../../constant/api";

const Abnomality = () => {
  const [abnomality, setAbnomality] = useState([]);

  useEffect(() => {
    const getList = async () => {
      await fetch(`${BASE_URL}/api/report/abnomality`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          // console.log(json);
          setAbnomality(json);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getList();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    return formattedDate;
  };

  return (
    <Card small>
      {/* Card Header */}
      <CardHeader className="border-bottom">
        <Row>
          <Col>
            <h6 className="m-0">ABNOMALITIES</h6>
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
        {abnomality.map((item, index) => (
          <Row key={index}>
            <Col>
              <p style={{ width: 250 }}>
                <span style={{ color: "red" }}>Laptop Charger </span>
                {item.title}
              </p>
            </Col>
            <Col>
              <Badge style={{ backgroundColor: "green" }}>{item.status}</Badge>
            </Col>
            <Col>
              <p>{formatDate(item.date)}</p>
            </Col>
            <Col>
              <Badge style={{ backgroundColor: item.alert == "Plug open" ? "green" : "red" }}>{item.alert}</Badge>
            </Col>
          </Row>
        ))}
      </CardBody>
    </Card>
  );
};

export default Abnomality;
