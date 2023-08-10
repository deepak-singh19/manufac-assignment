import React, { useEffect, useState } from 'react';
import { totalClass, anything } from './calculation/calculation';
import { WineData } from '../interface/dataInterface';

const MedianData = (a:number, b: keyof WineData) => {

    const[median, setMedian]= useState<number[]>([]);
    useEffect(()=>{
        // console.log(anything(a,b))
        setMedian(anything(a,b));
    },[])

    const medianData=()=>{
        median.sort(function(a:number, b:number){return a - b});
        const x=median.length;
        
        let med=0;
        const mid = Math.floor(median.length / 2)
        
        if(x%2==0){
            med=(median[mid - 1] + median[mid]) / 2
            return med.toFixed(3);
        }else{  
            med=median[mid]
            return med.toFixed(3) ;     
        }
    }
  return (
    <div>
        <span>{medianData()}</span>
    </div>
  )
}

export default MedianData
