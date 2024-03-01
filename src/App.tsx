import {Route, BrowserRouter, Routes} from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/home"
import About from "./pages/about"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />
        <Route path="/about" element={<Layout>
          <About />
        </Layout>} />
        <Route path="/get_started" element={<Layout>
          <About />
        </Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
