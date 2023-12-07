import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Stats from './pages/stats';

import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/stats' element={<Stats />} />
            </Routes>
        </>
    );
}

export default App;
