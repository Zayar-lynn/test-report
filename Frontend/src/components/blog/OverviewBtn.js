import React from "react";
import { Card, CardBody, Button } from "shards-react";
import statistic_img from "../../assets/images/statistic.png";

// pdf
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const OverviewBtn = ({ chart_id }) => {

  const saveAsPDF = () => {
    const screenElement = document.getElementById(chart_id);

    const scale = 2;
    const width = screenElement.offsetWidth;
    const height = screenElement.offsetHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext("2d");
    context.scale(scale, scale);
    context.fillStyle = "transparent";
    context.fillRect(0, 0, canvas.width, canvas.height);

    html2canvas(screenElement, { canvas: canvas }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [width, height]);
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("report.pdf");
    });
  };

  return (
    <Card small className="h-100">
      <CardBody>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={statistic_img}
            alt="Image Title"
            width="100"
            style={{ alignSelf: "center", marginBottom: 20, marginTop: 70 }}
          />
          <Button
            theme="accent"
            type="submit"
            style={{
              marginBottom: 10,
              width: 150,
              borderRadius: 30,
              alignSelf: "center"
            }}
          >
            Overview
          </Button>
          <Button
            theme="accent"
            type="submit"
            style={{
              width: 150,
              borderRadius: 30,
              backgroundColor: "transparent",
              color: "#000000",
              alignSelf: "center"
            }}
            onClick={saveAsPDF}
          >
            ESG Readings
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default OverviewBtn;
