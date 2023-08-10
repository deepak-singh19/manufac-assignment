import React, { useEffect, useState } from "react";
import myData from "../../data/Wine-Data.json";
import { WineData } from "../../interface/dataInterface";
import { totalClass, anything, gammaData } from "../calculation/calculation";
import { setConstantValue } from "typescript";

const GammaCal = () => {
  const [gammaMean, setGammaMean] = useState<number[]>([]);
  const [gammaVal, setGammaVal] = useState<number[]>([]);
  const [gammaMeadian, setGammaMedian] = useState<number[]>([]);
  const [gammaMode, setGammaMode] = useState<number[]>([]);
  const [classVal, setClassVal] = useState<number[]>([]);

  const classWiseGammaVal = (c: number) => {
    let val: number[] = [];

    myData.map((e, i) => {
      if (e["Alcohol"] == c) val.push(Number(gammaVal[i]));
    });
    return val;
  };

  const gammaMeanData = (c: number) => {
    const data: number[] = classWiseGammaVal(c);
    const sum = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const meanValue = sum / data.length;
    return meanValue.toFixed(3);
  };

  useEffect(() => {
    setClassVal(totalClass());
    setGammaVal(gammaData());
  }, []);

  const gammaModeData = (c: number) => {
    const data: number[] = classWiseGammaVal(c);
    const mode:number[]=[];

    data.map((e)=>{
      mode.push(Number(e.toFixed(3)))
    })

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
    console.log(hashMap)

    return result.toFixed(3);
  }

  const gammaMedianData = (c: number) => {
    const median: number[] = classWiseGammaVal(c);
    median.sort(function (a: number, b: number) {
      return a - b;
    });
    const x = median.length;

    let med = 0;
    const mid = Math.floor(median.length / 2);

    if (x % 2 == 0) {
      let even=x/2;
            let odd=(x/2)+1;
            // console.log(even);
            // console.log(median[even])
            med=(median[even]+median[odd])/2
            return med.toFixed(3);
    } else {
      med = median[mid];
      return med.toFixed(3);
    }
  };

  return (
    <div className="center">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classVal.map((e) => (
              <th key={e}>Class {e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
            {classVal.map((e) => (
              <td key={e}>{gammaMeanData(e)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {classVal.map((e) => (
              <td key={e}>{gammaMedianData(e)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {classVal.map((e) => (
              <td key={e}>{gammaModeData(e)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaCal;
