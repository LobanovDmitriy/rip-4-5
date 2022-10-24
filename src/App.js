import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NewPage} from "./pages/NewPage";
import {Header} from "./components/Header";
import {ServicePage} from "./pages/ServicePage";
import {services} from "./services";

function App() {

  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/new" element={<NewPage/>}/>
          <Route path="/service/:id" element={<ServicePage services={services}/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </>
  );
}

export default App;