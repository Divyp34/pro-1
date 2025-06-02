import React, { useState } from 'react';
import { Brain, TrendingUp, ChefHat, Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  cost: number;
  expiryDate: string;
  quantity: number;
}

interface AIRecommendation {
  title: string;
  description: string;
  profitMargin: number;
  ingredients: string[];
}

function App() {
  const [activeTab, setActiveTab] = useState<'specials' | 'costs' | 'creation'>('specials');

  const sampleInventory: MenuItem[] = [
    { name: "Fresh Salmon", cost: 12.50, expiryDate: "2024-03-20", quantity: 15 },
    { name: "Organic Spinach", cost: 3.25, expiryDate: "2024-03-18", quantity: 8 },
    { name: "Premium Rice", cost: 2.75, expiryDate: "2024-04-15", quantity: 25 }
  ];

  const aiRecommendations: AIRecommendation[] = [
    {
      title: "Citrus-Glazed Salmon Bowl",
      description: "A refreshing bowl featuring our surplus salmon with citrus glaze",
      profitMargin: 68,
      ingredients: ["Fresh Salmon", "Organic Spinach", "Premium Rice"]
    },
    {
      title: "Garden Fresh Spinach Salad",
      description: "Light and nutritious salad utilizing our fresh produce",
      profitMargin: 75,
      ingredients: ["Organic Spinach", "Premium Rice"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">MenuAI</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('specials')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'specials'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Daily Specials
            </button>
            <button
              onClick={() => setActiveTab('costs')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'costs'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Cost Analysis
            </button>
            <button
              onClick={() => setActiveTab('creation')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'creation'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChefHat className="h-5 w-5 mr-2" />
              AI Creation
            </button>
          </div>

          {activeTab === 'specials' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI-Recommended Daily Specials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiRecommendations.map((recommendation, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900">{recommendation.title}</h3>
                    <p className="text-gray-600 mt-2">{recommendation.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {recommendation.profitMargin}% profit margin
                      </span>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Key Ingredients:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {recommendation.ingredients.map((ingredient, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'costs' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Inventory Cost Analysis</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleInventory.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.cost.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.expiryDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            new Date(item.expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {new Date(item.expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                              ? 'Use Soon'
                              : 'Good'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'creation' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Dish Creation</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <input
                      type="text"
                      placeholder="Enter ingredients or cuisine type..."
                      className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Generate Recipe
                    </button>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-600">
                      Our AI system will analyze your available ingredients and create unique dishes
                      that maximize your inventory while maintaining profitability. Enter ingredients
                      or cuisine types above to get started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;