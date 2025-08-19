export default function Hero() {
	return (
		<section className="bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
				<div>
					<div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border bg-white">🍳 Your cooking community</div>
					<h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Discover delicious recipes</h1>
					<p className="mt-4 text-gray-600">Explore community-made recipes and blogs from passionate cooks around the world.</p>
					<div className="mt-6 flex gap-3">
						<a href="/recipes" className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white rounded">Browse Recipes</a>
						<a href="/blogs" className="inline-flex items-center px-5 py-2.5 border rounded">Read Blogs</a>
					</div>
				</div>
				<div className="relative h-72 md:h-[22rem]">
					<div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border bg-gray-100">
						<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" alt="Food" className="w-full h-full object-cover" />
					</div>
					<div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gray-200" />
				</div>
			</div>
		</section>
	)
}



