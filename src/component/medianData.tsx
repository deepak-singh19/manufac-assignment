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
        // console.log(median);
        const x=median.length;
        let med=0;
        
        if(x%2==0){
            // console.log(x);
            let even=x/2;
            let odd=(x/2)+1;
            // console.log(even);
            // console.log(median[even])
            med=(median[even]+median[odd])/2
            return med.toFixed(3);

        }else{
            // console.log(x);
            let odd=(x+1)/2;
            // console.log(odd);
            med=(median[odd])/2
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
