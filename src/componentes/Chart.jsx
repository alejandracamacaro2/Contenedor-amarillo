import React from "react";
import "./Chart.css";
import Parrafo from './Parrafo'

function Chart({imagen="Chart"}) {
    return (
        <div className="contenedor-imagen4"  style={{ position: "absolute", top: 78, right: 0, textAlign: "right" }}>
          <img src={imagen} className="foto-img rounded float-end" />
          <div>
            <Parrafo />
           
          </div>
        </div>
      );
    }
  

export default Chart;
