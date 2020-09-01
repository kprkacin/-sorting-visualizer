import React, { useState, useEffect } from "react";
import "./css/Sort.css";
import Bar from "./components/Bar";

function CountingSort(props) {
  let randomArr = [...props.randomArray];
  let countingArray = [...randomArr];
  let speedSort = 1000;

  const [iteratorA , setIteratorA] = useState();
  const [iteratorB , setIteratorB] = useState();


  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function countingSort(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var i = min,
      j = 0,
      len = arr.length,
      count = [];
    for (i; i <= max; i++) {
      count[i] = 0;
    }
    for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
      while (count[i] > 0) {
        arr[j] = i;
        j++;
        count[i]--;
        await sleep(speedSort);
        setIteratorA(i);
        setIteratorB(j);  
        setItems([...arr]);
      }
    }
    return arr;
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    countingArray = [...randomArr];

    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    if ((props.start == true)&& (props.display == true)) {
      speedSort /= props.speed;

      countingSort(countingArray);
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Counting Sort</h4>

      <div
        style={{
          height: props.height + "px",
        }}
        className="Column"
      >
        {items.map((progress,index) => (
          <Bar color = {(index===iteratorA || index===iteratorB) ? 'red' : 'blue'}  height={progress} />
        ))}
      </div>
    </div>
  );
}

export default CountingSort;
