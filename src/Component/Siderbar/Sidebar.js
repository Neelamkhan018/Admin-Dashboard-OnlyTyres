// import React from 'react'

// export default function Sidebar() {
//   return (
//    <>
//    <div className="ec-left-sidebar ec-bg-sidebar">
// 			<div id="sidebar" className="sidebar ec-sidebar-footer">

// 				<div className="ec-brand">
// 					<a href="index.html" title="Ekka">
// 						<img className="ec-brand-icon" src="assets/img/logo/ec-site-logo.png" alt="" />
// 						<span className="ec-brand-name text-truncate">TyreKing</span>
// 					</a>
// 				</div>

				
// 				<div className="ec-navigation" data-simplebar>
					
// 					<ul className="nav sidebar-inner" id="sidebar-menu"/>
					
// 						<li className="active">
// 							<a className="sidenav-item-link" href="index.html">
// 								<i className="mdi mdi-view-dashboard-outline"></i>
// 								<span className="nav-text">Dashboard</span>
// 							</a>
// 							<hr/>
// 						</li>

						
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="#">
// 								<i className="mdi mdi-account-group-outline"></i>
// 								<span className="nav-text">Vendors</span>
// 							</a>
// 						</li>

						
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="#">
// 								<i className="mdi mdi-account-group"></i>
// 								<span className="nav-text">Users</span>
// 							</a>
// 							<hr/>
// 						</li>

// 						{/* <!-- Category --> */}
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="javascript:void(0)">
// 								<i className="mdi mdi-dns-outline"></i>
// 								<span className="nav-text">Categories</span> <b className="caret"></b>
// 							</a>
// 							<div className="collapse">
// 								<ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
// 									<li className="">
// 										<a className="sidenav-item-link" href="tyrebrands.php">
// 											<span className="nav-text">Tyre Brand</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="carbrands.php">
// 											<span className="nav-text">Car Brand</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="bikebrands.php">
// 											<span className="nav-text">Bike Brand</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</li>

// 						{/* <!-- Products --> */}
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="javascript:void(0)">
// 								<i className="mdi mdi-palette-advanced"></i>
// 								<span className="nav-text">Products</span> <b className="caret"></b>
// 							</a>
// 							<div className="collapse">
// 								<ul className="sub-menu" id="products" data-parent="#sidebar-menu">
// 									<li className="">
// 										<a className="sidenav-item-link" href="product-add.php">
// 											<span className="nav-text">Add Product</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="product-list.php">
// 											<span className="nav-text">List Product</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</li>		
// 				</div>
// 			</div>
// 		</div>
//    </>
//   )
// }





import React, { useState } from 'react';

export default function Sidebar() {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isVendorsOpen, setIsVendorsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);


  const toggleVendors = () => setIsVendorsOpen(!isVendorsOpen);
  const toggleUsers = () => setIsUsersOpen(!isUsersOpen);



  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  const toggleOrders = () => {
    setIsOrdersOpen(!isOrdersOpen);
  };

  return (
    <>
      <div className="ec-left-sidebar ec-bg-sideb " >
        <div id="sidebar" className="sidebar ec-sidebar-footer ">
          <div className="ec-brand">
            <a href="index.html" title="Ekka">
              <img className="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/ec-site-logo.png" alt="" />
              <span className="ec-brand-name text-truncate">TyreKing</span>
            </a>
          </div>

          <div className="ec-navigation" data-simplebar>
            <ul className="nav sidebar-inner" id="sidebar-menu">
              <li className="active">
                <a className="sidenav-item-link" href="index.html">
                  <i className="mdi mdi-view-dashboard-outline"></i>
                  <span className="nav-text">Dashboard</span>
                </a>
                <hr/>
              </li>

               {/* Vendors */}
					 {/* Vendors */}
           <li className={`has-sub ${isVendorsOpen ? "expand" : ""}`}>
        <a className="sidenav-item-link" onClick={toggleVendors}>
          <i className="mdi mdi-account-group-outline"></i>
          <span className="nav-text">Dealer</span> <b className="caret"></b>
        </a>
        <div className={`collapse ${isVendorsOpen ? "show" : ""}`}>
          <ul className="sub-menu">
            <li>
              {/* <a className="sidenav-item-link" href="vendor-card.html">
                <span className="nav-text">Vendor Grid</span>
              </a> */}
            </li>
            <li>
              <a className="sidenav-item-link" href="/dealerview">
                <span className="nav-text">Dealer List</span>
              </a>
            </li>
            <li>
              <a className="sidenav-item-link" href="vendor-profile.html">
                <span className="nav-text">Vendors Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

             {/* Users */}
      <li className={`has-sub ${isUsersOpen ? "expand" : ""}`}>
        <a className="sidenav-item-link" onClick={toggleUsers}>
          <i className="mdi mdi-account-group"></i>
          <span className="nav-text">Users</span> <b className="caret"></b>
        </a>
        <div className={`collapse ${isUsersOpen ? "show" : ""}`}>
          <ul className="sub-menu">
            <li>
              <a className="sidenav-item-link" href="user-card.html">
                <span className="nav-text">User Grid</span>
              </a>
            </li>
            <li>
              <a className="sidenav-item-link" href="user-list.html">
                <span className="nav-text">User List</span>
              </a>
            </li>
            <li>
              <a className="sidenav-item-link" href="user-profile.html">
                <span className="nav-text">Users Profile</span>
              </a>
            </li>
          </ul>
        </div>
        <hr/>
      </li>

              {/* Category */}
              <li className="has-sub">
                <a className="sidenav-item-link" onClick={toggleCategories}>
                  <i className="mdi mdi-dns-outline"></i>
                  <span className="nav-text">Categories</span> <b className="caret"></b>
                </a>
                <div className={`collapse ${isCategoriesOpen ? 'show' : ''}`}>
                  <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                    <li>
                      <a className="sidenav-item-link" href="/tyre">
                        <span className="nav-text">Tyre Brand</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/carbrand">
                        <span className="nav-text">Car Brand</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/bikebrand">
                        <span className="nav-text">Bike Brand</span>
                      </a>
                    </li>

                    <li>
                      <a className="sidenav-item-link" href="/TruckBrand">
                        <span className="nav-text">Truck Brand</span>
                      </a>
                    </li>

                    <li>
                      <a className="sidenav-item-link" href="/TractorBrand">
                        <span className="nav-text">Tractor Brand</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Products */}
              <li className="has-sub">
                <a className="sidenav-item-link" onClick={toggleProducts}>
                  <i className="mdi mdi-palette-advanced"></i>
                  <span className="nav-text">Products</span> <b className="caret"></b>
                </a>
                <div className={`collapse ${isProductsOpen ? 'show' : ''}`}>
                  <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                    <li>
                      <a className="sidenav-item-link" href="/addproduct">
                        <span className="nav-text">Add Product</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/list">
                        <span className="nav-text">List Product</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/create-dealer">
                        <span className="nav-text">Dealer</span>
                      </a>
                    </li>  


                    <li>
                      <a className="sidenav-item-link" href="/home-delivery">
                        <span className="nav-text">Home delivery Order</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>

              <li className="has-sub">
  <a className="sidenav-item-link" onClick={toggleOrders}>
    <i className="mdi mdi-cart"></i>
    <span className="nav-text">Orders</span> <b className="caret"></b>
  </a>
  <div className={`collapse ${isOrdersOpen ? 'show' : ''}`}>
    <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
      <li>
        <a className="sidenav-item-link" href="/new-order">
          <span className="nav-text">New Order</span>
        </a>
      </li>
      <li>
        <a className="sidenav-item-link" href="/order-history">
          <span className="nav-text">Order History</span>
        </a>
      </li>
      {/* <li>
        <a className="sidenav-item-link" href="/order-detail">
          <span className="nav-text">Order Detail</span>
        </a>
      </li> */}
      {/* <li>
        <a className="sidenav-item-link" href="/invoice">
          <span className="nav-text">Invoice</span>
        </a>
      </li> */}
    </ul>
  </div>
</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}