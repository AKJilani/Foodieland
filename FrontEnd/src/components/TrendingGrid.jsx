import { useQuery } from '@tanstack/react-query'
import { listRecipes } from '../api/recipes'
import RecipeCard from './RecipeCard'

export default function TrendingGrid() {
	const { data } = useQuery({ queryKey: ['recipes', { ordering: '-total_ratings' }], queryFn: () => listRecipes({ ordering: '-total_ratings' }) })
	return (
		<section className="max-w-6xl mx-auto px-4 py-12">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl font-semibold">Trending Recipes</h2>
				<a href="/recipes" className="text-sm text-gray-600 hover:text-gray-900">See all</a>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{data?.results?.slice(0,8)?.map((r) => (
					<RecipeCard key={r.id} {...r} />
				))}
			</div>
		</section>
	)
}


