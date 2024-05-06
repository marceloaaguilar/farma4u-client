
import ReactDOM from 'react-dom/client';
import App from './App';
import {Helmet} from "react-helmet";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Farma4U</title>
  </Helmet>
  <App />
</div>

);

