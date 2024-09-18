import React, {useEffect, useRef, useState} from 'react';
import _ from 'lodash'
import styles from './apple.module.css'

const Apple = ({x, y, mousePos, setApplePositions, basketInfo}) => {
    // console.log(mousePos)
    const [position, setPosition] = useState({x, y})
    const [bindingPosition, setBindingPosition] = useState({x, y})
    const [isDragging, setIsDragging] = useState(false)
    const [className, setClassName] = useState(styles.static)
    const [applePicture, setApplePicture] = useState(randomAppleType())
    // console.log(applePicture)
    function randomAppleType (){
        const listPictures = ['src/assets/images/apple-red.png', 'src/assets/images/apple-yellow.png']
        const currentPicture = listPictures[Math.trunc(Math.random()*listPictures.length)]
        return currentPicture
    }

    useEffect(() => {
        if (isDragging) {
            setPosition({
                x: mousePos.x,
                y: mousePos.y
            })
            if (basketInfo){
                if (position.x > basketInfo.left+basketInfo.width/2 + 100 && position.x < (basketInfo.left + basketInfo.width*1.5)-100)
                    if (position.y > window.innerHeight - basketInfo.height+30){
                    setApplePositions((prev)=> {
                        return(prev.filter (pos => pos.x !== bindingPosition.x && pos.y !== bindingPosition.y))
                    })
                }
            }
        }
    }, [mousePos])

// x
    return (
        <>
            {/*<div style={{*/}
            {/*    position: "absolute",*/}
            {/*    width: '244.29px',*/}
            {/*    height: '185.62px',*/}
            {/*    backgroundColor: 'blue',*/}
            {/*    scale: '.5',*/}
            {/*    top: `${bindingPosition.y}px`,*/}
            {/*    left: `${bindingPosition.x}px`,*/}
            {/*    transform: 'translate(-100%, -100%)'*/}
            {/*}*/}

            {/*}></div>*/}
            <img
                className={className}

                src={applePicture}

                style={{
                    position: "absolute",
                    width: '244.29px',
                    height: '185.62px',
                    scale: '.4',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: 'translate(-100%, -100%)',
                }}

                onMouseEnter={() => {
                    if (!isDragging)
                        setClassName(styles.touched)
                }}
                onMouseLeave={() => {
                    if (!isDragging)

                        setClassName(styles.static)

                }}
                onMouseDown={() => {
                    setIsDragging(true)
                    setClassName(styles.moving)
                }}
                onTouchStart={() => {
                    setIsDragging(true)
                    setClassName(styles.moving)
                }}
                onMouseUp={() => {
                    setIsDragging(false)
                    // console.log(position)
                    setPosition(bindingPosition)
                    setClassName(styles.static)
                }}
                onTouchEnd={() => {
                    setIsDragging(false)
                    // console.log(position)
                    setPosition(bindingPosition)
                    setClassName(styles.static)
                }}


                draggable={false}
            />

        </>
    );
};

export default Apple;