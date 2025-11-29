'use client';

import { useState } from 'react';

export default function Home() {
  const [showMessages, setShowMessages] = useState(false);
  
  // Get today's date in Bengali format
  const getTodayInBengali = () => {
    const today = new Date();
    const bengaliMonths = [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    const day = today.getDate().toString().split('').map(d => bengaliNumerals[parseInt(d)]).join('');
    const month = bengaliMonths[today.getMonth()];
    const year = today.getFullYear().toString().split('').map(d => bengaliNumerals[parseInt(d)]).join('');
    
    return `${month} ${day}, ${year}`;
  };

  // Today's message - only one message per day
  const todayMessage = {
    id: 1,
    title: "আজকের বার্তা",
    content: "জীবনের প্রতিটি মুহূর্ত একটি নতুন সুযোগ। আজকে নিজেকে আরও ভালো করার চেষ্টা করুন। প্রতিদিন একটু একটু এগিয়ে চলুন।",
    date: getTodayInBengali()
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center pt-16 pb-8">
        <div className="text-center px-6 py-12">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
              Coming Soon
            </h1>
            <div className="w-32 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            এখানে ডেইলি একটা মেসেজ দিব, ইচ্ছা হলে পড়িও নাহলে ইগনোর করো !
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
        </div>
      </div>

      {/* Messages Card Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                আজকের বার্তা
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setShowMessages(!showMessages)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
            </svg>
            <span>{showMessages ? 'বার্তা লুকান' : 'বার্তা দেখুন'}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${showMessages ? 'rotate-180' : ''}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>

          {/* Messages Display */}
          {showMessages && (
            <div className="mt-6 animate-in fade-in duration-300">
              <div 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{todayMessage.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {todayMessage.date}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{todayMessage.content}</p>
              </div>
              
              <div className="text-center pt-6">
                <p className="text-gray-500 text-sm">কাল আবার নতুন বার্তা পাবেন...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
