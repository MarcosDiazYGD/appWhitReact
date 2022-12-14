import React, { useState } from 'react';
import phrases from '../quotes.json'

const QuoteBox = () => {
    const initialIndex = Math.floor(Math.random() * phrases.length)
    const [ index, setIndex ] = useState(initialIndex)

    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    const randomColorIndex = Math.floor(Math.random() * colorArray.length)
    document.body.style = `transition: background .3s ease; background: ${colorArray[randomColorIndex]}`
    

    const clickRandom = ()=> {
        const randomIndex = Math.floor(Math.random() * phrases.length)
        setIndex(randomIndex);
    }

    return (
        <div>
            <div className='QuoteBox' style={{color:colorArray[randomColorIndex], transition: 'color .3s ease'}}>
                <div className='phrase'>
                    {phrases[index].quote}
                </div>
                <i className="fa-solid fa-heart"></i>
                <div className='author' >
                {phrases[index].author}
                </div>

            </div>
            <div className='btnRandom'>
            <button className='btn' onClick={ clickRandom }>Random Phrase</button>
            </div>
        </div>
    );
};

export default QuoteBox;