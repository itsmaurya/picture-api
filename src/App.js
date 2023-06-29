import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=37967626-2a1ec9e3eaa5e35c5b4e6c3f5&q=${encodeURIComponent(
          name
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images from Pixabay API");
      }

      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="head">
        <a href="https://www.linkedin.com/in/mauryaavi550" className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
        <a href="https://github.com/itsmaurya" className="github"><i class="fa fa-github" aria-hidden="true"></i> </a>
      </div>
      <div className="wrapper">
        <div className="search-input" >
          
          <input
            type="text"
            value={name}
            placeholder="Type to search.."
            onChange={(e) => setName(e.target.value)}
          />
          <div className="autocom-box"></div>
          <div className="icon" onClick={handleSearch}>
            <button>Search</button>
          </div>
        </div>
        
      </div>
      <div className="image-data">
        {images.map((image) => (
          <div className="images">
            <img key={image.id} src={image.webformatURL} alt={image.tags} />
            <div className="view">
              <div><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Likes {image.likes}</div>
              <div><ion-icon name="eye-outline"></ion-icon> Views {image.views} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
