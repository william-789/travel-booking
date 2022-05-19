import Navbar from './Navbar';
import Booking from './components/Booking';
import Offers from './components/Offers';
import Nature from './components/Nature';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Footer from './Footer'

function App() {
  return (
    <>
    <Navbar />
    <Booking />
    <Offers />
    <Nature />
    </>    
  );
}

export default App;

/* Order: 
Navbar - ok
Booking - ok
Offers - ok
Nature - bug aaaaaaaaa
Subscription
Contact
Footer
*/