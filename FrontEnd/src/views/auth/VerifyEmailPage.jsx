import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { verifyEmail } from '../../api/auth'

export default function VerifyEmailPage() {
	const [params] = useSearchParams()
	const [status, setStatus] = useState('verifying')

	useEffect(() => {
		const token = params.get('token')
		if (!token) { setStatus('missing'); return }
		verifyEmail(token)
			.then(() => setStatus('success'))
			.catch(() => setStatus('error'))
	}, [params])

	return (
		<>
			<div className="max-w-md mx-auto px-4 py-12">
				{status === 'verifying' && <p>Verifying...</p>}
				{status === 'success' && <p className="text-green-600">Email verified! You can now login.</p>}
				{status === 'error' && <p className="text-red-600">Invalid or expired token.</p>}
				{status === 'missing' && <p className="text-red-600">No token provided.</p>}
			</div>
		</>
	)
}


