
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/scss/ekka.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Signup from './Component/Signup/Signup.js';
import '../src/assets/scss/ekka.css.map'
import AddProduct from './Component/Add-product/Add-product.js'
import ProductList from './Component/Product-list/Productlist.js';
import Tyrebrand from './Component/tyrebrand/Tyrebrand.js';
import Carbrand from './Component/Carbrand/Carbrand.js';
import CarModel from './Component/Carbrand/CarModel.js';
import Bikebrand from './Component/Bike/Bikebrand.js';
import BikeModelPage from './Component/Bike/Bikemodel.js';
import Caredit from './Component/Carbrand/Caredit.js';
import CarModelEdit from './Component/Carbrand/Carmodeledit.js';
import BikebrandEdit from './Component/Bike/Bikebrandedit.js';
import BikeModelEdit from './Component/Bike/Bikemodeledit.js';
import TyreEdit from './Component/tyrebrand/Tyreedit.js';
import AddproductEdit from './Component/Add-product/AddproductEdit.js';
import Dealer from './Component/Dealer/Dealer.js';
import DealerEdit from './Component/Dealer/DealerEdit.js';
import DealerLogin from './Component/Dealer/DealerLogin.js';
import DealerList from './Component/Dealer/DealerList.js';
import DealerCreate from './Component/Dealer/DealerCreate.js';
import DealerCreateLogin from './Component/Dealer/DealerCreateLogin.js';
import GstDetails from './Component/Dealer/GstDetails.js';
import BankDetailsForm from './Component/Dealer/BankDetailsForm.js';
import BusinessDetails from './Component/Dealer/BusinessDetails.js';
import DealerCategories from './Component/Dealer/DealerCategories.js';
import AddDealerlist from './Component/Dealer/AddDealerlist.js';
import Neworders from './Component/Orders/Neworders.js';
import Orderhistory from './Component/Orders/Orderhistory.js';
import Orderdetail from './Component/Orders/Orderdetails.js';
import Invoice from './Component/Orders/Invoice.js';
import HomeDelivery from './Component/Orders/Homedeliveryorder.js';
import Dealerview from './Component/Orders/Dealerview.js';
import Dealerdetailsview from './Component/Orders/Dealerdetailsview.js';
import Truckbrand from './Component/Truck/TruckBrand.js';
import Truckedit from './Component/Truck/Truckedit.js';
import TruckModelPage from './Component/Truck/Truckmodel.js';
import TruckModelEdit from './Component/Truck/Truckmodeledit.js';
import TractorBrand from './Component/Tractor/TractorBrand.js';
import TractorEdit from './Component/Tractor/Tractoredit.js';
import TractorModelPage from './Component/Tractor/Tractormodel.js';
import TractorModelEdit from './Component/Tractor/Tractormodeledit.js';
import BatteryBrand from './Component/Battery/BatteryBrand.js';
import BatteryBrandEdit from './Component/Battery/Batterybrandedit.js';
import BatteryModelPage from './Component/Battery/Batterymodel.js';
import BatteryModelEdit from './Component/Battery/Batterymodeledit.js';
import AlloyWheelBrand from './Component/AlloyWheel/AlloyWheelBrand.js';
import AlloyWheelBrandEdit from './Component/AlloyWheel/AlloyWheelBrandedit.js';
import AlloyWheelModel from './Component/AlloyWheel/AlloyWheelmodel.js';
import AlloyWheelModelEdit from './Component/AlloyWheel/AlloyWheelmodeledit.js';
import AccessoriesBrand from './Component/Accessories/AccessoriesBrand.js';
import AccessoriesBrandEdit from './Component/Accessories/AccessoriesBrandedit.js';
import AccessoriesModel from './Component/Accessories/Accessoriesmodel.js';
import AccessoriesModelEdit from './Component/Accessories/Accessoriesmodeledit.js';



export default function App() {

    const [auth, setAuth] = useState(false); // Default: Not authenticated

    useEffect(() => {
        // Check if user data exists and is valid
        const user = localStorage.getItem("user");
        if (user) {
            try {
                const parsedUser  = JSON.parse(user);
                if (parsedUser  && parsedUser .email) {
                    setAuth(true);
                } else {
                    setAuth(false);
                    localStorage.removeItem("user"); // Remove invalid user data
                }
            } catch (error) {
                console.error("Invalid user data in localStorage");
                setAuth(false);
                localStorage.removeItem("user"); // Remove corrupt data
            }
        } else {
            setAuth(false);
        }
    }, []);
   

    return (
        <>
         
            <Router>
                <Routes>

                    {/* Dashboard Admin UI */}
                    {/* <Route path="/" element={<Signup />} /> */}
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}

                    <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Signup setAuth={setAuth} />} />
                <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/"} />} />




                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/list" element={<ProductList />}  />


                    <Route path="/tyre" element={<Tyrebrand />} />
                    <Route path="/carbrand" element={<Carbrand/>} />
                    <Route path="/carbrand-model" element={<CarModel/>} />
                    <Route path="/bikebrand" element={<Bikebrand/>} />
                    <Route path="/bikemodel" element={<BikeModelPage/>} />
                    <Route path="/caredit/:id" element={<Caredit/>} />
                    <Route path="/carmodeledit/:id" element={<CarModelEdit/>} />
                    <Route path="/bikebrandedit/:id" element={<BikebrandEdit/>} />
                    <Route path="/bikemodeledit/:id" element={<BikeModelEdit/>} />
                    <Route path="/tyreedit/:id" element={<TyreEdit/>} />
                    <Route path="/addproductedit/:id/:tyreType" element={<AddproductEdit/>} />

                    <Route path="/dealer" element={<Dealer />} />
                    <Route path="/dealer-edit/:id" element={<DealerEdit />} />
                    
                    <Route path="/dealer-list" element={<DealerList/>} />
                    <Route path="/create-dealer" element={<DealerCreate/>} />
                    <Route path="/create-login" element={<DealerCreateLogin/>} />
                    <Route path="/gst-details" element={<GstDetails/>} />
                    <Route path="/bank-details" element={<BankDetailsForm/>} />
                    <Route path="/business-details" element={<BusinessDetails/>} />
                    <Route path="/dealer-category" element={<DealerCategories/>} />
                    <Route path="/add-dealer" element={<AddDealerlist/>} />

                    <Route path="/new-order" element={<Neworders/>} />
                    <Route path="/order-history" element={<Orderhistory/>} />
                    <Route path="/order-detail/:orderId" element={<Orderdetail/>} />
                    <Route path="/invoice/:orderId" element={<Invoice/>} />
                    <Route path="/home-delivery" element={<HomeDelivery/>} />
                    <Route path="/dealerview" element={<Dealerview/>} />

                    <Route path="/dealerdetailsview/:id" element={<Dealerdetailsview/>} />

                    <Route path="/TruckBrand" element={<Truckbrand/>} />
                    <Route path="/Truckedit/:id" element={<Truckedit/>} />
                    <Route path="/Truckmodel" element={<TruckModelPage/>} />
                    <Route path="/Truckmodeledit/:id" element={<TruckModelEdit/>} />

                    <Route path="/TractorBrand" element={<TractorBrand/>} />
                    <Route path="/Tractoredit/:id" element={<TractorEdit/>} />
                    <Route path="/Tractormodel" element={<TractorModelPage/>} />
                    <Route path="/Tractormodeledit/:id" element={<TractorModelEdit/>} />

                    <Route path="/Batterybrand" element={<BatteryBrand/>} />
                    <Route path="/Batterybrandedit/:id" element={<BatteryBrandEdit/>} />
                    <Route path="/Batterymodel" element={<BatteryModelPage/>} />
                    <Route path="/Batterymodeledit/:id" element={<BatteryModelEdit/>} />


                    <Route path="/AlloyWheelbrand" element={<AlloyWheelBrand/>} />
                    <Route path="/AlloyWheelbrandedit/:id" element={<AlloyWheelBrandEdit/>} />
                    <Route path="/AlloyWheelmodel" element={<AlloyWheelModel/>} />
                    <Route path="/AlloyWheelmodeledit/:id" element={<AlloyWheelModelEdit/>} />

                    <Route path="/Accessoriesbrand" element={<AccessoriesBrand/>} />
                    <Route path="/Accessoriesbrandedit/:id" element={<AccessoriesBrandEdit/>} />
                    <Route path="/Accessoriesmodel" element={<AccessoriesModel/>} />
                    <Route path="/Accessoriesmodeledit/:id" element={<AccessoriesModelEdit/>} />

                    










                </Routes>
                
            </Router>
            
        </>
    );
}



