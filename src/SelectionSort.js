import React, { useState, useEffect } from "react";
import "./css/Sort.css";
import Bar from "./components/Bar";

function SelectionSort(props) {
  let randomArr = [...props.randomArray];
  let selectionArray = [...randomArr];
  let speedSort = 1000;


  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);
  const [iteratorA , setIteratorA] = useState();
  const [iteratorB , setIteratorB] = useState();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function selectionSort() {
    let len = selectionArray.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (selectionArray[min] > selectionArray[j]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = selectionArray[i];
        selectionArray[i] = selectionArray[min];
        selectionArray[min] = tmp;
        await sleep(speedSort);
        setIteratorA(i);
        setIteratorB(min);  
        setItems([...selectionArray]);
      }
    }
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    selectionArray = [...randomArr];

    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    if ((props.start == true)  && (props.display == true)){
      speedSort /= props.speed;

      selectionSort();
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Selection Sort</h4>

      <div
        style={{
          height: props.height + "px",
        }}
        className="Column"
      >
        {items.map((progress,index) => (
          <Bar  color = {(index===iteratorA || index===iteratorB) ? 'red' : 'blue'} height={progress} />
        ))}
      </div>
    </div>
  );
}

export default SelectionSort;
