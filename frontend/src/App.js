import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import {ServicePage} from "./pages/ServicePage";
import {BasketPage} from "./pages/BasketPage";
import {useDispatch, useSelector} from "react-redux";
import {SigninPage} from "./pages/SigninPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {useEffect} from "react";
import {fetchGetUserAction} from "./store/actions/userAction";
import {ManagerLayout} from "./components/ManagerLayout";
import {ManagerOrdersPage} from "./pages/ManagerOrdersPage";
import {ManagerServicesPage} from "./pages/ManagerServicesPage";
import {ManagerServicePage} from "./pages/ManagerServicePage";
import {ManagerAddServicePage} from "./pages/ManagerAddServicePage";

function App() {
  const {authorized} = useSelector(store=>store.user)
  const dispatch = useDispatch();

  useEffect(() => {
      if (localStorage.getItem('access')) {
          // !authorized && dispatch(fetchRefreshAction({'refresh' : localStorage.getItem('refresh')}));
          // authorized && dispatch(fetchGetUserAction());
          dispatch(fetchGetUserAction());
      }
  }, [authorized, dispatch]);

  return (
      <div className='flex flex-col gap-4'>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              {authorized && <Route path="/basket" element={<BasketPage/>}/>}
              <Route path="/service/:id" element={<ServicePage />}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
              <Route path='/auth/signin' element={<SigninPage />} />
              <Route path='/auth/signup' element={<RegistrationPage />} />
              <Route path='/manager' element={<ManagerLayout />} />
              <Route path='/manager/orders' element={
                  <ManagerLayout>
                      <ManagerOrdersPage />
                  </ManagerLayout>
              } />
              <Route path='/manager/services' element={
                  <ManagerLayout>
                      <ManagerServicesPage />
                  </ManagerLayout>
              } />
              <Route path="/manager/service/:id" element={
                  <ManagerLayout>
                      <ManagerServicePage />
                  </ManagerLayout>
              }/>
              <Route path="/manager/service/add" element={
                  <ManagerLayout>
                      <ManagerAddServicePage />
                  </ManagerLayout>
              }/>
          </Routes>
      </div>
  );
}

export default App;