import React, { useEffect, useState } from 'react';
import { totalClass, anything } from './calculation/calculation';
import { WineData } from '../interface/dataInterface';

const ModeData = (a:number, b: keyof WineData) => {

    const[mode, setMode]= useState<number[]>([]);
    useEffect(()=>{
        // console.log(anything(a,b))
        setMode(anything(a,b));
    },[])

    const modeData=()=>{
        mode.sort(function(a:number, b:number){return a - b});
        // console.log(mode);
        let hashMap= new Map<number, number>();
        for(let i=0; i<mode.length; i++){
            if (hashMap.has(mode[i])){
                hashMap.set(mode[i], hashMap.get(mode[i])! + 1);
            }else{
                hashMap.set(mode[i],1);
            }
        }

    let maxCount = 0;
    let result = -1;

    hashMap.forEach((value, key) => {
        if (maxCount < value) {
            result = key;
            maxCount = value;
        }
    });

    return result.toFixed(3);
    }
  return (
    <div>
        <span>{modeData()}</span>
    </div>
  )
}

export default ModeData
