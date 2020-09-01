import React, { useState, useEffect } from "react";
import "./css/Sort.css";
import Bar from "./components/Bar";

function InsertionSort(props) {
  let randomArr = [...props.randomArray];
  let insertionArray = [...randomArr];
  let speedSort = 1000;


  const [iteratorA , setIteratorA] = useState();

  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function insertionSort() {
    let len = insertionArray.length;
    for (let i = 1; i < len; i++) {
      let key = insertionArray[i];
      let j = i - 1;
      while (j >= 0 && insertionArray[j] > key) {
        insertionArray[j + 1] = insertionArray[j];
        setIteratorA(j+1);
    
        setItems([...insertionArray]);

        await sleep(speedSort);
        j = j - 1;
      }
      insertionArray[j + 1] = key;
    }
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    insertionArray = [...randomArr];

    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    if ((props.start == true) && (props.display == true)) {
      speedSort /= props.speed;

      insertionSort();
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Insertion Sort</h4>

      <div
        style={{
          height: props.height + "px",
        }}
        className="Column"
      >
        {items.map((progress,index) => (
          <Bar color = {(index===iteratorA) ? 'red' : 'blue'}  height={progress} />
        ))}
      </div>
    </div>
  );
}

export default InsertionSort;
