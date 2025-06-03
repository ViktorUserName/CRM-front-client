'use client'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { increment, decrement, reset } from '../store/slices/counterSlice'

export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">
          +
        </button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </main>
  )
}
