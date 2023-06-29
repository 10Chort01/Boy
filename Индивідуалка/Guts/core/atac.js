import React from 'react';

const atac = ({ shipsReady = false, canShoot = false, ready})=> {
    console.log(!shipsReady) ;
    if (!shipsReady)
    {
        return <button className="btn-ready" onClick={ready}>Вогонь</button>

    }
    return (
        <div>
            {
                canShoot
                   ? <p>Постріл</p> :<p>Постріл супротивника</p>





            }
        </div>



    );


}

export default atac;