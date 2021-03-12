import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home'
import Message from './Component/Message'
import Arround from './Component/Arround'
import Activity from './Component/Activity'
import EmailDariInstastren from './Component/Settings/EmailDariInstastren';
import AktivitasLogin from './Component/Settings/AktivitasLogin';
import PrivasiDanKeamanan from './Component/Settings/PrivasiDanKeamanan';
import KelolaKontak from './Component/Settings/KelolaKontak';
import NotifikasiOtomatis from './Component/Settings/NotifikasiOtomatis';
import EmailDanSMS from './Component/Settings/EmailDanSMS';
import AplikasiDanSitusWeb from './Component/Settings/AplikasiDanSitusWeb';
import UbahKataSandi from './Component/Settings/UbahKataSandi';
import EditProfil from './Component/Settings/EditProfil';
import reportWebVitals from './reportWebVitals';
import { store } from "./Redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/message" component={Message} />
        <Route path="/activity" component={Activity} />
        <Route path="/arround" component={Arround} />
        <Route exact path="/settings" component={EditProfil} />
        <Route path="/settings/ubah-kata-sandi" component={UbahKataSandi} />
        <Route path="/settings/aplikasi-dan-situs-web" component={AplikasiDanSitusWeb} />
        <Route path="/settings/email-dan-sms" component={EmailDanSMS} />
        <Route path="/settings/notifikasi-otomatis" component={NotifikasiOtomatis} />
        <Route path="/settings/kelola-kontak" component={KelolaKontak} />
        <Route path="/settings/privasi-dan-keamanan" component={PrivasiDanKeamanan} />
        <Route path="/settings/aktivitas-login" component={AktivitasLogin} />
        <Route path="/settings/email-dari-instastren" component={EmailDariInstastren} />
      </Switch >
    </Router >
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
