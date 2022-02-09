import React from 'react';
import HomePage from './components/homepage/HomePage';
import PayPage from './components/paypage/PayPage';
import styles from './App.module.css';

import { BrowserRouter, Route, Routes  } from 'react-router-dom'



function App() {
  const [index, setIndex] = React.useState(null)

  return (
    <div className={styles.App}>
      <div className={styles.container}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<HomePage setIndex={setIndex}/>} />
                  <Route path="/pay" exact element={<PayPage index={index}/>} />
                  {/* <Route path="/massage" exact element={<PayPage index={index}/>} /> */}
              </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
