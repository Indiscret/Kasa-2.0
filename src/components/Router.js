import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/*' element={<Error/>} />
            </Routes>
        </div>
    )
}

export default Router