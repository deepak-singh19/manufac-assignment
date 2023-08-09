import React, { useEffect, useState } from 'react';
import myData from '../../data/Wine-Data.json';
import { WineData } from '../../interface/dataInterface';
import { totalClass, anything, gammaData } from '../calculation/calculation';
import MeanData from '../meanData';
import MedianData from '../medianData';
import ModeData from '../modeData';

const FlavanoidsData = () => {
    const [classData, setClassData]= useState<number[]>([]);
    
    const wineDataArray: WineData[] =myData;

    
    const meanResult = (a: number, b: keyof WineData)=>{
        return MeanData(a, b);
    }

    const medianResult = (a: number, b: keyof WineData)=>{
        return MedianData(a, b);
    }

    const modeResult = (a: number, b: keyof WineData)=>{
        return ModeData(a, b);
    }

    useEffect(()=>{
        setClassData(totalClass());
        
    },[])


  return (
    <div className='center'>
         <div>
         <table>
        <thead>
          <tr>
            <th>Measure</th>
            {
                classData.map((e)=>(
                    <th key={e}>Class {e}</th>
                ))
            }
          </tr>
        </thead>
       <tbody>
        <tr>
            <th>Flavanoids Mean</th>
             <td>{meanResult(1, "Flavanoids")}</td>
             <td>{meanResult(2, "Flavanoids")}</td>
             <td>{meanResult(3, "Flavanoids")}</td>
        </tr>
        <tr>
            <th>Flavanoids Median</th>
             <td>{medianResult(1, "Flavanoids")}</td>
             <td>{medianResult(2, "Flavanoids")}</td>
             <td>{medianResult(3, "Flavanoids")}</td>
        </tr>
        <tr>
            <th>Flavanoids Mode</th>
             <td>{modeResult(1, "Flavanoids")}</td>
             <td>{modeResult(2, "Flavanoids")}</td>
             <td>{modeResult(3, "Flavanoids")}</td>
        </tr>
       </tbody>
      </table>
         </div>
    </div>
  )
}

export default FlavanoidsData