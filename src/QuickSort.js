import React, { useState, useEffect } from "react";
import "./css/Sort.css";
import Bar from "./components/Bar";

function QuickSort(props) {
  let randomArr = [...props.randomArray];
  let quickArray = [...randomArr];
let speedSort;
  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);
  const [iteratorA , setIteratorA] = useState();
  const [iteratorB , setIteratorB] = useState();


  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  async function swap(items, leftIndex, rightIndex, k) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    await sleep(speedSort);
    setIteratorA(leftIndex);
    setIteratorB(rightIndex);  

    setItems([...items]);
  }
  async function partition(items, left, right) {
    var k = 0;
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer

    while (i <= j) {
      k++;

      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        await swap(items, i, j, k);
        i++;
        j--;
      }
    }

    return i;
  }

  async function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = await partition(items, left, right); //index returned from partition

      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    quickArray = [...randomArr];

    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    if ((props.start == true) && (props.display == true)) {
      const fast = Number(props.speed);
      speedSort = 2000 / fast;
      alert(speedSort)

      quickSort(quickArray, 0, quickArray.length - 1);
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Quick Sort</h4>

      <div
        style={{
          height: props.height + "px",
        }}
        className="Column"
      >
        {items.map((progress,index) => (
          <Bar color = {(index===iteratorA || index===iteratorB) ? 'red' : 'blue'} height={progress} />
        ))}
      </div>
    </div>
  );
}

export default QuickSort;
