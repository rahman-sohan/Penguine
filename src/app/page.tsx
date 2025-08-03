export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
            Coming Soon
          </h1>
          <div className="w-32 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          এখানে ডেইলি একটা মেসেজ দিব, ইচ্ছা হলে পড়িও নাহলে ইগনোর করো !
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <div className="inline-block bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 text-sm mb-2">
            Get notified when we launch
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
