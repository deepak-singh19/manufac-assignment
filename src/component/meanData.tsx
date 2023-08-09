import React, { useEffect, useState } from 'react';
import { totalClass, anything } from './calculation/calculation';
import { WineData } from '../interface/dataInterface';


const MeanData = (a: number, b: keyof WineData) => {
    const [meanData, setMeanData] = useState<number[]>([]);
  
    const calculateMean = (data: number[]): string => {
      const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const meanValue = sum / data.length;
      return meanValue.toFixed(3);
    };
  
    useEffect(() => {
      setMeanData(anything(a, b));
    }, [a, b]);
  
    const meanValue = calculateMean(meanData);
  
    return (
      <div>
        <span>{meanValue}</span>
      </div>
    );
  };
  
  export default MeanData;
  