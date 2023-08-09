import myData from "../../data/Wine-Data.json";
import { WineData } from "../../interface/dataInterface";


// Gamma = (Ash * Hue) / Magnesium

export const gammaData=()=>{
    let gamma:number[]=[];
    let ash:number[]=[];
    let hue:number[]=[];
    let magnesium: number[]=[];

    myData.map((e)=>{
        ash.push(Number(e["Ash"]))
    })

    myData.map((e)=>{
        magnesium.push(Number(e["Magnesium"]))
    })

    myData.map((e)=>{
        hue.push(Number(e["Hue"]))
    })

    for(let i=0; i<myData.length;i++){
        let data=(ash[i]*hue[i])/magnesium[i];
        gamma.push(data);
    }
    // console.log(ash);
    // console.log(magnesium);
    // console.log(hue);
    // console.log(gama);
    return gamma;

}

export const totalClass= ()=>{

    let classData: number[]=[];
    let uniqueClassData: number[]=[];

    myData.map((e)=>{
        classData.push(e["Alcohol"]);
    })
    classData.forEach(element => {
        if (!uniqueClassData.includes(element)) {
            uniqueClassData.push(element);
        }
    });
    // console.log(uniqueClassData);
    return uniqueClassData;

}




export const anything = (a: number, b: keyof WineData) => {
    const classSet = totalClass(); 
    const wholeData: WineData[] = myData;
    const dataVar: number[] = [];
  
    wholeData.forEach((e) => {
      if (e["Alcohol"] === a) {
        dataVar.push(Number(e[b]));
      }
    });
  
    return dataVar;
  };

 