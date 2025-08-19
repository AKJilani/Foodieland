import { useState } from 'react'
import { loginUser } from '../../api/auth'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function handleSubmit(e) {
		e.preventDefault()
		setError('')
		setLoading(true)
		try {
			await loginUser({ email, password })
			window.location.href = '/'
		} catch (err) {
			setError('Invalid credentials')
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className="max-w-md mx-auto px-4 py-12">
				<h2 className="text-2xl font-semibold mb-6">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input type="email" className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
					<input type="password" className="w-full border rounded px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
					{error && <div className="text-red-600 text-sm">{error}</div>}
					<button disabled={loading} className="w-full bg-gray-900 text-white py-2 rounded">{loading?'Logging in...':'Login'}</button>
				</form>
			</div>
		</>
	)
}


