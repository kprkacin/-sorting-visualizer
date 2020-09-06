import React, { useState, useEffect } from "react";
import "../css/Sort.css";
import Bar from "../components/Bar";

function BubbleSort(props) {
  let randomArr = [...props.randomArray];
  let bubbleArray = [...randomArr];
  let speedSort = 1000;
  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);
  const [iteratorA , setIteratorA] = useState();
  const [iteratorB , setIteratorB] = useState();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function bubbleSort() {
    let len = bubbleArray.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len; i++) {
        if (bubbleArray[i] > bubbleArray[i + 1]) {
          let tmp = bubbleArray[i];
          bubbleArray[i] = bubbleArray[i + 1];
          bubbleArray[i + 1] = tmp;
          swapped = true;
          setIteratorA(i);
          setIteratorB(i+1);        
          setItems([...bubbleArray]);
          await sleep(speedSort);


        }

      }
    } while (swapped);
    props.finishFunction(false);
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    bubbleArray = [...randomArr];
    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    setIsTrue(!isTrue);
    if ((props.start == true) && (props.display == true)) {
      speedSort /= props.speed;
      bubbleSort();
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Bubble Sort</h4>
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

export default BubbleSort;
