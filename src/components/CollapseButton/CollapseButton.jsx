import { useEffect, useState } from "react";

const CollapseButton = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArray, setIsArray] = useState();

  useEffect(() => {
    const isArray = Array.isArray(content);
    setIsArray(isArray);
  }, [content]);

  return (
    <div className="collapseButton">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="collapseButtonHeader"
      >
        <span>{title}</span>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? "open" : ""}`}
        >
          <path
            d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
            fill="white"
          />
        </svg>
      </button>
      <div className={`collapseButtonContent ${isOpen ? "open" : ""}`}>
        <div className="contentInner">
          {isArray ? (
            // Équipements type content which are array
            content.map((data, index) => <p key={index}>{data}</p>)
          ) : (
            // Description type content which are string
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapseButton;
