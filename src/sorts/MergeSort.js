import React, { useState, useEffect } from "react";
import "../css/Sort.css";
import Bar from "../components/Bar";

function MergeSort(props) {
  const randomArray = [...props.randomArray];
  var finArray = [];

  const [items, setItems] = useState([]);

  const [isTrue, setIsTrue] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  

async function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var subLeft = await(mergeSort(arr.slice(0, mid)));
  var subRight = await(mergeSort(arr.slice(mid)));
  await sleep(10)
  var fin = [merge(subLeft,subRight)]
  setItems([...fin])
  return await(merge(subLeft, subRight));
}

async function merge (node1, node2) {
  var result = [];
  while (node1.length > 0 && node2.length > 0)
      result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
  return result.concat(node1.length? node1 : node2);
}
  useEffect(() => {
    setItems(randomArray);
  }, [isTrue]);

  useEffect(() => {
    let mergeArray = [...randomArray];

    if (props.start == true) {
      mergeSort(mergeArray)
    }
  }, [props.start]);

  return (
    <div className="Box">
      <div className="Column">
        {items.map((progress) => (
          <Bar height={progress} />
        ))}
      </div>
    </div>
  );
}

export default MergeSort;
