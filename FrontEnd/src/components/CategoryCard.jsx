export default function CategoryCard({ id, name, color = '#eef2ff' }) {
	return (
		<a href={`/recipes?category=${id||''}`} className="block p-4 rounded-xl border bg-white hover:shadow-sm transition">
			<div className="text-xs text-gray-500">Category</div>
			<div className="text-base font-semibold text-gray-900 mt-1">{name}</div>
		</a>
	)
}


