import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MyProvide } from './context/myContext';
import { Home } from './views/Home';
import { New } from './views/New';
import { Update } from './views/Update';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <MyProvide>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/edit/:id' element={<Update/>}></Route>
        </Routes>
      </MyProvide>
      </BrowserRouter>
    </div>
  );
}

export default App;
