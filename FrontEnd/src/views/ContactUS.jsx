import { useState } from 'react'
import api from '../api/client'
import { sendContactUsMessage } from '../api/interactions'
import Newsletter from '../components/Newsletter'
import RecipeCard from '../components/RecipeCard'
import { useQuery } from '@tanstack/react-query'
import { listRecipes } from '../api/recipes'

export default function ContactUS() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [enquiryType, setEnquiryType] = useState('')
    const [message, setMessage] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(false)
    
    const { data: related } = useQuery({
        queryKey: ['related-recipes'],
        queryFn: () => listRecipes({ ordering: '-created_at' }),
    })

    async function handleSubmit(e) {
        e.preventDefault()
        setInfo('')
        setLoading(true)

        try {
            await sendContactUsMessage({
                name,
                email,
                subject,
                enquiry_type: enquiryType,
                message,
            })
            setInfo('Your message has been sent successfully!')
            setName('')
            setEmail('')
            setSubject('')
            setEnquiryType('')
            setMessage('')
        } catch (err) {
            console.error(err)
            setInfo('Failed to send message. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        Have questions or feedback? Fill out the form below and we’ll get back to you.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {info && (
                        <div className={`mb-6 p-4 rounded-xl border ${info.includes('successfully')
                            ? 'bg-green-50 border-green-200 text-green-800'
                            : 'bg-red-50 border-red-200 text-red-800'
                            }`}>
                            {info}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                placeholder="Your full name"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                required
                                placeholder="Message subject"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enquiry Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={enquiryType}
                                onChange={e => setEnquiryType(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all"
                            >
                                <option value="">Select an option</option>
                                <option value="general">General Enquiry</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                                rows={6}
                                placeholder="Write your message here..."
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            {/* Newsletter Signup */}
            <Newsletter />
            {/* Related Recipes */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h3 className="text-2xl font-bold mb-6">🍲 You may also like</h3>
                <div className="flex gap-6 overflow-x-auto pb-2">
                    {related?.results?.slice(0, 6)?.map(r => (
                        <div key={r.id} className="w-64 flex-shrink-0">
                            <RecipeCard {...r} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}