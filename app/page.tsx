"use client" 
import { useState } from "react"

export default function Page() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState<number | string>("")

  const numA = parseFloat(a)
  const numB = parseFloat(b)

  const calc = (op: string) => {
    if (op === "+") setResult(numA + numB)
    if (op === "-") setResult(numA - numB)
    if (op === "*") setResult(numA * numB)
    if (op === "/") setResult(numA / numB)
  }

  return (
    
    <div className="h-screen flex justify-center items-center bg-gray-900 font-sans">
      <div className="bg-white p-8 rounded-xl w-72 text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Calculator</h2>

        <input
          type="number"
          placeholder="First number"
          value={a}
          onChange={(e)=>setA(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg text-gray-900"
        />

        <input
          type="number"
          placeholder="Second number"
          value={b}
          onChange={(e)=>setB(e.target.value)}
          className="w-full p-3 mb-5 border rounded-lg text-gray-900"
        />

        <div className="grid grid-cols-4 gap-3">
          <button onClick={()=>calc("+")} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">+</button>
          <button onClick={()=>calc("-")} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">-</button>
          <button onClick={()=>calc("*")} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">×</button>
          <button onClick={()=>calc("/")} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">÷</button>
        </div>

        {result !== "" && (
          <div className="mt-5 text-xl font-semibold text-gray-800">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  )
}