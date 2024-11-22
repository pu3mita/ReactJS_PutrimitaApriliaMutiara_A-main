import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/Product/ProductPage"
import { UserProvider } from "./context/UserContext"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import HookForm from "./pages/HookForm/HookForm"
import ReactForm from "./pages/ReactForm/ReactForm"
import PostApp from "./pages/PostApp/PostApp"
import CounterWithoutToolkit from "./pages/Redux/CounterWithoutTookit"
import CounterWithToolkit from "./pages/Redux/CounterWithToolkit"
import UsersAsyncThunk from "./pages/Redux/UsersAsyncThunk"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/"  element={<ProductPage />}/>
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />}/>
            <Route path="/reactform" element={<ReactForm />}/>
            <Route path="/postapp" element={<PostApp />}/>
            <Route path="/counter" element={<CounterWithoutToolkit />}/>
            <Route path="/counterToolkit" element={<CounterWithToolkit />}/>
            <Route path="/users" element={<UsersAsyncThunk />}/>
          </Routes>  
        </UserProvider>      
      </BrowserRouter>
    </>
  )
}

export default App
