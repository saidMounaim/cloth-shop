import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import OnlyAdmin from "./components/OnlyAdmin";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import EditProductScreen from "./screens/EditProductScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfileScreen />} />
            </Route>
            <Route path="/shipping" element={<ProtectedRoute />}>
              <Route path="/shipping" element={<ShippingScreen />} />
            </Route>
            <Route path="/payment" element={<ProtectedRoute />}>
              <Route path="/payment" element={<PaymentScreen />} />
            </Route>
            <Route path="/placeorder" element={<ProtectedRoute />}>
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
            </Route>
            <Route path="/order/:id" element={<ProtectedRoute />}>
              <Route path="/order/:id" element={<OrderScreen />} />
            </Route>
            <Route path="/admin/users" element={<OnlyAdmin />}>
              <Route path="/admin/users" element={<UserListScreen />} />
            </Route>
            <Route path="/admin/users/edit/:id" element={<OnlyAdmin />}>
              <Route
                path="/admin/users/edit/:id"
                element={<UserEditScreen />}
              />
            </Route>
            <Route path="/admin/products" element={<OnlyAdmin />}>
              <Route path="/admin/products" element={<ProductListScreen />} />
              <Route
                path="/admin/products/:pageNumber"
                element={<ProductListScreen />}
              />
            </Route>
            <Route path="/admin/products/create" element={<OnlyAdmin />}>
              <Route
                path="/admin/products/create"
                element={<CreateProductScreen />}
              />
            </Route>
            <Route path="/admin/product/edit/:id" element={<OnlyAdmin />}>
              <Route
                path="/admin/product/edit/:id"
                element={<EditProductScreen />}
              />
            </Route>
            <Route path="/admin/orders" element={<OnlyAdmin />}>
              <Route path="/admin/orders" element={<OrderListScreen />} />
            </Route>
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            <Route path="/search/:keyword" element={<HomeScreen />} />
            <Route index path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
