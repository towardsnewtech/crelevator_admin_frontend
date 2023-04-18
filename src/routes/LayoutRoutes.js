import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../components/app'
import Datatable from '../components/common/datatable'
import Createcoupons from '../components/coupons/create-coupons'
import ListCoupons from '../components/coupons/list-coupons'
import Dashboard from '../components/dashboard'
import Invoice from '../components/invoice'
import Rates from '../components/localization/rates'
import Taxes from '../components/localization/taxes'
import Translations from '../components/localization/translations'
import Media from '../components/media/media'
import Createmenu from '../components/menus/create-menu'
import Listmenu from '../components/menus/list-menu'
import Createpage from '../components/pages/create-page'
import ListPages from '../components/pages/list-page'
import Digitaladdpro from '../components/products/digital/digital-add-pro'
import Digitalcategory from '../components/products/digital/digital-category'
import Digitalprolist from '../components/products/digital/digital-pro-list'
import Digitalsubcategory from '../components/products/digital/digital-sub-category'
import Reports from '../components/reports/report'
import Orders from '../components/sales/orders'
import Transactionsales from '../components/sales/transactions-sales'
import Profile from '../components/settings/profile'
import Createuser from '../components/users/create-user'
import Listuser from '../components/users/list-user'
import Createvendors from '../components/vendors/create.vendors'
import Listvendors from '../components/vendors/list-vendors'
import NotFoundPage from '../components/404/index'

const LayoutRoutes = () => {
	const isAuthenticated = localStorage.getItem('crelevator_admin_token') !== null ? true : false;

  return (
    <Fragment>
        <Routes>
            <Route element={<App />}>
           		<Route
					path={`${process.env.PUBLIC_URL}/dashboard`}
					element={isAuthenticated ? <Dashboard /> : <NotFoundPage />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/users/list-user`}
					element={isAuthenticated ? <Listuser /> : <NotFoundPage />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/users/create-user`}
					element={isAuthenticated ? <Createuser /> : <NotFoundPage />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/products/category`}
					element={isAuthenticated ? <Digitalcategory /> : <NotFoundPage />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/products/sub-category`}
					element={isAuthenticated ? <Digitalsubcategory /> : <NotFoundPage />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/products/product-list`}
					element={isAuthenticated ? <Digitalprolist /> : <NotFoundPage />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/products/add-product`}
					element={isAuthenticated ? <Digitaladdpro /> : <NotFoundPage />}
				/>

				{/* <Route
					path={`${process.env.PUBLIC_URL}/sales/orders`}
					element={<Orders />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/sales/transactions`}
					element={<Transactionsales />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
					element={<ListCoupons />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
					element={<Createcoupons />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/pages/list-page`}
					element={<ListPages />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/pages/create-page`}
					element={<Createpage />}
				/>

				<Route path={`${process.env.PUBLIC_URL}/media`} element={<Media />} />

				<Route
					path={`${process.env.PUBLIC_URL}/menus/list-menu`}
					element={<Listmenu />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/menus/create-menu`}
					element={<Createmenu />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
					element={<Listvendors />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
					element={<Createvendors />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/localization/transactions`}
					element={<Translations />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
					element={<Rates />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/localization/taxes`}
					element={<Taxes />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/reports/report`}
					element={<Reports />}
				/>

				<Route 
					path={`${process.env.PUBLIC_URL}/settings/profile`}
					element={<Profile />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/invoice`}
					element={<Invoice />}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/data-table`}
					element={<Datatable />}
				/> */}
			</Route>
        </Routes>
    </Fragment>
    )
}

export default LayoutRoutes