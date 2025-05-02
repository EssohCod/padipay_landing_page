// import './App.css'
// import "./index.css"
// import Nav from './components/Navbar/Nav'
// import Home from './components/Hero/Home'

// function App() {

//   return (
//     <>
//       <Nav />
//       <Home />
//     </>
//   )
// }

// export default App


import './App.css';
import './index.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Hero/Home';
import Features from './components/Features/Features';

function App() {
  return (
    <>
      {/* Fixed Navbar stays on top */}
      <Nav />

      {/* Main content offset below navbar */}
      <div className="main-content">
        <Home />
        <Features />
      </div>
    </>
  );
}

export default App;
