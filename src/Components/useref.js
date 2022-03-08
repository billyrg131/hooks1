import { useState, useEffect, useRef } from "react";

function FuncRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

//using useRef for DOM manipulation
function Ref2(){
    const inputElement = useRef("")
    const makeFocus = () => {
        inputElement.current.focus();
    }
    return(
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={makeFocus}>Focus Input</button>
        </>
    )
}

//Tracking previous values 
function Ref3(){
    const[inputVal, setInputVal] = useState("")
    const prevInputVal = useRef("")

    useEffect(()=>{
        prevInputVal.current =  inputVal;
    }, [inputVal])

    return(
        <div>
            <input type="text" value={inputVal}
            onChange={(e)=> setInputVal(e.target.value)}
            />
            <h1>Previous Value: {prevInputVal.current}</h1>
            <h1>Current Value:{inputVal}</h1>
        </div>
    )
}
export default Ref3;