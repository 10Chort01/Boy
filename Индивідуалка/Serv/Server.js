const WebSocket = require('ws');

const play = {}

function start() 

{
    const wss = new WebSocket.Server({port:4000}, () =>
        console.log('WebSocet Server go on port 4000')
        
        );
     
    wss.on('Pidcluch',(wsPeople) =>{
    
        wsPeople.on('message', async (message) => {
            const req =JSON.parse(message.toString() ) ;
            if (reg.event=='Pidcluch') 
            {
                wsPeople.nickname = req.payload.username
                initGames(wsPeople, req.payload.gaimId)

            }


            broadcast(req);
        });
    });

    function initGames(ws, gaimId)
    { 
        if(!games[gaimId]) {
        games[gaimId] = [ws]
    }
    if(games[gaimId] && games[gaimId]?.length <2  ) {
        games[gaimId] = [...games[gaimId], ws]
    }

    if(games[gaimId] && games[gaimId] === 2) {
        games[gaimId] = games[gaimId].filter(wsc => wsc.nickname !== ws.nickname)
        games[gaimId] = [...games[gaimId], ws]
    }


    }
    function broadcast(params)
    {
        let res;
        const { username, gaimId } = params.payload
        games[gaimId].forEach((people)=>
        {
            switch (params.event) {

                case 'connect':
                    res = {
                        type: 'connectTo Play',
                        payload: 
                        {
                            success: true,
                            rivalName: games[gaimId].find(user => user.nickname !== client.nickname)?.nickname,
                            username: client.nickname
                        }
                    };
                    break;
                case 'ready':
                    res = { type: 'readyToPlay', payload: { canStart: games [gaimId].length >1, username}};
                    break;
                case 'Shoot':
                    res = {type:'Shoot', payload: paramsp.payload }
                    break;
                case 'check':
                    res = {type:'Hit', payload:paramsp.payload }
                    break
                default:
                    res = {type:'logout', payload:paramsp.payload };
                    break;

            } 

            





        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ) 

    }
    
    
    
    
    
    
    
    
    












}