import React, {useState} from 'react';
import  {useNavigate} from 'react-router-dom';

const Login = () => 
{
    const [invitationGame, setInvitationGame] = useState()
    const [gaimId,setGameId]= useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate()

    const startPlay = (e) => {
        e.preventDefault()
        if (nickname && gaimId) {
            localStorage.nickname=nickname
            navigate('/game/'+ gaimId)
        }
    }
    return (
        <div>
            <h2>Авторизація</h2>
            <form onSubmit={startPlay}>
                <div className="field-group">
                    <div><label htmlFor="nickname">Твоє імя</label></div>
                    <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    onChange={e = setNickname(e.target.value)}
                    />
                    <div onChange={(e)=> setInvitationGame(e.target.id === 'ingame')} className="field-group">
                        <input
                        type="radio"
                        name="typeEnter"
                        id="gen"
                        value={!invitationGame}
                        defaultChecked={!invitationGame}
                        />
                    
                    </div>
                    <label htmlFor="gen">Створити гру</label>
                    <input
                        type="radio"
                        name="typeEnter"
                        id="ingame"
                        value={!invitationGame}
                        defaultChecked={!invitationGame}
                     />
                    <label htmlFor="ingame">Войти в игру по Ід</label>
                </div>
                <div className="field-group">
                    {invitationGame ? (
                        <>
                        <div>
                            <label htmlFor="gameId">Ведіть Ід</label>                 
                        <div/>
                        <input
                        type="text"
                        name="gameId"
                        defaultValue=""
                        id="gameId"
                        onChange={e => setGameId(e.target.value)}/> 
                        </>
    
                    } : {
                        <>
                            <button
                                 className="btn-gen"
                                    onClick={(e) => {
                                    e.preventDefault()
                                     setGameId(Date.now())
                            
                                 }}>
                                Генерація Ід
                            </button>
                         <p>{gaimId}</p>
                         
                        </>


                        )}
                        </div>

                        <button type="submit" className="btn-ready">Грати</button>
                </div>
            </form>
        </div>


    );


}
export default Login;