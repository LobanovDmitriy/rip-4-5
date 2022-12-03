import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import {ServicePage} from "./pages/ServicePage";
import {BasketPage} from "./pages/BasketPage";
import {useSelector} from "react-redux";

function App() {
  const {authorized} = useSelector(store=>store.user)
  return (
      <div className='flex flex-col gap-4'>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          {authorized && <Route path="/basket" element={<BasketPage/>}/>}
          <Route path="/service/:id" element={<ServicePage />}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
  );
}

export default App;