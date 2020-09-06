import React, { useState, useEffect } from "react";
import "../css/Sort.css";
import Bar from "../components/Bar";

function HeapSort(props) {
  let randomArr = [...props.randomArray];
  let heapArray = [...randomArr];
  let speedSort = 1000;

  const [iteratorA , setIteratorA] = useState();
  const [iteratorB , setIteratorB] = useState();

  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);

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

  var array_length;
  async function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
      max = left;
    }

    if (right < array_length && input[right] > input[max]) {
      max = right;
    }

    if (max != i) {
      await swap(input, i, max);
      await heap_root(input, max);
    }
  }

  async function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
    setIteratorA(index_A);
    setIteratorB(index_B);  
    setItems([...input]);
    await sleep(speedSort);
  }

  async function heapSort(input) {
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
      await heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
      await swap(input, 0, i);
      array_length--;

      await heap_root(input, 0);
    }
  }

  useEffect(() => {
    randomArr = [...props.randomArray];
    heapArray = [...randomArr];

    setItems([...randomArr]);
  }, [props.randomArray, isTrue]);

  useEffect(() => {
    if ((props.start == true) && (props.display == true)) {
      speedSort /= props.speed;
      heapSort(heapArray);
    }
  }, [props.start]);

  return (
    <div
      style={{
        margin: props.margin,
      }}
      className="Box"
    >
      <h4 className="Title"> Heap Sort</h4>

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

export default HeapSort;
