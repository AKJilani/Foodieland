import { Link } from 'react-router-dom'

export default function RecipeCard({ id, title, image, author_name, average_rating }) {
	return (
		<Link to={`/recipes/${id}`} className="block group rounded-xl overflow-hidden border bg-white hover:shadow-sm transition">
			<div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
				{image ? <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition" /> : <div className="w-full h-full" />}
			</div>
			<div className="p-3">
				<h3 className="text-base font-semibold text-gray-900 line-clamp-1">{title}</h3>
				<div className="text-sm text-gray-600">by {author_name || 'Unknown'} · {Number(average_rating||0).toFixed(1)}★</div>
			</div>
		</Link>
	)
}


