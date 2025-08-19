import { useQuery } from '@tanstack/react-query'
import { listBlogs, listBlogCategories } from '../api/blogs'

export default function BlogSidebar() {
	const { data: recent } = useQuery({ queryKey: ['blogs', { page: 1, ordering: '-created_at' }], queryFn: ()=> listBlogs({ page: 1, ordering: '-created_at' }) })
	const { data: cats } = useQuery({ queryKey: ['blog-cats'], queryFn: listBlogCategories })
	return (
		<aside className="space-y-8">
			<div>
				<h4 className="font-semibold">Recent posts</h4>
				<ul className="mt-3 space-y-2 text-sm">
					{recent?.results?.slice(0,5)?.map(b => (
						<li key={b.id}><a className="hover:underline" href={`/blogs/${b.id}`}>{b.title}</a></li>
					))}
				</ul>
			</div>
			<div>
				<h4 className="font-semibold">Categories</h4>
				<ul className="mt-3 space-y-2 text-sm">
					{cats?.results?.map(c => (
						<li key={c.id}><a className="hover:underline" href={`/blogs?category=${c.id}`}>{c.name}</a></li>
					))}
				</ul>
			</div>
		</aside>
	)
}


