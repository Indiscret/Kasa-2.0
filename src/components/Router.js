import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';
import Lodgings from '../pages/Lodgings/Lodgings';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/lodgings/:id' element={<Lodgings/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/*' element={<Error/>} />
            </Routes>
        </div>
    )
}

export default Router