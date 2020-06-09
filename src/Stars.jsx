import React from 'react';
import Star from './Star';

export default function IconSwitch(props) {
    const { count } = props;
    let checkValue = false;
    let rating = [];    
    if (count > 0 && count < 6) {
        checkValue = true;
        for (let i = 1; i <= count; i++) {
            rating.push(i);
        }
    }
    return (
        <>
            {
                !(count && checkValue)
                ||
                <ul className={'card-body-stars u-clearfix'}>
                {rating.map(o => <Star key={o}/>)}
                </ul>
            }
        </>
    );

}