import logo from './logo.svg';
import './App.css';
import TrangChu from './Pages/TrangChu';
import LienHe from './Pages/LienHe';
import { Route, Switch } from 'react-router-dom'
import GioiThieu from './Pages/GioiThieu';
import Header from './Components/Header';
import DangNhap from './Pages/DangNhap';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Switch>
          {/* Mặc định sẽ vào trang chủ */}
          <Route exact path='/' component={TrangChu} />
          {/* người dùng gõ / đúng tên thì nhảy qa trang khác */}
          <Route exact path='/trangchu' component={TrangChu} />
          <Route exact path='/lienhe' component={LienHe} />
          <Route exact path='/gioithieu' component={GioiThieu} />
          <Route exact path='/dangnhap' component={DangNhap} />
          <Route exact path='/home' component={Home} />

          {/* Cách viết mới
        <Route path='/lienhe'>
          <LienHe/>
          </Route> */}
        </Switch>


      </>
    </div>
  );
}

export default App;
