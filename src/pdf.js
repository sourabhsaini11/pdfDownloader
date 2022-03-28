import React from 'react';
import { Page, h6, div,Image,Font, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
   backgroundColor: '#E4E4E4'
  //  backgroundColor: "red"
  },
  section: {
    width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  border: '1px solid black',
  },
  outerDiv:{
    display: "flex",
    border: '1px solid black',
    flexDirection:'row',
    alignItems:'center',
     width:'100%',
     height:'auto',
    margin:0
  },
  innerDiv:{
    flex:1,
    borderRight:'1px solid black', 
    padding: '5px',display:'flex',
    alignItems:'flex-start',
    flexDirection:'column',
    height:'100%',
    // backgroundColor:'red',
    margin:0
  }
});

// Create Document Components
const MyDocument = () => (
    <div style={styles.section}>    
        <div style={{display: "flex",flexDirection:'row',alignItems:'center'}}>
            <div style={{border:'1px solid black',flex:1}}>
              <div style={{display:'flex',justifyContent:'flex-start'}}>INVOICE NO.</div>
              <div >1901</div>
          </div>
          <div style={{border:'1px solid black',flex:1}}>
              <div style={{display:'flex',justifyContent:'flex-start'}}>Date:</div>
              <div>26/02/2022</div>
          </div>
        </div>
        <div>
          <div style={{display:'flex',alignItems:'flex-start'}}>GST NO : 06AJDPR9851Q1ZA</div>
        </div>
        <div style={{
              display: "flex",
              border: '1px solid black',
              paddingTop: '5px', 
              paddingBottom: '5px', 
              flexDirection:'row',
              alignItems:'center',
              width:'100%',
              margin:0
              }}>
          <div style={{
                  flex:1,
                  borderRight:'1px solid black', 
                  padding: '5px',display:'flex',
                  alignItems:'flex-start',
                  flexDirection:'column',
                  margin:0
                  }}>
            <h6 style={{ margin: 0,color:'#669ffa'}}>POOJA APPLIANCES</h6>
            <h6 style={{ margin: 0}}>Distributor: Green Label LPG Stove, Padamshree, Suraksha Hose and Apron, Cylinder Trolly, Lighter</h6>
            <h6 style={{ margin: 0}}>SHOP NO.8, SECTOR-10A, HOUSING BOARD COLONY, GURUGRAM-122001  TEL: 9891430101, 9718160101</h6>
            <h6 style={{ margin: 0}}>E-mail : pooja_appliances@yahoo.com</h6>
          </div>
          <div style={{
                  flex:1,
                  borderRight:'1px solid black', 
                  padding: '5px',display:'flex',
                  alignItems:'flex-start',
                  flexDirection:'column',
                  margin:0
                  }}>
            <h6 style={{ margin: 0}}>INVOICE TO (DETAILS OF RECEIVER)</h6>
            <h6 style={{ margin: 0}}>Name : Sri Swastik Bharat Gas</h6>
            <h6 style={{ margin: 0}}>Address : Sohna Road, Near Aggarwal Tiles (Faridabad) </h6>
            <h6 style={{ margin: 0}}>GST No : 06AHAPA9890K1Z4</h6>
            <h6 style={{ margin: 0}}>State : HR</h6>
            <h6 style={{ margin: 0}}>State Code : 06</h6>
          </div>
          <div style={{
                  flex:1,
                  borderRight:'1px solid black', 
                  padding: '5px',display:'flex',
                  alignItems:'flex-start',
                  flexDirection:'column',
                  margin:0
                  }}>
            <h6 style={{ margin: 0}}>INVOICE TO (DETAILS OF DELIVER TO)</h6>
            <h6 style={{ margin: 0}}>Name : Sri Swastik Bharat Gas</h6>
            <h6 style={{ margin: 0}}>Address : Sohna Road, Near Aggarwal Tiles (Faridabad) </h6>
            <h6 style={{ margin: 0}}>GST No : 06AHAPA9890K1Z4</h6>
            <h6 style={{ margin: 0}}>State : HR</h6>
            <h6 style={{ margin: 0}}>State Code : 06</h6>
          </div>
        </div>
        <div style={{display: "flex",flexDirection:'row',alignItems:'center'}}>
          <div style={{flex:1,border:'1px solid black'}}>Place of Supply: Faridabad</div>
          <div style={{flex:1,border:'1px solid black'}}>Transportation Mode: Tempo</div>
          <div style={{flex:1,border:'1px solid black'}}>Vehicle No: NA</div>
          <div style={{flex:1,border:'1px solid black'}}>Reverse Changes: NA</div>
        </div>
        <div style={styles.outerDiv}>
          <div style={styles.innerDiv}>
                  S No.</div>
          <div style={styles.innerDiv}>
                  Description of Goods/Service</div>
          <div style={styles.innerDiv}>
                  HSN Code</div>
          <div style={styles.innerDiv}>
                  Qty.</div>
          <div style={styles.innerDiv}>
                  Unit</div>
          <div style={styles.innerDiv}>
                  Rate Per Item</div>
          <div style={styles.innerDiv}>
                  Total</div>
          <div style={styles.innerDiv}>
                  Dis.</div>
          <div style={styles.innerDiv}>
                  Taxable Value</div>
          <div style={styles.innerDiv}>
                  CGST</div>
          <div style={styles.innerDiv}>
                  SGST</div>
          <div style={styles.innerDiv}>
                  IGST</div>
          <div style={styles.innerDiv}>
                  Total</div>
        </div>
        <div style={{...styles.outerDiv}}>
          <div style={styles.innerDiv}>
            Bank Details: STATE BANK OF INDAI, Shivaji Nagar, Gurgaon
            Account No. 30987891002, IFS Code: SBIN000448
          </div>
          <div style={{...styles.innerDiv}}>TOTAL TAXABLE AMOUNT</div>
          <div style={styles.innerDiv}>2400</div>
        </div>
        <div style={{...styles.outerDiv,background:'green'}}>
          <div style={{...styles.innerDiv, height: '100%', border: '1 px solid black'}}><h6>Terms And Conditions:
              1. Payment by A/c Payee or crossed cheque is requested, if cheque is dishonoured then the penalty of Rs. 350/- will be charged extra.
              2. Seller is not responsible for any loss or damage of goods in transit.
              3. Buyer undertakes to submit prescribed sales tax declaration to the seller on demand.
              4. All disputes subject to Gurgaon Jurisdiction.</h6></div>
          <div style={{...styles.innerDiv, height: '100%', border: '1px solid black'}}>TOTAL GST</div>
          <div style={{ ...styles.innerDiv, height: '100%', border: '1px solid black'}}>40</div>
        </div>
        <div style={styles.outerDiv}>
          <div style={styles.innerDiv}></div>
          <div style={{...styles.innerDiv}}>FREIGHT, INSURANCE</div>
          <div style={styles.innerDiv}>0</div>
        </div>
        <div style={styles.outerDiv}>
          <div style={styles.innerDiv}></div>
          <div style={{...styles.innerDiv}}>PACKAGING AND FORWARDING</div>
          <div style={styles.innerDiv}>0</div>
        </div>
        <div style={styles.outerDiv}>
          <div style={styles.innerDiv}></div>
          <div style={{...styles.innerDiv}}>INVOICE TOTAL</div>
          <div style={styles.innerDiv}>23146</div>
        </div>
        <div style={styles.outerdiv}>
        <div style={styles.innerDiv}></div>
        <div style={styles.innerDiv}></div>
        <div style={styles.innerDiv}></div>
        </div>
      </div>
);

export default MyDocument;