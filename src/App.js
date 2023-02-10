import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/Error/ErrorPage'
import ProductsPage from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/renders'
import ProductDetail from './components/products/ProductDetail'
import { useContext } from 'react'
import { authContext } from './store/auth-context'
import './App.css'
import MobNav from './components/mobile/MobNav'
import Home from './pages/Home'
import About from './components/About/About'
import ContactUs from './components/Contact/ContactUs'
function App() {
  const authCtx = useContext(authContext)

  return (
    <div className="wrapper">
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route index element={<Home></Home>}></Route>

            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="products"
              element={<ProductsPage></ProductsPage>}
            ></Route>
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
