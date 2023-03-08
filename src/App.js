import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body' 
import Footer from './components/Footer';



/*
Header
  - Logo
  - Nav Items(Right side)
  - Cart


Body

  - SearchBarf
  - Restaurant List
    - Restaurant Card
      -Image
      -Name
      -Rating
      -Desp/Cusines


Footer

  - Links
  - Copyright


*/


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);