import { useEffect, useRef, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function FeaturedSlider({ items = [] }) {
	const containerRef = useRef(null)
	const [atStart, setAtStart] = useState(true)
	const [atEnd, setAtEnd] = useState(false)

	useEffect(()=>{
		function update(){
			const el = containerRef.current
			if(!el) return
			setAtStart(el.scrollLeft <= 0)
			setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
		}
		update()
		const el = containerRef.current
		if(!el) return
		el.addEventListener('scroll', update)
		return ()=> el.removeEventListener('scroll', update)
	},[])

	function scrollBy(delta){
		const el = containerRef.current
		if(!el) return
		el.scrollBy({ left: delta, behavior: 'smooth' })
	}

	return (
		<div className="relative">
			<div ref={containerRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2">
				{items.map((it)=> (
					<div key={it.id} className="min-w-[240px] snap-start">
						<RecipeCard {...it} />
					</div>
				))}
			</div>
			<button onClick={()=>scrollBy(-320)} disabled={atStart} className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border bg-white shadow disabled:opacity-50">‹</button>
			<button onClick={()=>scrollBy(320)} disabled={atEnd} className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border bg-white shadow disabled:opacity-50">›</button>
		</div>
	)
}


