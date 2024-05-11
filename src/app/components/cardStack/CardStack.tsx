'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
    width?: string;
    height?: string;
    image1?: string
    image2?:string
    image3?: string
    top1?: string
    top2?: string
    top3?: string

    
    
}

const CardStack = ({image1,image2,image3,top1,top2,top3, height = "480px", width = "642.56px" }: Props) => {
    const [scaleUp, setScaleUp] = useState(1);

    return (
        <div 
            className={`relative`}
            style={{ height: height, width: width }}
            onMouseLeave={() => setScaleUp(1)}
            onMouseOver={() => setScaleUp(1.2)}
            >
            <div className='absolute top-2'
                // style={{ transition: 'transform 0.5s', transform: `scale(${scaleUp})` }}
                style={{top:top1|| "0.5rem"}}
            >
                <Image src={image1||"/brokage_card_1.png"} alt="brokage_card_1.png" width={571} height={226} />
            </div>
            <div className='absolute top-8'
                // style={{ transition: 'transform 0.5s', transform: `scale(${scaleUp})` }}
                style={{top:top2 || "2rem"}}
            >
                <Image src={image2||"/brokage_card_2.png"} alt="brokage_card_2.png" width={571} height={226} />
            </div>
            <div className='absolute top-20'
                style={{ transition: 'transform 0.5s', transform: `scale(${scaleUp})`,top:top3 || "5rem" }}>
                <Image src={image3||"/brokage_card_3.png"} alt="brokage_card_3.png" width={571} height={226} />
            </div>
        </div>
    );
}

export default CardStack;
