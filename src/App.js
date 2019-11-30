import React from 'react';
import './App.css';
import DefaultLayout from './pages/DefaultLayout';
import Customer from './components/Customer';


function App() {
  return (
    <div className="App">

      <DefaultLayout
        sidebarContent="Sidebar"
        subHeader="subHeader" >
        <Customer />
      </DefaultLayout>
    </div>
  );
}

export default App;
