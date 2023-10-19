import "../styles/App.css";
import Header from "./Header";
//import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "../Auth/Login";
import Loginpage from "../Auth/Loginpage";
import { useSelector } from "react-redux";
//import store from "../store/Store";
// {!user?.data && <Loginpage/> }

//   {user?.data &&  
function App() {
 // const user = useSelector(store => store.user.userDetails);
const user=true;
  return <div className="app">
  {!user && <Loginpage/> }

  {user &&  
    <>
  <Header />
  <div className="app_body">
    <Sidebar />
    <Feed />
    <Widgets />
  </div>
  </>
  }

</div>

}
export default App