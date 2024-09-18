import React, {useEffect, useRef, useState} from 'react';
import styles from './basket.module.css'

const Basket = ({basketInfo, setBasketInfo, applePositions}) => {
    const [classname, setClassname] = useState(styles.static)
    const basketRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setBasketInfo(
                {
                    left: basketRef.current.offsetLeft,
                    top: basketRef.current.offsetTop,
                    height: basketRef.current.height,
                    width: basketRef.current.width
                })

        }, 100)

    }, [])

    useEffect(() => {
        setClassname(styles.addApple)
        setTimeout(() => {
            setClassname(styles.static)
        }, 300)
        console.log(classname)
    }, [applePositions])


    return (
        <>
            <img className={classname} ref={basketRef} src={'src/assets/images/basket.png'}
                 style={{
                     position: "absolute", bottom: '0', right: '50%',
                     transform: 'translate(50%)', width: '500px', zIndex: '2',
                     maxWidth: '70%'
                 }}
                 draggable={false}

            />

        </>
    );
};

export default Basket;