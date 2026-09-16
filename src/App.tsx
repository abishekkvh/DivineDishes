import { useState, type CSSProperties } from 'react';
import './index.css';

interface Food {
  id: string;
  title: string;
  themeColor: string;
  badgeColor: string;
  badgeText: string;
  foodName: string;
  foodDescription: string;
  imagePath: string;
  emoji?: string;
}

const foods: Food[] = [
  {
    id: "the-bear",
    title: "The Bear",
    themeColor: "#8B5CF6", // Purple
    badgeColor: "#E0E7FF",
    badgeText: "#4338CA",
    foodName: "Traditional Sambar",
    foodDescription: "A comforting South Indian lentil stew with drumsticks and carrots.",
    imagePath: "/images/sambar.jpg",
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    themeColor: "#F59E0B", // Yellow
    badgeColor: "#FEF3C7",
    badgeText: "#B45309",
    foodName: "Paneer Butter Masala",
    foodDescription: "Soft paneer cubes in a rich, creamy, and mildly sweet tomato gravy.",
    imagePath: "/images/paneer-butter-masala.jpeg",
    emoji: "🥘"
  },
  {
    id: "game-of-thrones",
    title: "Game of Thrones",
    themeColor: "#10B981", // Green
    badgeColor: "#D1FAE5",
    badgeText: "#047857",
    foodName: "Classic Biriyani",
    foodDescription: "Fluffy fragrant rice cooked with aromatic spices and love.",
    imagePath: "/images/biriyani.png",
    emoji: "🍛"
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    themeColor: "#F43F5E", // Rose
    badgeColor: "#FFE4E6",
    badgeText: "#BE123C",
    foodName: "Kaalan Gravy",
    foodDescription: "A traditional Kerala dish made with yam, plantains, coconut, and yogurt.",
    imagePath: "/images/kaalan.jpeg",
    emoji: "🍲"
  },
  {
    id: "friends",
    title: "Friends",
    themeColor: "#3B82F6", // Blue
    badgeColor: "#DBEAFE",
    badgeText: "#1D4ED8",
    foodName: "Mutta Kalaki",
    foodDescription: "A uniquely soft, semi-liquid scrambled egg mixed with flavorful curry.",
    imagePath: "/images/mutta-kalaki.jpeg",
    emoji: "🍳"
  }
];

function App() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="banner">
          <h1 className="title">Divine Dishes</h1>
        </div>
      </header>
      
      <main className="grid-container">
        
        <div className="grid">
          {foods.map((food) => {
            const isFlipped = flippedCards[food.id];
            
            const cardStyle = {
              '--theme-color': food.themeColor,
              '--badge-bg': food.badgeColor,
              '--badge-text': food.badgeText,
            } as CSSProperties;

            return (
              <div 
                key={food.id} 
                className="card-container" 
                style={cardStyle}
                onClick={() => toggleFlip(food.id)}
              >
                <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* FRONT */}
                  <div className="card-front">
                    <h2 className="show-title">{food.title}</h2>
                  </div>

                  {/* BACK */}
                  <div className="card-back">
                    {food.imagePath ? (
                      <img src={food.imagePath} alt={food.foodName} className="food-image" />
                    ) : (
                      <div className="food-emoji-container">
                        <span className="food-emoji">{food.emoji}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
