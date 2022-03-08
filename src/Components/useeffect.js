import React,{useState, useEffect} from 'react';

function Hook1() {
	const [num, setNum] = useState(0);
	useEffect(()=> {
		setTimeout(()=>{
			setNum(num + 1)
		}, 1000)
	}, [])
	//Using an empty array to render state once
	return(
		<div>
			<h1>Rendered count {num} times</h1>
			<br/>
			<Counter/>
			<br/>
			<Shopping/>
		</div>
	)
}


function Counter() {
	const[count, setCount] = useState(0);
	const[answer, setAnswer] = useState(0);

	useEffect(()=>{
		setAnswer(() => count * 2)
	}, [count])
	//Using state values to render once there is an update
	return(
	<div>
		<h1>Count:{count}</h1>
		<br/>
		<button onClick={()=> setCount(count + 1)}>Add(+)</button>
		<button onClick={()=> setCount(count - 1)}>Reduct(-)</button>
		<br/>
		<h1>Calculation:{answer}</h1>
	</div>
	)
}
function Shopping(){
	const[list, setList] = useState([])

	useEffect(()=>{
		setTimeout(() => {
			setList("bananas, apples, milk, juice")
		}, 10000)
	})
	return(
		<div>
			<h1>Shopping List</h1>
			<ul>
				{list}
			</ul>
		</div>
		)
}
export default Hook1;
