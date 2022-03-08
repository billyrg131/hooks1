import React, {useState}from 'react';

//Creating a hook with an object
function Car(){
 	const[car, setCar] = useState({
 		brand:"Toyota",
 		model:"RAV4",
 		color:"red"
 	})

 	const changeColor = () => {
 		setTimeout(()=> {
 			setCar(last => {
 				return{...last, color: "blue"}
 			})
 		}, 10000)
 	}
 	return(
 		<div>
 			<h1>Car Details</h1>
 			<p>{car.brand}</p>
 			<p>{car.model}</p>
 			<p>{car.color}</p>
 			<br/>
 			<button onClick={changeColor}>Change color</button>
 			<br/>
 			<br/>
 			<CarColor/>
 			<br/>
 			<ChangeValue/>
 		</div>
 	);
 }

function CarColor(){
	const[carColor, setCarColor] = useState("black")
	return(
	<div>
		<p>The color of the car paint is {carColor}</p>
	</div>
	);
}

function ChangeValue(){
	const [count, setCount] = useState(0);
	const Decrement = () => {
		setCount(count - 1)
	}
	const Increment = () => {
		setCount(count + 1)
	}
	return(
	<div>
		<h1 style={{fontWeight:'bolder'}}>Current count: {count}</h1>
		<br/>
		<button onClick={Decrement}>Decrement</button>
		<button onClick={Increment}>Increment</button>
	</div>
	);

}
 export default Car;