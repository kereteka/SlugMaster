// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [text, setText] = useState("");
//   const [slug, setSlug] = useState("");
//   const [isCopied, setIsCopied] = useState(false);

//   const outputRef = useRef(null);

//   const generateSlug = (text) => {
//     return text
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-zA-Z0-9]+/g, "-")
//       .replace(/^-+|-+$/g, "");
//   };

//   const handleChange = (event) => {
//     const inputText = event.target.value;
//     setText(inputText);
//     setSlug(generateSlug(inputText));
//     setIsCopied(false);
//   };

//   const handleCopy = () => {
//     if (outputRef.current) {
//       outputRef.current.select();
//       document.execCommand("copy");
//       setIsCopied(true);
//     }
//   };

//   useEffect(() => {
//     const path = slug ? `/slug/${encodeURIComponent(slug)}` : "/";
//     window.history.replaceState({}, "", path);
//   }, [slug]);

//   return (
//     <div className="container">
//       <h1 className="title">Slug Generator</h1>
//       <div className="form-container">
//         <label className="label" htmlFor="text-input">
//           Enter some text:
//         </label>
//         <input
//           id="text-input"
//           className="text-input"
//           type="text"
//           value={text}
//           onChange={handleChange}
//         />
//         {slug && (
//           <div className="output-container">
//             <textarea ref={outputRef} className="slug" value={slug} readOnly />
//             <button className="copy-button" onClick={handleCopy}>
//               {isCopied ? "Copied!" : "Copy"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const outputRef = useRef(null);

  const generateSlug = (text) => {
    return text
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setSlug(generateSlug(inputText));
    setIsCopied(false);
  };

  const handleCopy = () => {
    if (outputRef.current) {
      outputRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
    }
  };

  useEffect(() => {
    const path = slug ? `/slug/${encodeURIComponent(slug)}` : "/";
    window.history.replaceState({}, "", path);
  }, [slug]);

  return (
    <div>
      <Helmet>
        <title>My Slug Generator - Create URL-friendly slugs easily</title>
        <meta
          name="description"
          content="My Slug Generator is a user-friendly tool that allows you to easily create URL-friendly slugs from any text."
        />
        <meta name="keywords" content="slug generator, URL-friendly, SEO" />
        <meta name="author" content="Your Name Here" />
        <meta
          property="og:title"
          content="My Slug Generator - Create URL-friendly slugs easily"
        />
        <meta
          property="og:description"
          content="My Slug Generator is a user-friendly tool that allows you to easily create URL-friendly slugs from any text."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mysluggenerator.com/" />
        <meta
          property="og:image"
          content="https://www.mysluggenerator.com/images/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="My Slug Generator - Create URL-friendly slugs easily"
        />
        <meta
          name="twitter:description"
          content="My Slug Generator is a user-friendly tool that allows you to easily create URL-friendly slugs from any text."
        />
        <meta
          name="twitter:image"
          content="https://www.mysluggenerator.com/images/twitter-image.jpg"
        />
      </Helmet>
      <div className="container">
        <h1 className="title">Slug Generator</h1>
        <div className="form-container">
          <label className="label" htmlFor="text-input">
            Enter some text:
          </label>
          <input
            id="text-input"
            className="text-input"
            type="text"
            value={text}
            onChange={handleChange}
          />
          {slug && (
            <div className="output-container">
              <textarea
                ref={outputRef}
                className="slug"
                value={slug}
                readOnly
              />
              <button className="copy-button" onClick={handleCopy}>
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
