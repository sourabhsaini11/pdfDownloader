import React from "react";

const Order = ({ data }) => {
  console.log(data);
  const style = {
    outerDiv: {
      display: "flex",
      border: "1px solid black",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      height: "150px",
      margin: 0,
    },
    innerDiv: {
      flex: 1,
      borderRight: "1px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      margin: 0,
    },
  };
  return (
    <div>
      {data.map((d) => {
        return (
          <div style={style.outerDiv}>
            <div style={style.innerDiv}>{d.serial}</div>
            <div style={style.innerDiv}>{d.description}</div>
            <div style={style.innerDiv}>{d.hsn}</div>
            <div style={style.innerDiv}>{d.qty}</div>
            <div style={style.innerDiv}>{d.unit}</div>
            <div style={style.innerDiv}>{d.rate}</div>
            <div style={style.innerDiv}>{d.total}</div>
            <div style={style.innerDiv}>{d.dis}</div>
            <div style={style.innerDiv}>{d.totalValue}</div>
            <div style={style.innerDiv}>{d.cgst.rate}</div>
            <div style={style.innerDiv}>{d.cgst.amt}</div>
            <div style={style.innerDiv}>{d.sgst.rate}</div>
            <div style={style.innerDiv}>{d.sgst.amt}</div>
            <div style={style.innerDiv}>{d.igst.rate}</div>
            <div style={style.innerDiv}>{d.igst.amt}</div>
            <div style={style.innerDiv}>{d.total}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
