import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/common/index";
import { HomePage, AboutPage, ContactPage, ServicePage, BlogPage, PageNotFound } from "./pages/index"
const App = () => {
  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-zinc-900">
      <Navbar />

      <Routes>


        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="*" element={<PageNotFound />} />



      </Routes>
      <Footer />
    </div>
  )
}

export default App