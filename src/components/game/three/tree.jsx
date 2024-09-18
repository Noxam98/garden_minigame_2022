import React, {useEffect, useRef, useState} from 'react';
import Apple from "./apple.jsx";
import _ from 'lodash'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';

const Tree = ({mousePosition, applePositions, setApplePositions, basketInfo, setTreeInfo}) => {
        const treeRef = useRef()
        useEffect(() => {
            setTimeout(() => {
                setTreeInfo(
                    {
                        left: treeRef.current.offsetLeft,
                        top: treeRef.current.offsetTop,
                        height: treeRef.current.height,
                        width: treeRef.current.width
                    })

            }, 100)

        }, [])
        return (

            <>
                <BrowserView>
                    <img ref={treeRef} src={'src/assets/images/tree.png'}
                         style={{position: 'absolute', right: '0px', bottom: '0px', height: '90%'}}
                         draggable={false}
                    />
                    {
                        applePositions?.map(applePosition => <Apple key={applePosition.x + '' + applePosition.y}
                                                                    y={applePosition.y} x={applePosition.x}
                                                                    setApplePositions={setApplePositions}
                                                                    mousePos={mousePosition} basketInfo={basketInfo}/>)
                    }
                </BrowserView>
                <MobileView>
                    <img ref={treeRef} src={'src/assets/images/tree-mobile.png'}
                         style={{position: 'absolute', left: '0px', bottom: '0px', height: '70%'}}
                         draggable={false}
                    />
                    {
                        applePositions?.map(applePosition => <Apple key={applePosition.x + '' + applePosition.y}
                                                                    y={applePosition.y} x={applePosition.x}
                                                                    setApplePositions={setApplePositions}
                                                                    mousePos={mousePosition} basketInfo={basketInfo}/>)
                    }
                </MobileView>
            </>
        )
            ;
    }
;

export default Tree;