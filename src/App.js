import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import RouterList from './views/RouterList'
const App = () => {
  return (
    <div className="font-aeonicPro">

        <BrowserRouter>
            <Header />
            <RouterList/>
            <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
