import { useState } from 'react'
import { useNavigate } from 'react-router'
import { apiClient, sendRequest } from '~/api/client'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      if (!email || !password) {
        setError('Email and password are required')
        return
      }
      if (!email.includes('@')) {
        setError('Invalid email address')
        return
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long')
        return
      }
      const res = await sendRequest('/auth/login', 'POST', { email: 'user@example.com', password: 'password' });

      if (!res.ok) {
        const { message } = await res.json()
        throw new Error(message || 'Login failed')
      }

      navigate('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email and password to access your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-violet-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-violet-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-100 p-2 rounded">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 text-white font-medium py-2 rounded hover:bg-violet-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-violet-600 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
