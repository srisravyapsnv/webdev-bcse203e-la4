import { useState } from "react";

function App() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cHB5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHB5fGVufDB8fDB8fHww"
  ];

  const [selected, setSelected] = useState(images[0]);

  return (
    <div style={{ textAlign: "center" }}>
      <img src={selected} width="350px" alt = "Image-Dog"/>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px"
      }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            width="100"
            onClick={() => setSelected(img)}
            alt = "image-dog"
          />
        ))}
      </div>
      <p>P S N V Sri Sravya, 24BCE2267</p>
    </div>
  );
}

export default App;