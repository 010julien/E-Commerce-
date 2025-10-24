import React, { useState } from 'react';
import { Play, Plus, Star, Crown, Calendar, Clock, Users, Award } from 'lucide-react';

const PrimeVideoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tout' },
    { id: 'originals', name: 'Originaux Prime' },
    { id: 'movies', name: 'Films' },
    { id: 'series', name: 'Séries' },
    { id: 'documentaries', name: 'Documentaires' },
    { id: 'kids', name: 'Enfants' },
  ];

  const featuredContent = {
    title: "The Boys",
    description: "Dans un monde où les super-héros sont corrompus par la célébrité et la gloire, un groupe de justiciers connu sous le nom de 'The Boys' se lance dans une quête héroïque pour révéler la vérité sur 'The Seven' et Vought International.",
    rating: 8.7,
    year: 2024,
    duration: "4 saisons",
    genre: "Action, Drame, Science-Fiction",
    image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=1200&h=600&fit=crop",
    isOriginal: true
  };

  const content = [
    {
      id: 1,
      title: "The Marvelous Mrs. Maisel",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 8.5,
      year: 2023,
      genre: "Comédie, Drame",
      isOriginal: true,
      category: "originals"
    },
    {
      id: 2,
      title: "Jack Ryan",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 8.1,
      year: 2024,
      genre: "Action, Thriller",
      isOriginal: true,
      category: "originals"
    },
    {
      id: 3,
      title: "The Wheel of Time",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 7.9,
      year: 2023,
      genre: "Fantasy, Aventure",
      isOriginal: true,
      category: "originals"
    },
    {
      id: 4,
      title: "Citadel",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 8.3,
      year: 2024,
      genre: "Action, Espionnage",
      isOriginal: true,
      category: "originals"
    },
    {
      id: 5,
      title: "The Terminal List",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 8.0,
      year: 2023,
      genre: "Thriller, Action",
      isOriginal: false,
      category: "series"
    },
    {
      id: 6,
      title: "Air Force One",
      image: "https://images.unsplash.com/photo-1489599511986-c4c0b4b0b6f8?w=400&h=600&fit=crop",
      rating: 7.8,
      year: 2022,
      genre: "Action, Thriller",
      isOriginal: false,
      category: "movies"
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${featuredContent.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              {/* Prime Video Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="h-8 w-8 text-blue-400" />
                <span className="text-3xl font-bold">Prime Video</span>
              </div>

              {/* Original Badge */}
              {featuredContent.isOriginal && (
                <div className="inline-flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Award className="h-4 w-4" />
                  <span>Original Prime Video</span>
                </div>
              )}

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                {featuredContent.title}
              </h1>

              <div className="flex items-center space-x-6 mb-6 text-gray-300">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{featuredContent.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-5 w-5" />
                  <span>{featuredContent.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{featuredContent.duration}</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {featuredContent.description}
              </p>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-3 bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors">
                  <Play className="h-6 w-6 fill-current" />
                  <span className="text-lg">Regarder maintenant</span>
                </button>
                <button className="flex items-center space-x-3 bg-gray-800/80 text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600">
                  <Plus className="h-6 w-6" />
                  <span className="text-lg">Ma liste</span>
                </button>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Genre: {featuredContent.genre}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex space-x-6 mb-12 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Prime Originals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
            <Award className="h-8 w-8 text-blue-400" />
            <span>Originaux Prime Video</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {content.filter(item => item.isOriginal).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-current" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ORIGINAL
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{item.rating}</span>
                  <span>•</span>
                  <span>{item.year}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.genre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Content */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory === 'all' ? 'Tout le contenu' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-current" />
                  </div>
                  {item.isOriginal && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                        ORIGINAL
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{item.rating}</span>
                  <span>•</span>
                  <span>{item.year}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.genre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prime Benefits */}
        <section className="mt-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Rejoignez Prime Video</h2>
            <p className="text-xl text-gray-300 mb-8">
              Accédez à des milliers de films et séries, y compris nos productions originales primées
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Play className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Streaming illimité</h3>
                <p className="text-sm text-gray-400">Films et séries à volonté</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Contenus originaux</h3>
                <p className="text-sm text-gray-400">Productions exclusives primées</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Profils multiples</h3>
                <p className="text-sm text-gray-400">Jusqu'à 6 profils par compte</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Essai gratuit 30 jours
              </button>
              <button className="border border-gray-400 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                En savoir plus
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              5,99€/mois après l'essai gratuit. Résiliable à tout moment.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrimeVideoPage;
