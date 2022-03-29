import React from "react";
import {
  Page,
  h6,
  div,
  Image,
  Font,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Order from "./order";
// Create styles

const data = [
  {
    serial: 1,
    description: "L.P.G GAS STOVE 4 BURNER SURAKSHA HOSE",
    hsn: 4616826,
    qty: 12,
    unit: "PC",
    rate: 100,
    total: 1200,
    dis: 0,
    totalValue: 1200,
    cgst: {
      rate: "9%",
      amt: 10,
    },
    sgst: {
      rate: "9%",
      amt: 10,
    },
    igst: {
      rate: 0,
      amt: 0,
    },
    total: 1200,
  },
  {
    serial: 2,
    description: "L.P.G GAS STOVE 4 BURNER SURAKSHA HOSE",
    hsn: 4616826,
    qty: 12,
    unit: "PC",
    rate: 100,
    total: 1200,
    dis: 0,
    totalValue: 1200,
    cgst: {
      rate: "9%",
      amt: 10,
    },
    sgst: {
      rate: "9%",
      amt: 10,
    },
    igst: {
      rate: 0,
      amt: 0,
    },
    total: 1200,
  },
];

const styles = StyleSheet.create({
  section: {
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderBottom: "0px solid black",
  },
  outerDiv: {
    display: "flex",
    border: "1px solid black",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    //  height:'110px',
    margin: 0,
  },
  innerDiv: {
    flex: 1,
    border: "1px solid black",
    // padding: '5px',
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    // backgroundColor:'red',
    margin: 0,
  },
});

// Create Document Components
const MyDocument = () => (
  <div style={styles.section}>
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          INVOICE NO.
        </div>
        <div>1901</div>
      </div>
      <div style={styles.innerDiv}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          Date :
        </div>
        <div>26/02/2022</div>
      </div>
    </div>
    <div style={{ ...styles.outerDiv, borderBottom: "1px solid black" }}>
      <div
        style={{
          ...styles.innerDiv,
          border: "10px 0px solid red !important",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <strong>GST NO</strong> : 06AJDPR9851Q1ZA
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "120px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h2 style={{ margin: 0, color: "#669ffa" }}>
          <strong>POOJA APPLIANCES</strong>
        </h2>
        <br />
        <h6 style={{ margin: 0 }}>
          Distributor: Green Label LPG Stove, Padamshree, Suraksha Hose and
          Apron, Cylinder Trolly, Lighter
        </h6>
        <h6 style={{ margin: 0 }}>
          SHOP NO.8, SECTOR-10A, HOUSING BOARD COLONY, GURUGRAM-122001 TEL:
          9891430101, 9718160101
        </h6>
        <h6 style={{ margin: 0 }}>E-mail : pooja_appliances@yahoo.com</h6>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h6 style={{ margin: 0 }}>INVOICE TO (DETAILS OF RECEIVER)</h6>
        <h6 style={{ margin: 0 }}>Name : Sri Swastik Bharat Gas</h6>
        <h6 style={{ margin: 0 }}>
          Address : Sohna Road, Near Aggarwal Tiles (Faridabad){" "}
        </h6>
        <h6 style={{ margin: 0 }}>GST No : 06AHAPA9890K1Z4</h6>
        <h6 style={{ margin: 0 }}>State : HR</h6>
        <h6 style={{ margin: 0 }}>State Code : 06</h6>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h6 style={{ margin: 0 }}>INVOICE TO (DETAILS OF DELIVER TO)</h6>
        <h6 style={{ margin: 0 }}>Name : Sri Swastik Bharat Gas</h6>
        <h6 style={{ margin: 0 }}>
          Address : Sohna Road, Near Aggarwal Tiles (Faridabad){" "}
        </h6>
        <h6 style={{ margin: 0 }}>GST No : 06AHAPA9890K1Z4</h6>
        <h6 style={{ margin: 0 }}>State : HR</h6>
        <h6 style={{ margin: 0 }}>State Code : 06</h6>
      </div>
    </div>
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Place of Supply: Faridabad
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Transportation Mode: Tempo
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Vehicle No: NA
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Reverse Changes: NA
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "45px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        S No.
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Description of Goods/Service
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        HSN Code
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Qty.
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Unit
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Rate Per Item
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Total
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Dis.
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Taxable Value
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        CGST
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        SGST
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        IGST
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Total
      </div>
    </div>
    <Order data={data} />
    <div style={{ ...styles.outerDiv, height: "40px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Bank Details: STATE BANK OF INDAI, Shivaji Nagar, Gurgaon Account No.
        30987891002, IFS Code: SBIN000448
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 5,
        }}
      >
        TOTAL TAXABLE AMOUNT
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 5,
        }}
      >
        2400
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "110px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h6>
          Terms And Conditions: 1. Payment by A/c Payee or crossed cheque is
          requested, if cheque is dishonoured then the penalty of Rs. 350/- will
          be charged extra. 2. Seller is not responsible for any loss or damage
          of goods in transit. 3. Buyer undertakes to submit prescribed sales
          tax declaration to the seller on demand. 4. All disputes subject to
          Gurgaon Jurisdiction.
        </h6>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 5,
        }}
      >
        TOTAL GST
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        40
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "30px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
        }}
      >
        <p></p>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 5,
        }}
      >
        FREIGHT, INSURANCE
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 5,
        }}
      >
        0
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "30px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
        }}
      >
        <p></p>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 5,
        }}
      >
        PACKAGING AND FORWARDING
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 5,
        }}
      >
        0
      </div>
    </div>
    <div style={{ ...styles.outerDiv, height: "30px" }}>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
        }}
      >
        <p></p>
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 5,
        }}
      >
        INVOICE TOTAL
      </div>
      <div
        style={{
          ...styles.innerDiv,
          height: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 5,
        }}
      >
        23146
      </div>
    </div>
  </div>
);

export default MyDocument;
