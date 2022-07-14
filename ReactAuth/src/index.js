import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextPorvider } from './components/store/auth-context';

ReactDOM.render(
  <AuthContextPorvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextPorvider>
  ,
  document.getElementById('root')
);
