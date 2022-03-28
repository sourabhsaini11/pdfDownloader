import ReactPDF from '@react-pdf/renderer';
import MyDocument from "./pdf";
import "./App.css";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";


const App = () => {
  return (
    <div className="App">
        <PDFDownloadLink document={<MyDocument />} fileName="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      <MyDocument />
    </div>
  );
      }

export default App;
