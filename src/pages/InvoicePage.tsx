import { useState } from "react";

import Layout from "../layout/index";
import LineInput from "../components/LineInput";
import BlueButton from "../components/BlueButton";
import PinkCheckBox from "../components/PinkCheckBox";
import IconButton from "../components/IconButton";
import StatusBadge from "../components/StatusBadge";

const InvoicePage = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const invoices = [
    {invoice:"Invoice1", customer:"customer1", issueDate:"2024/3/6", dueDate:"2004/2/8", type:"type1", status:"Paid"},
    {invoice:"Invoice2", customer:"customer2", issueDate:"2024/1/15", dueDate:"2004/7/7", type:"type2", status:"Open"},
    {invoice:"Invoice3", customer:"customer3", issueDate:"2024/6/3", dueDate:"2004/5/12", type:"type3", status:"Paid"}
  ]

  return (
    <Layout>
      <div className="w-full h-full pl-10 pr-10">
        <div className=" text-white text-lg flex flex-row w-full mt-10">
          <div
            className="mr-10 cursor-pointer p-3"
            style={{
              borderBottom: selectedButton === 0 ? "3px solid white" : "",
            }}
            onClick={() => {
              setSelectedButton(0);
            }}
          >
            <h3>Create New Invoice</h3>
          </div>
          <div
            className="cursor-pointer p-3"
            style={{
              borderBottom: selectedButton === 1 ? "3px solid white" : "",
            }}
            onClick={() => {
              setSelectedButton(1);
            }}
          >
            <h3>Invoice List</h3>
          </div>
        </div>
        {selectedButton === 0 ? (
          <div className=" w-full">
            <div
              className=" p-2 w-full p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex items-center flex-col"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className=" w-full flex flex-row items-center">
                <h2 className=" text-white mr-5">Select Type:</h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <select
                    name=""
                    id=""
                    className=" bg-block outline-none text-white border-none w-full"
                  >
                    <option value="invoice">Invoice</option>
                    <option value="quote">Quote</option>
                    <option value="receipt">Receipt</option>
                  </select>
                </div>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <select
                    name=""
                    id=""
                    className=" bg-block outline-none text-white border-none w-full"
                  >
                    <option value="open">Open</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </div>
              <div className=" w-full flex flex-row items-center mt-3">
                <h2 className="text-white mr-3">Invoice Date: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="date"
                  />
                </div>
                <h2 className="text-white mr-3">Due Date: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="date"
                  />
                </div>
                <h2 className="text-white mr-3">#MD: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="text"
                    placeholder="Invoice Number"
                  />
                </div>
              </div>
            </div>
            <h1 className=" text-white mt-5">Customer Information :</h1>
            <div
              className=" p-2 w-full p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex flex flex-wrap"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Enter Name"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"E-mail Address"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Address1"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Address2"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Town"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Country"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Postcode"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Phone Number"} />
              </div>
            </div>
            <h1 className=" text-white mt-5">Shipping Information :</h1>
            <div
              className=" p-2 w-full p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex flex flex-wrap"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Enter Name"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Address1"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Address2"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Town"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Country"} />
              </div>
              <div className="w-48 mt-5 mr-5">
                <LineInput type={"text"} placeholder={"Postcode"} />
              </div>
            </div>
            <h1 className=" text-white mt-5">Products :</h1>
            <div
              className=" p-2 w-full p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex flex flex-wrap"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div
                className=" w-full flex flex-row items-center pb-5"
                style={{ borderBottom: "1px solid #30374d" }}
              >
                <h2 className="text-white mr-3">Product Name: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="text"
                    placeholder="Product Name"
                  />
                </div>
                <h2 className="text-white mr-3">Qty: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="Number"
                    placeholder="5"
                  />
                </div>
                <h2 className="text-white mr-3">Price(Ksh): </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="Number"
                    placeholder="34"
                  />
                </div>
                <h2 className="text-white mr-3">Discount: </h2>
                <div
                  className=" w-2/7 p-3 rounded-md mr-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <input
                    className=" bg-block outline-none text-white border-none w-full"
                    type="Number"
                    placeholder="3.5"
                  />
                </div>
                <div className="w-16">
                  <BlueButton text={"Add"} onClickHandler={() => {}} />
                </div>
              </div>
            </div>
            <h1 className=" text-white mt-5">Additions :</h1>
            <div className=" flex flex-row w-full">
              <div
                className=" p-2 w-full mr-1 p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex flex flex-wrap"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div
                  className=" w-full p-3 rounded-md"
                  style={{ border: "1px solid #30374d" }}
                >
                  <textarea
                    className=" bg-block outline-none text-white border-none w-full"
                    placeholder="Additional Notes..."
                    rows={4}
                  />
                </div>
                <div
                  className=" w-full p-3 rounded-md mt-5"
                  style={{ border: "1px solid #30374d" }}
                >
                  <textarea
                    className=" bg-block outline-none text-white border-none w-full"
                    placeholder="Enter custom email if you wish to override the default invoice type email msg!"
                    rows={4}
                  />
                </div>
              </div>
              <div
                className=" p-2 w-full p-5 mt-5 pb-7 w-96 bg-block rounded-lg flex flex-row relative"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className=" w-1/3 hidden md:block "></div>
                <div className=" flex flex-col w-1/2 md:w-1/3">
                  <span className="text-placeholder mb-5">
                    Sub Total(Ksh) : 0.00
                  </span>
                  <span className="text-placeholder mb-5">
                    Discount(Ksh) : 0.00
                  </span>
                  <span className="text-placeholder mb-5">
                    TAX/VAT(Ksh) : 0.00
                  </span>
                  <span className="text-placeholder mb-5">
                    Total(Ksh) : 0.00
                  </span>
                </div>
                <div className=" w-1/2 md:w-1/3">
                  <div className=" w-full mb-10 mt-5">
                    <PinkCheckBox text={"Remove TAX/VAT "} />
                  </div>
                  <div className="w-full flex flex-row items-center mb-5">
                    <h1 className="text-placeholder mr-2">Shipping: </h1>
                    <div className="w-1/3">
                      <LineInput placeholder={"0.0"} type={"number"} />
                    </div>
                  </div>
                  <div className="w-1/3 absolute bottom-5 right-5">
                    <BlueButton
                      text={"Create invoice"}
                      onClickHandler={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" mt-10">
            <table id="customers">
              <tr>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=4260&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Invoice</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=14736&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Customer</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=10053&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Issue Date</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=10053&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Due Date</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=bkvFLltNGV8a&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Type</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=Zasu6I3taNyM&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Status</span>
                    </div>
                </th>
                <th>
                    <div className="flex flex-row justify-center">
                        <img src="https://img.icons8.com/?size=100&id=24551&format=png&color=aeb9e1" className=" size-5 mr-2" alt="" />
                        <span>Actions</span>
                    </div>
                </th>
              </tr>
              {
                invoices.map((invoice)=><tr>
                    <td>{invoice.invoice}</td>
                    <td>{invoice.customer}</td>
                    <td>{invoice.issueDate}</td>
                    <td>{invoice.dueDate}</td>
                    <td>{invoice.type}</td>
                    <td><StatusBadge status={invoice.status} /></td>
                    <td className=" flex flex-row justify-around">
                        <IconButton type={"edit"} onClickHandler={()=>{}} />
                        <IconButton type={"download"} onClickHandler={()=>{}} />
                        <IconButton type={"delete"} onClickHandler={()=>{}} />
                    </td>
                </tr>
                )
              }
            </table>
            <div className=" w-full flex mt-5">
              <div className=" flex-grow">&nbsp;</div>
              <div className=" flex flex-row">
                <div className=" w-12">
                <IconButton type={"prev"} onClickHandler={()=>{}}/>
                </div>
                <span className=" text-placeholder ml-3 mr-3">1</span>
                <div className=" w-12">
                <IconButton type={"next"} onClickHandler={()=>{}}/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default InvoicePage;
