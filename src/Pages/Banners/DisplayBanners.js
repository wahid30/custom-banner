import React from 'react';


const DisplayBanners = ({slide}) => {
    const {image} = slide;
    return (
       <img className='pic w-full' src={image} alt="" />
    );
};


export default DisplayBanners;

