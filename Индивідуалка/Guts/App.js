import { BrowserRoutrer, Route, Routes} from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage';
import Login from './pages/Login';

function App()
{
    return (
        <div className='App'>

            <BrowserRoutrer>
            
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path= '/game'>
                        <Route path = ':gameID' element = {<GamePage/>}/>
                        </Route>
                </Routes>
                
            </BrowserRoutrer>

        </div>
    );




}