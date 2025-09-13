export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 rounded-full transform scale-150"></div>
          
          {/* Main heading */}
          <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
          Welcome to your beautiful Next.js application
        </p>
        
        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Additional info */}
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}