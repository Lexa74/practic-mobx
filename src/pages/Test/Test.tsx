import {useState, useEffect, useRef} from "react";

// interface PropsHook {
//     value: string
// }
//
// const useHook = ({value} : PropsHook) => { // 2
//     const ref = useRef();
//
//     useEffect(() => {
//         ref.current = value
//     }, [])
//
//     return ref.current
// }

// export const Test = () => {
    // const [state, setState] = useState(0)
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setState(state + 1)
    //     }, 1000)
    // }, [])
    //
    //
    // return <>{state}</>

    // const [count, setCount] = useState(0);
    //
    // const handleClick = () => {
    //     setCount(prevValue => {
    //         return prevValue + 1
    //     })
    //     setCount(count + 1)
    // }
    //
    // return <button onClick={handleClick}>{count}</button>


//     const cachedUser = false
//
//     async function getUser1() {
//         if(cachedUser) return cachedUser
//
//         return (await fetch(`https://api.chucknorris.io/jokes/random`)).json()
//     }
//     function getUser2() {
//         if(cachedUser) return cachedUser
//
//         return fetch(`https://api.chucknorris.io/jokes/random`).then(res => res.json())
//     }
//
// getUser1().then(r => console.log('1', r))
// getUser2().then(r => console.log('2', r))


// }

// function useHook() {
//     console.log('hook')
//
//     useEffect(() => {
//         console.log('hook useEffect')
//     }, [])
// }
//
// export const Test = () => {
//     useHook()
//
//     console.log('parent')
//
//     useEffect(() => {
//         console.log('parent useEffect')
//     }, [])
//
//     return <></>
// }

// hook, hook useEffect, parent, parent useEffect
// hook, parent, hook useEffect, parent useEffect


// export const Test = () => {
//     const [count, setCount] = useState(0);
//
//     function handleIncrement() {
//         setCount(count++);
//     }
//     return <button onClick={() => handleIncrement()}>Increment {count}</button>
// }



// export const Test = () =>{
//     const [data, setData] = useState(null);
//
//     useEffect(() => {
//         fetch('https://api.chucknorris.io/jokes/random')
//             .then (response => response.json())
//             .then (data => setData (data.value));
//     }, [data]);
//
//
//     // @ts-ignore
//     return <div>{data}</div>
// };


// let x = 0;
//
// const rec = () => {
//     if(x < 200000) {
//         x++
//         rec()
//         console.log(x)
//     }
// }
//
// rec()

// const data = {
//     value: 1,
//     increment: function (){
//         this.value++;
//     },
// };
//
// data.increment();
// console.log(data.value);

// let x = 1;
//
// function foo() {
//     x++;
//     let x = 2;
//     console. log(x);
// }
//
// foo();


// let counter = 0;
//
// const recursion = () => {
//     if (counter < 100)
//     {
//     counter++;
//     recursion ();
//     console. log(counter);
// }
// };
// recursion();


// var i = 10;
// var array = [];
// while (i--) {
//     array.push(function() {
//         return i + i; // (-1) + (-1) = -2
//     });
// }
// console. log([
//     array [0]() ,
//     array [1](),
// ]);


