import React, { useState, useEffect } from "react";
import axios from "axios";
import { HoverEffect } from "../components/ui/card-hover-effect"; // Import HoverEffect component
import Link from "next/link"; // Import Link for Next.js navigation
import { h1 } from "framer-motion/client";

// Define the interface for repository data
interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const About: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]); // State to store repos
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Fetch GitHub repos on component mount
  useEffect(() => {
    axios
      .get("https://api.github.com/users/BRAJESH-DROID/repos")
      .then((response) => {
        console.log(response.data); // Debugging: log the response
        setRepos(response.data);
        setLoading(false); // Data fetched successfully, stop loading
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setError("Error fetching repositories"); // Set error message
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);
  

  // Prepare items for the HoverEffect component
  const items = repos.map((repo) => ({
    title: repo.name,
    description: repo.description || "No description provided visit repo" ,
    link: repo.html_url,
  }));

  return (
    <div className="About">
      {/* Debugging for error or loading state */}
      {loading && <p className="text-white">Loading repositories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="itachi">
        {/* Uncomment and update image source if you want to include an image */}
        {/* <img src={image.src} alt="Itachi" className="itachi-image center" /> */}
      </div>

      {/* Heading */}
      <h5 className=" text-center mt-2  md:text-[8vh] font-bold text-white leading-tight">
        About Me and My GitHub Projects 🚀
      </h5>

      {/* Navigation Button */}
      <button className="h-[40px] w-[40px] absolute top-4 left-4">
        <i className="text-5xl ri-arrow-left-circle-fill"></i>
      </button>

      {/* GitHub projects with hover effect */}
      {repos.length > 0 && <HoverEffect items={items} />}

      {/* If repos are not found or empty */}
      {repos.length === 0 && !loading && !error && (
        <p className="text-white">No repositories found.</p>
      )}

      {/* Debugging: link to GitHub profile */}
      <div className="flex items-center text-center justify-center mb-3">
        <a
          className="text-white mt-4 block"
          href="https://github.com/BRAJESH-DROID"
          target="_blank"
          rel="noopener noreferrer"
        >
          ----------------------------------------------------------- View my
          GitHub Profile
          🗿--------------------------------------------------------------------------
        </a>
      </div>
    </div>
  );
};

export default About;
