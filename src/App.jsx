import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, ServicePage, BlogPage, PageNotFound } from "./pages/index"
const App = () => {
  return (
    <div>


      <Routes>


        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="*" element={<PageNotFound />} />



      </Routes>
    </div>
  )
}

export default App