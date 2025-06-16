import React from "react";
import "../index.css";

// Pega todas as imagens na pasta assets com extensão jpg, png, jpeg, svg
const imageModules = import.meta.glob("../assets/*.{jpg,jpeg,png,svg}", { eager: true });

const images = Object.entries(imageModules).map(([path, module]) => {
  const name = path.split("/").pop(); // extrai só o nome do arquivo
  return {
    src: module.default,
    name: name,
    alt: name,
  };
});

export default function ImageGrid({ searchQuery }) {
  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="masonry">
      {filteredImages.map(({ src, alt, name }, index) => (
        <a key={index} href={src} download={name}>
          <img src={src} alt={alt} loading="lazy" />
        </a>
      ))}
    </div>
  );
}