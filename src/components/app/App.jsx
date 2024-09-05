import Header from '../header/Header'
import MainSection from '../main/MainSection'
import Footer from "../footer/Footer";

import { Provider } from "react-redux";
import store from "../redux/store";

function App() {

  return (
    <Provider store={store}>
      <Header />
      <MainSection />
      <Footer />
    </Provider>
  );
}

export default App
