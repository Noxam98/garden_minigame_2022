import React, {useEffect, useState} from 'react';
import Tree from "./three/tree.jsx";
import Basket from "./basket/basket.jsx";
import _ from "lodash";
import {isMobile} from "react-device-detect";
import GameFinished from "./gameFinished/gameFinished.jsx";

const Game = ({mousePosition}) => {
    const appleCount = _.random(5, 7)
    const [applePositions, setApplePositions] = useState([])
    const [basketInfo, setBasketInfo] = useState(null)
    const [treeInfo, setTreeInfo] = useState(null)
    const [gameIteration, SetGameIteration] = useState(1)

    useEffect(() => {

        if(treeInfo){
            console.log(treeInfo)

            const getTempPos = () => {
                if (isMobile)
                return {
                    x: _.random(0, treeInfo.width*.8),
                    y: _.random(treeInfo.top+treeInfo.height/8, treeInfo.top + treeInfo.height/1.7)
                }
                return {
                    x: _.random(treeInfo.left+treeInfo.width/4, treeInfo.left + treeInfo.width-50),
                    y: _.random(treeInfo.top+treeInfo.height/8, treeInfo.top + treeInfo.height/1.7)
                }
            }

            const IsNormalPosition = (tempApplePositions, tempPosition, distance) => {
                // console.log(tempApplePositions, tempPosition)
                let allPositionIsNormal = true

                for (let pos of tempApplePositions) {


                    if (
                        Math.abs(Math.sqrt(
                            ((pos.x - tempPosition.x) * (pos.x - tempPosition.x)) +
                            ((pos.y - tempPosition.y) * (pos.y - tempPosition.y)))
                        ) <= distance
                    ) {
                        allPositionIsNormal = false

                        break
                    }
                }
                return allPositionIsNormal
            }

            const tempApplePositions = []

            for (let i = 0; i < appleCount; i++) {
                let tempPosition = getTempPos()
                while (!IsNormalPosition(tempApplePositions, tempPosition, 65))
                    tempPosition = getTempPos()
                tempApplePositions.push(tempPosition)
            }

            setApplePositions(tempApplePositions)
            // console.log(tempApplePositions)
        }
        },
        [treeInfo, gameIteration]
    )
    useEffect(() => {
        // console.log(applePositions)
    }, [applePositions])

    return (
        <div>
            <Tree mousePosition={mousePosition} basketInfo={basketInfo} applePositions={applePositions}
                  setApplePositions={setApplePositions} appleCount={appleCount} setTreeInfo={setTreeInfo}/>
            <Basket setBasketInfo={setBasketInfo} applePositions={applePositions} basketInfo={basketInfo}/>
            {   applePositions.length === 0&&
                <GameFinished SetGameIteration={SetGameIteration}/>
            }
        </div>
    );
};

export default Game;