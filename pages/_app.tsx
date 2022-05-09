import 'antd/dist/antd.css';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
