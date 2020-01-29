import React, { useState } from 'react';
import './App.css';
import DefaultLayout from './pages/DefaultLayout';
import Customer from './components/Customer';
import Sidebar from './components/SidebarCustomers';

function App() {
  const [selected, setSelected] = useState({});

  const handleSubmitSelected = (e, data) => {
    e.preventDefault();
    console.log(data)
  }

  const handleSelect = data => {
    setSelected(data);
  }

  return (
    <div className="App">
      <DefaultLayout
        sidebarContent={
          <Sidebar onClick={handleSelect} />
        }
        subHeader="subHeader" >
        <Customer data={selected} onSubmit={handleSubmitSelected}/>
      </DefaultLayout>
    </div>
  );
}

export default App;
