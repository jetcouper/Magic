
export default function MainButton( {type = "button", onClick, className = "", text ,children}){

    return <button onClick={onClick} type={type} className={"rounded border border-slate-400 p-1 hover:bg-slate-300 " + className}>
                {text ?? children}
            </button>
}



// export default function MainButton ({children, className = "", onClick}) {
//     return (
//         <button
//   className={"bg-slate-500 text-white py-2 px-4 rounded cursor-pointer " + className}
//   onClick={onClick}>
//             {children}
//         </button>
//     );
// }