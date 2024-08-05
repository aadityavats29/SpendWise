import {useEffect, useState} from "react";
import './LandingPage.css'
import img1 from './assets/img.png'
import img2 from './assets/img_1.png'



function LandingPage({changePage}) {
    return(
        <>
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="navbar-brand newsreader">
                        SpendWise
                    </h1>
                    <button className = "login-button" onClick = {()=>changePage(2)}>
                        Login
                    </button>
                </nav>
            </section>

            <section className="body">
                <h1 className={'newsreader'}>“Do not save what is left after spending, but spend what is left after saving”. – Warren Buffett</h1>
                <button className = "start-button"  onClick = {()=>changePage(2.5)}>
                    Start Wise
                </button>
            </section>
        </>
    );
}

function Login({changePage}) {
    return(
        <>
            <div className="login-container">
                <h1 className={'newsreader'}>Login</h1>
                <ul>
                    <li>
                        <h2>Username</h2>
                        <input type="text" placeholder="Username"/>
                    </li>

                    <li>
                        <h2>Password</h2>
                        <input type="password" placeholder="Password"/>
                    </li>

                    <li className="forgot-password">
                        Forgot Password ?
                    </li>

                    <li  className = 'logged-in'>
                        <button onClick = {()=>changePage(3)}>
                            Login
                        </button>
                    </li>

                    <li className="no-account">
                        Don't have an account?<br/>
                        <button onClick={()=>changePage(2.5)}>Sign Up</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

function SignUp({changePage}) {
    return(
        <>
            <h3 className={'go-to-login'} >
                Already Have an Account ?   <button onClick={()=>changePage(2)}>Log in</button>
            </h3>
            <div className="login-container">
                <h1 className={'newsreader'}>Sign Up</h1>
                <ul>
                    <li>
                        <h2>Your Name</h2>
                        <input type="text" placeholder="name"/>
                    </li>

                    <li>
                        <h2>Email</h2>
                        <input type="email" placeholder="email"/>
                    </li>

                    <li>
                        <h2>Create Password</h2>
                        <input type="password" placeholder="password"/>
                    </li>

                    <li>
                        <h2>Confirm Password</h2>
                        <input type="password" placeholder="confirm password"/>
                    </li>

                    {/*<li className="forgot-password">*/}
                    {/*    Forgot Password ?*/}
                    {/*</li>*/}

                    <li  className = 'logged-in'>
                        <button onClick = {()=>changePage(3)}>
                            Sign Up
                        </button>
                    </li>

                    {/*<li className="no-account">*/}
                    {/*    Don't have an account?<br/>*/}
                    {/*    <button onClick={()=>changePage(2.5)}>Sign Up</button>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </>
    );
}

function MainDashboard(){
    const [stockData, setStockData] = useState(
        [
            {
                id: 48321,
                name: "Kurkure",
                price: 20,
                quantity: 12,
                expiry: "2024-10-15",
                availability: false
            },
            {
                id: 15789,
                name: "Lays",
                price: 20,
                quantity: 67,
                expiry: "2024-11-01",
                availability: true
            },
            {
                id: 64213,
                name: "Maggi",
                price: 15,
                quantity: 34,
                expiry: "2024-10-15",
                availability: true
            },
            {
                id: 90475,
                name: "Bournvita",
                price: 250,
                quantity: 0,
                expiry: "2024-08-10",
                availability: false
            },
            {
                id: 31826,
                name: "Red Bull",
                price: 150,
                quantity: 0,
                expiry: "2024-09-20",
                availability: true
            },
            {
                id: 77504,
                name: "Coca Cola",
                price: 40,
                quantity: 22,
                expiry: "2024-11-05",
                availability: true
            },
            {
                id: 26389,
                name: "Surf Excel",
                price: 450,
                quantity: 86,
                expiry: "2024-10-25",
                availability: true
            },
            {
                id: 40712,
                name: "Colgate",
                price: 80,
                quantity: 0,
                expiry: "2024-09-01",
                availability: false
            }
        ]
    );

    const tempInitialState = {

    }

    const [tempItem, setTempItem] = useState(tempInitialState);

    const handleChange = (event) =>{
        const value = event.target.value;
        const id = event.target.id;
        let temp = tempItem;
        temp[id] = value;
        setTempItem(temp);
        console.log(temp);
    }

    const updateStockData = () =>{
        let temp = [...stockData];
        temp.push(tempItem);
        setStockData(temp);
        setTempItem(tempInitialState);
    }

    return(
        <>
            <section>
                <div className="stock-container">
                    <h3 className={"stock-title"}>Products</h3>
                    <table className="stock-table">
                        <tr className="stock-table-header">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Availability</th>
                        </tr>

                        {
                            stockData.map((item) => {
                                return (<tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>₹{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity  !== 0 ? item.expiry :
                                        <span style={{color: '#f40115'}}>Not Available</span>}</td>
                                    <td>{item.quantity !== 0 ? <span style={{color: '#7bff64'}}>In Stock</span> :
                                        <span style={{color: '#f40115'}}>Out Of Stock</span>}</td>
                                </tr>)
                            })
                        }
                    </table>
                </div>

                <div className={"add-stock-container"}>
                    <h2>Add New Product</h2>
                    <ul>
                        <li>
                            <label>Product Name</label>
                            <input type="text" id="name" placeholder="Enter product name" onChange={handleChange}/>
                        </li>
                        <li>
                            <label >Product ID</label>
                            <input type="text" id="id" placeholder="Enter product ID" onChange={handleChange}  />
                        </li>
                        <li>
                            <label>Price</label>
                            <input type="number" id="price" placeholder="Enter price"  onChange={handleChange}  />
                        </li>
                        <li>
                            <label>Quantity</label>
                            <input type="number" id="quantity" placeholder="Enter quantity" onChange={handleChange} />
                        </li>
                        <li>
                            <label>Expiry Date</label>
                            <input type="date" id="expiry" onChange={handleChange} />
                        </li>
                    </ul>

                    <button onClick={updateStockData}>Add</button>

                </div>

            </section>

        </>
    );
}

function Insights(){
    return(
        <>
            <section className={'overview-section'}>
                <h2>
                    Overview
                </h2>
                <table className={'overview-table'}>
                    <tr>
                        <td>
                            ₹21,190
                            <br/>
                            <span style={{color: '#7bff64'}}>Total Profit</span>
                        </td>
                        <td>
                            ₹18,300
                            <br/>
                            <span style={{color: '#ff7d21'}}>Revenue</span>
                        </td>
                        <td>
                            ₹17,432
                            <br/>
                            <span style={{color: '#7bff64'}}>Sales</span>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            ₹1,17,432
                            <br/>
                            <span style={{color: '#7bff64'}}>Net Purchase Value</span>
                        </td>
                        <td>
                            ₹80,432
                            <br/>
                            <span style={{color: '#ff7000'}}>Net Sales Value</span>
                        </td>
                        <td>
                            ₹30,432
                            <br/>
                            <span style={{color: '#7bff64'}}>MoM Profit</span>
                        </td>
                        <td>
                            ₹1,10,432
                            <br/>
                            <span style={{color: '#7bff64'}}>YoY Profit</span>
                        </td>
                    </tr>
                </table>
            </section>

            <section className={'top-selling-stock-section'}>
                <h2>Top Selling Stock</h2>
                <table className={'top-selling-stock-table'}>
                    <tr>
                        <th>Name</th>
                        <th>Sold Quantity</th>
                        <th>Remaining Quantity</th>
                        <th>Price</th>
                    </tr>

                    <tr>
                        <td>Surf Excel</td>
                        <td>30</td>
                        <td>12</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹100</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Rin</td>
                        <td>21</td>
                        <td>15</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹207</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Parle G</td>
                        <td>19</td>
                        <td>17</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹105</span>
                        </td>
                    </tr>


                </table>
            </section>

            <section className={'best-selling-product-section'}>
                <h2>Best Selling Product</h2>
                <table className={'best-selling-product-table'}>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Remaining Quantity</th>
                        <th>Turn Over</th>
                        <th>Increased By</th>
                        <th>Product ID</th>
                    </tr>

                    <tr>
                        <td>
                            Tomato
                        </td>
                        <td>
                            Vegetable
                        </td>
                        <td>
                            225 KG
                        </td>
                        <td>
                            ₹17,000
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>2.3%</span>
                        </td>
                        <td>
                            23567
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Onion
                        </td>
                        <td>
                            Vegetable
                        </td>
                        <td>
                            200 KG
                        </td>
                        <td>
                            ₹12,000
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>1.3%</span>
                        </td>
                        <td>
                            56841
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Milk
                        </td>
                        <td>
                            Dairy
                        </td>
                        <td>
                            369 ltr
                        </td>
                        <td>
                            ₹12,177
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>6.9%</span>
                        </td>
                        <td>
                            23567
                        </td>
                    </tr>

                </table>
            </section>

            <section className={'graph'}>
                <h2>Sales Chart</h2>
                <img src={img2} width={'400px'} height={'250px'} />
            </section>
        </>
    );
}

function Invoice() {

    const [invoiceData, setInvoiceData] = useState({
        issue_date: "",
        due_date: "",
        sender_name: "",
        receiver_name: "",
        sender_address: "",
        receiver_address: "",
        products: [
            {
                name: "",
                quantity: "",
                price: "",
                amount: ""
            }
        ]
    });

    // const [item, setItem] = useState({
    //     name: "",
    //     quantity: "",
    //     price: "",
    //     amount: "",
    // });
    //
    // const handleItemChange = (event) => {
    //     const id = event.target.id;
    //     const value = event.target.value;
    //     let data = {...invoiceData, [id]: value};
    //     data["amount"] = data["price"] * data["quantity"];
    //     setItem(data);
    // }
    //
    // const addItem = () => {
    //     setItemList([...itemList, item]);
    // }

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        let data = {...invoiceData, [id]: value};
        setInvoiceData(data);
        console.log(data);
    }

    return (
        <>
            <section className={'invoice-info-section'}>
                <ul>
                    <li>
                        <h2>Issue Date</h2>
                        <input id="issue_date" type="date" placeholder={'24-08-05'} onChange={handleChange}
                               value={invoiceData.issue_date}/>

                        <h2>Due Date</h2>
                        <input type="date" placeholder="Password" id={"due_date"} onChange={handleChange}
                               value={invoiceData.due_date}/>
                    </li>

                    <li>
                        <h2>Sender's Name</h2>
                        <input type="text" placeholder="Dory" id={"sender_name"} onChange={handleChange}
                               value={invoiceData.sender_name}/>
                    </li>

                    <li>
                        <h2>Sender's Address</h2>
                        <input type="text" placeholder="P. Sherman 42 Wallaby Way, Syndey" id={"sender_address"}
                               onChange={handleChange} value={invoiceData.sender_address}/>
                    </li>

                    <li>
                        <h2>Receiver's Name</h2>
                        <input type="text" placeholder="Walter White" id={"receiver_name"} onChange={handleChange}
                               value={invoiceData.receiver_name}/>
                    </li>


                    <li>
                        <h2>Receiver's Address</h2>
                        <input type="text" placeholder="308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104."
                               id={"receiver_address"} onChange={handleChange} value={invoiceData.receiver_address}/>
                    </li>
                </ul>

                <span className={"outer"}>
                    <span className={"inner"}>
                        <h3>Name</h3>
                        <input type="text" id={"name"} />

                        <h3>Quantity</h3>
                        <input type="text" id={"name"} />
                    </span>

                    <span className={"inner"}>
                        <h3>Price</h3>
                        <input type="text" id={"name"}/>

                        <h3>Discount</h3>
                        <input type="text" id={"name"}/>
                    </span>
                </span>

                <button className={"item-add-button"}>
                    Add Item
                </button>


            </section>

            <section className={'invoice-info-preview'}>
                <h1 className={'newsreader'}>Invoice <span style={{color: '#7bff64'}}>#394</span></h1>
                <h3>Issue <span style={{color: "#7bff64"}}>{invoiceData.issue_date} </span>
                    ➡︎
                    Due <span style={{color: "#7bff64"}}>{invoiceData.due_date}</span>
                </h3>
                <p className={"address-info"}>
                    <h3>
                        From<br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.sender_name}</span>
                        <br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.sender_address}</span> <br/>
                    </h3>
                    <h3>
                        To<br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.receiver_name}</span>
                        <br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.receiver_address}</span>
                        <br/>
                    </h3>
                </p>

                <table className={'invoice-table'}>
                    <tr>
                        <th>Products</th>
                        <th>Rate</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>


                </table>

                <h2 className={"total"}>Total : ₹3000</h2>
            </section>
            <button className={"get-invoice-button"}>Get Invoice</button>
        </>
    );
}

function Settings(){
    return (
      <>
          <h1>Choose Theme</h1>
          <span className={"theme"}>
              <button className={"round green"}></button>
              <button className={"round purple"}></button>
              <button className={"round blue"}></button>
              <button className={"round red"}></button>
          </span>
      </>
    );
}

function Dashboard({changePage}) {

    const [dashboardState, setDashboardState] = useState(1);

    const changeDashboard = (value) => {
        setDashboardState(value);
    }
    let content = "";
    if (dashboardState === 1) {
        content = <MainDashboard/>
    } else if (dashboardState === 2) {
        content = <Insights/>
    } else if (dashboardState === 3) {
        content = <Invoice/>
    }else if (dashboardState === 4) {
        content = <Settings/>
    }

    return (
        <>
            <nav className="nav-dashboard">
                <h2 className={'newsreader'}>SpendWise</h2>
                <ul>
                    <li onClick={() => {
                        changeDashboard(1);
                    }}>
                        Dashboard
                    </li>
                    <li onClick={() => {
                        changeDashboard(2);
                    }}>
                        Insights
                    </li>

                    <li onClick={() => {
                        changeDashboard(3);
                    }}>
                        Invoice
                    </li>

                    <li onClick={() => {
                        changeDashboard(4);
                    }}>
                        Settings
                    </li>
                    <li>Aditya</li>
                </ul>
            </nav>
            {content}
        </>
    );
}


export default function MainPage() {

    const [page, setPage] = useState(1);

    const changePage = page => {
        setPage(page);
    }

    if (page === 1) {
        return (
            <LandingPage changePage={changePage}/>
        );
    } else if (page === 2) {
        return (
            <Login changePage={changePage}/>
        )
    } else if (page === 2.5) {
        return (
            <SignUp changePage={changePage}/>
        );
    } else if (page === 3) {
        return (
            <Dashboard changePage={changePage}/>
        );
    }


}