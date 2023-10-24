import "./App.css";
import { Header, Footer } from "./components";

import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
    </div>
  );
}

export default App;
