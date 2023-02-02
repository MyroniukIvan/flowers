import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const Cursor: React.FC<{ cursorVariant: string }> = ({cursorVariant}) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 1000});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            top: 0,
        },
        click: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            top: 0,
            height: 30,
            width: 30,
        },
    };

    // cursor styled
    return (
        <motion.div
            style={{
                background: "black",
                height: '15px',
                width: '15px',
                borderRadius: "50%",
                position: 'fixed',
                left: '0',
                pointerEvents: 'none'
            }}
            variants={variants}
            animate={cursorVariant}
        ></motion.div>
    );
};

export default Cursor;