import React, {useState, createContext, useContext} from "react";
import ReactDOM from "react-dom";

const UseContext = createContext();

function Comp1(){
    const [name, setName] = useState("John Doe")
    return(
        <div>
            <UseContext.Provider value={name}>
                <h1>My name is {name}.</h1>
                <Comp2 name={name}/>
            </UseContext.Provider>
        </div>
    )
}
function Comp2(){
    return(
        <div>
            <h1>Component 2</h1>
            <Comp3/>
        </div>
    )
}
function Comp3(){
    return(
        <div>
            <h1>Component 3</h1>
            <Comp4/>
        </div>
    )
}
function Comp4(){
    return(
        <div>
            <h1>Component 4</h1>
            <Comp5/>
        </div>
    )
}
function Comp5(){
    const name = useContext(UseContext);
    return(
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${name} again`}</h2>
        </div>
    )
}


const InfoContext = createContext();

function MyInfo(){
    const [info, setInfo] = useState({
        fullName:"Jane Doe",
        email: "jdoe12@gmail.com",
        age: 24,
        phoneNo: "0704567566"
    })
    return(
        <div>
            <InfoContext.Provider value={info}>
                <h1>Details:</h1>
                <br/>
                <p>{info.fullName}</p>
                <p>{info.email}</p>
                <Car2 info={info}/>
            </InfoContext.Provider>
        </div>
    )
}
function Car2(){
    return(
        <div>
            <h1>Car 2 component</h1>
            <Car3/>
        </div>
    )
}
function Car3(){
    const info = useContext(InfoContext);
    return(
        <div>
            <h1>Personal Details:</h1>
            <p>{info.fullName}</p>
            <p>{info.email}</p>
        </div>
    )
}
export default MyInfo;
