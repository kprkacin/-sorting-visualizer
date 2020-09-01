import React, { useState, useEffect } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./css/App.css";
import BubbleSort from "./BubbleSort";
import QuickSort from "./QuickSort";
import MergeSort from "./MergeSort";
import SelectionSort from "./SelectionSort";
import InsertionSort from "./InsertionSort";
import HeapSort from "./HeapSort";
import CountingSort from "./CountingSort";

/*
    const setSpeedUpHandler = () =>{
    if(Speed == 10){
      setSpeed("Maximum Speed")

    }
    else if(Speed == "Minimum Speed"){
      setSpeed(1)
    }else if(Speed == "Maximum Speed"){

    }else{
      setSpeed(Speed+1)
    }
  }
  const setSpeedDownHandler = () =>{
    if(Speed == "Maximum Speed"){
      setSpeed(10);

    }
    else if(Speed == 1){
      setSpeed("Minimum Speed")
    }
    else if(Speed == "Minimum Speed"){

    }else{
      setSpeed(Speed-1)
    }
  }

      ----

    <div className="splitButtonRowRight">
          <a className="Button" href="#" onClick={() => setSpeedUpHandler()}>
            Speed up
          </a>
          <a className="Button" href="#" onClick={() => setSpeedDownHandler()}>
            Speed down
          </a>
          <div className="Speed">Current Speed {Speed} x</div>
        </div>


  */
const ARRAY_LENGTH = 75;
var mainArray = [];
const allSortHeight = 300;
const allSortWidth = 30;
const allSortPadding = 1.5 + "%";
const sortHeight = 500;
const sortWidth = 100;
const sortPadding = 3 + "%";

const visible = "visible";
for (let i = 0; i < ARRAY_LENGTH; i++) {
  mainArray.push(Math.floor(Math.random() * 100));
}

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [Speed, setSpeed] = useState(10);
  const [mainArr, setMainArr] = useState([...mainArray]);

  const [allSortDisplay, setAllSortDisplay] = useState(false);
  const [bubbleDisplay, setBubbleDisplay] = useState(true);
  const [quickDisplay, setQuickDisplay] = useState(false);
  const [insertionDisplay, setInsertionDisplay] = useState(false);
  const [countingDisplay, setCountingDisplay] = useState(false);
  const [heapDisplay, setHeapDisplay] = useState(false);
  const [selectionDisplay, setSelectionDisplay] = useState(false);

  const resetArrayHandler = () => {
    if (isTrue === false) {
      const resetArray = [];
      for (let i = 0; i < ARRAY_LENGTH; i++) {
        resetArray.push(Math.floor(Math.random() * 100));
      }
      setMainArr([...resetArray]);
    }
  };
  const finishSort = (value) => {
    setIsTrue(false);
    resetArrayHandler();
    setIsTrue(false);
  };
  const onSliderChange = (value) => {
    setSpeed(value);
  };

  const displayHandler = (currentSort) => {
    if (currentSort === "reset") {
      setAllSortDisplay(false);

      setBubbleDisplay(false);
      setCountingDisplay(false);
      setHeapDisplay(false);

      setQuickDisplay(false);

      setInsertionDisplay(false);
      setSelectionDisplay(false);
    }
  };

  return (
    <div className="App">
      <div className="buttonRow">
        <div className="splitButtonRowLeft">
          <a className="Button" href="#" onClick={() => setIsTrue(true)}>
            Start
          </a>
          <a className="Button" href="#" onClick={() => resetArrayHandler()}>
            Generate New Random Array
          </a>
        </div>
        <div className="splitButtonRowMiddle">
          <div className="Button">Change Sorting Speed</div>
          <div>
            <Slider
              onAfterChange={onSliderChange}
              style={{ margin: 7, width: 200, height: 10 }}
              min={10}
              max={200}
            />
          </div>
        </div>
        <div className="splitButtonRowRight">
          <label className="labelSort" for="sorts">
            Select sorting method:
          </label>
          <select name="sorts" className="sortSelect">
            <option onClick={() => setBubbleDisplay(!bubbleDisplay)}>
              Bubble Sort
            </option>

            <option onClick={() => setQuickDisplay(!quickDisplay)}>
              Quick Sort
            </option>
            <option onClick={() => setSelectionDisplay(!selectionDisplay)}>
              Selection Sort
            </option>
            <option onClick={() => setInsertionDisplay(!insertionDisplay)}>
              Insertion Sort
            </option>
            <option onClick={() => setHeapDisplay(!heapDisplay)}>
              Heap Sort
            </option>
            <option onClick={() => setCountingDisplay(!countingDisplay)}>
              Counting Sort
            </option>
            <option onClick={() => setAllSortDisplay(!allSortDisplay)}>
              Show All Sorts
            </option>
            <option onClick={() => displayHandler("reset")}>Reset</option>
          </select>
        </div>
      </div>

      <div className="Sorts">
        <div
          style={{
            display: allSortDisplay ? "flex" : "none",
          }}
          className="allSorts"
        >
          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
            }}
            className="bubbleSort"
          >
            <BubbleSort
              finishFunction={finishSort}
              height={allSortHeight}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
              display={allSortDisplay}
            />
          </div>

          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
            }}
            className="quickSort"
          >
            <QuickSort
              height={allSortHeight}
              display={allSortDisplay}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
            />
          </div>
          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
            }}
            className="selectionSort"
          >
            <SelectionSort
              display={allSortDisplay}
              height={allSortHeight}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
            />
          </div>
          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
            }}
            className="insertionSort"
          >
            <InsertionSort
              display={allSortDisplay}
              height={allSortHeight}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
            />
          </div>
          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
            }}
            className="heapSort"
          >
            <HeapSort
              display={allSortDisplay}
              height={allSortHeight}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
            />
          </div>
          <div
            style={{
              padding: allSortPadding,
              height: allSortHeight,
              width: allSortWidth + "%",
              display: "visible",
            }}
            className="countingSort"
          >
            <CountingSort
              display={allSortDisplay}
              height={allSortHeight}
              randomArray={mainArr}
              start={isTrue}
              speed={Speed}
            />
          </div>
        </div>

        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,
            display: bubbleDisplay ? "block" : "none",
          }}
        >
          <BubbleSort
            margin="auto"
            finishFunction={finishSort}
            speed={Speed}
            display={bubbleDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>

        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,

            display: quickDisplay ? "block" : "none",
          }}
          className="quickSort"
        >
          <QuickSort
            margin="auto"
            speed={Speed}
            display={quickDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>
        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,

            display: selectionDisplay ? "block" : "none",
          }}
          className="selectionSort"
        >
          <SelectionSort
            margin="auto"
            speed={Speed}
            display={selectionDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>
        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,

            display: insertionDisplay ? "block" : "none",
          }}
          className="insertionSort"
        >
          <InsertionSort
            margin="auto"
            speed={Speed}
            display={insertionDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>
        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,

            display: heapDisplay ? "block" : "none",
          }}
          className="heapSort"
        >
          <HeapSort
            margin="auto"
            speed={Speed}
            display={heapDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>
        <div
          style={{
            height: sortHeight,
            width: sortWidth + "%",
            padding: sortPadding,

            display: countingDisplay ? "block" : "none",
          }}
          className="countingSort"
        >
          <CountingSort
            margin="auto"
            speed={Speed}
            display={countingDisplay}
            height={sortHeight}
            randomArray={mainArr}
            start={isTrue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
