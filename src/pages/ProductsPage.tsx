

import Layout from "../layout/index";
import BlueButton from "../components/BlueButton";
import IconButton from "../components/IconButton";

const ProductPage = () => {
  const products = [
    {
      name: "product1",
      description: "This is product1 description",
      price:100
    },{
        name: "product2",
        description: "This is product2 description",
        price:200
    },{
        name: "product3",
        description: "This is product3 description",
        price:300
      }
  ];

  return (
    <Layout>
      <div className="w-full h-full pl-10 pr-10 pt-10">
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
            <h2 className="text-white mr-3">Description: </h2>
            <div
              className=" w-4/6 p-3 rounded-md mr-5"
              style={{ border: "1px solid #30374d" }}
            >
              <input
                className=" bg-block outline-none text-white border-none w-full"
                type="text"
                placeholder="Description..."
              />
            </div>
            <h2 className="text-white mr-3">Price(Ksh): </h2>
            <div
              className=" w-1/7 p-3 rounded-md mr-5"
              style={{ border: "1px solid #30374d" }}
            >
              <input
                className=" bg-block outline-none text-white border-none w-full"
                type="Number"
                placeholder="34"
              />
            </div>
            <div className="w-16">
              <BlueButton text={"Add"} onClickHandler={() => {}} />
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <table id="customers">
            <tr>
              <th>
                <div className="flex flex-row">
                  <img
                    src="https://img.icons8.com/?size=100&id=12428&format=png&color=aeb9e1"
                    className=" size-5 mr-2"
                    alt=""
                  />
                  <span>Product</span>
                </div>
              </th>
              <th>
                <div className="flex flex-row">
                  <img
                    src="https://img.icons8.com/?size=100&id=57486&format=png&color=aeb9e1"
                    className=" size-5 mr-2"
                    alt=""
                  />
                  <span>Description</span>
                </div>
              </th>
              <th>
                <div className="flex flex-row">
                  <img
                    src="https://img.icons8.com/?size=100&id=8412&format=png&color=aeb9e1"
                    className=" size-5 mr-2"
                    alt=""
                  />
                  <span>Price</span>
                </div>
              </th>
              <th className=" w-36">
                <div className="flex flex-row justify-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=24551&format=png&color=aeb9e1"
                    className=" size-5 mr-2"
                    alt=""
                  />
                  <span>Actions</span>
                </div>
              </th>
            </tr>
            {
                    products.map((product)=><tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td className=" flex flex-row justify-center w-36">
                            <IconButton type={"edit"} onClickHandler={()=>{}} />
                            <IconButton type={"delete"} onClickHandler={()=>{}} />
                        </td>
                    </tr>
                    )
                }
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
