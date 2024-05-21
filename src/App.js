import './App.css';
import Sidebar from './AppComponents/Sidebar/Sidebar'
import ContactUs from './AppComponents/Contactus/ContactUs'
import {Route , Routes} from 'react-router-dom';
import Sent from './AppComponents/msgsent/Sent';
import Homepage from './AppComponents/homepage/homepage';


function App() {
  return (
    <div>
      <Sidebar/>
      <Routes>
          <Route path="contactus" element={<ContactUs />}/>
          <Route path="homepage" element={<Homepage />}/>
          <Route path="sent" element={<Sent />} />
      </Routes>
    </div>
  );
}
export default App;
