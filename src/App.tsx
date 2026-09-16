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
  seriesImagePath: string;
  imagePosition?: string;
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
    seriesImagePath: "/images/the-bear.jpg",
    imagePosition: "top",
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
    seriesImagePath: "/images/breaking-bad.jpeg",
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
    seriesImagePath: "/images/game-of-thrones.jpeg",
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
    seriesImagePath: "/images/syanger-things.jpeg",
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
    seriesImagePath: "/images/friends.jpeg",
    emoji: "🍳"
  },
  {
    id: "mentalist",
    title: "The Mentalist",
    themeColor: "#0EA5E9", // Light Blue
    badgeColor: "#E0F2FE",
    badgeText: "#0369A1",
    foodName: "Mutton Keema",
    foodDescription: "Spicy minced mutton cooked with onions, tomatoes, and robust spices.",
    imagePath: "/images/mutton-keema.png",
    seriesImagePath: "/images/mentalist.png",
  },
  {
    id: "house-of-dragons",
    title: "House of Dragons",
    themeColor: "#DC2626", // Red
    badgeColor: "#FEE2E2",
    badgeText: "#991B1B",
    foodName: "Onion Mutton Curry",
    foodDescription: "A rich and fiery mutton curry slow-cooked with caramelized onions.",
    imagePath: "/images/onion-mutton-curry.png",
    seriesImagePath: "/images/house-of-the-dragons.png",
  },
  {
    id: "knight-of-seven-kingdoms",
    title: "A Knight of the Seven Kingdoms",
    themeColor: "#F59E0B", // Amber
    badgeColor: "#FEF3C7",
    badgeText: "#B45309",
    foodName: "Milk Kolakatta",
    foodDescription: "Sweet rice dumplings simmered in coconut milk and jaggery.",
    imagePath: "/images/paal-kolukattai.png",
    seriesImagePath: "/images/a-knight-of-seven-kingdoms.png",
  },
  {
    id: "off-campus",
    title: "Off Campus",
    themeColor: "#10B981", // Emerald
    badgeColor: "#D1FAE5",
    badgeText: "#047857",
    foodName: "Rasamalai",
    foodDescription: "Soft cottage cheese dumplings soaked in sweetened, thickened milk.",
    imagePath: "/images/rasa-malai.png",
    seriesImagePath: "/images/off-campus.png",
  },
  {
    id: "vampire-diaries",
    title: "The Vampire Diaries",
    themeColor: "#9F1239", // Rose darker
    badgeColor: "#FFE4E6",
    badgeText: "#881337",
    foodName: "Chicken Tikka",
    foodDescription: "Tender chunks of chicken marinated in spices and yogurt, grilled to perfection.",
    imagePath: "/images/chicken-tikka.png",
    seriesImagePath: "/images/vampire-diaries.png",
  },
  {
    id: "better-call-saul",
    title: "Better Call Saul",
    themeColor: "#F59E0B", // Yellow
    badgeColor: "#FEF3C7",
    badgeText: "#B45309",
    foodName: "Rasam",
    foodDescription: "A tangy and spicy South Indian soup made with tamarind, tomatoes, and pepper.",
    imagePath: "/images/rasam.png",
    seriesImagePath: "/images/better-call-saul.png",
  },
  {
    id: "maxton-hall",
    title: "Maxton Hall",
    themeColor: "#8B5CF6", // Purple
    badgeColor: "#EDE9FE",
    badgeText: "#5B21B6",
    foodName: "Thalassery Biriyani",
    foodDescription: "A fragrant and flavorful biriyani from the Malabar coast, made with Kaima rice.",
    imagePath: "/images/thalassery-biriyani.png",
    seriesImagePath: "/images/maxton-hall.png",
  },
  {
    id: "sopranos",
    title: "The Sopranos",
    themeColor: "#374151", // Gray
    badgeColor: "#F3F4F6",
    badgeText: "#1F2937",
    foodName: "Mutton Kola",
    foodDescription: "Crispy and spicy minced mutton meatballs, deep-fried to a golden brown.",
    imagePath: "/images/mutton-kola-urundai.png",
    seriesImagePath: "/images/the-sopranos.png",
  },
  {
    id: "suits",
    title: "Suits",
    themeColor: "#0F172A", // Slate
    badgeColor: "#F1F5F9",
    badgeText: "#0F172A",
    foodName: "White Sauce Pasta",
    foodDescription: "Creamy and cheesy pasta cooked with a rich béchamel sauce and herbs.",
    imagePath: "/images/white-sauce-pasta.png",
    seriesImagePath: "/images/suits.png",
  },
  {
    id: "wednesday",
    title: "Wednesday",
    themeColor: "#4C1D95", // Deep Purple
    badgeColor: "#F5F3FF",
    badgeText: "#4C1D95",
    foodName: "Gulab Jamun",
    foodDescription: "Classic Indian sweet featuring deep-fried dough balls soaked in a sugary syrup.",
    imagePath: "/images/gulab-jamun.png",
    seriesImagePath: "/images/wednesday.png",
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
                    <img 
                      src={food.seriesImagePath} 
                      alt={food.title} 
                      className="series-image" 
                      style={{ objectPosition: food.imagePosition || 'center' }}
                    />
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
