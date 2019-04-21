import React from 'react';


//-----------------------------WILL PRINT SELECTED GAMERS INFO-----------------------------------
const PrintGamerInfo = (props) => {
    return (
        <div>
            <h2 className="Heading">Gamer Info:</h2>
            {
                (props.selectedGamer.name!=="")//Checks if any selection has been done or not,as default value at the time of loading was ""
                //based on above condition below statement will print gamer info but it will print score based on toggle button status(by checking showScore)
                ?<p>{`${props.selectedGamer.name} has played ${(props.showScore===true)?props.selectedGamer.score:"*"} games.`}</p>
                :<p></p>//will print nothing based on above condition
            }
        </div>
    );
}

export default PrintGamerInfo;