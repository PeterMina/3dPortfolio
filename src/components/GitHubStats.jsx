import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "PeterMina"; // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposResponse.json();

        // Calculate stats
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
        const languages = {};

        reposData.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
          totalForks,
          topLanguages,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-white text-xl">Loading GitHub stats...</div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const statCards = [
    { label: "Public Repos", value: stats.publicRepos, icon: "📦" },
    { label: "Followers", value: stats.followers, icon: "👥" },
    { label: "Total Stars", value: stats.totalStars, icon: "⭐" },
    { label: "Total Forks", value: stats.totalForks, icon: "🍴" },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My coding journey</p>
        <h2 className={styles.sectionHeadText}>GitHub Stats.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="bg-tertiary rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-white text-3xl font-bold">{stat.value}</div>
            <div className="text-secondary text-sm mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {stats.topLanguages.length > 0 && (
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-10"
        >
          <h3 className="text-white text-2xl font-semibold mb-4">Top Languages</h3>
          <div className="flex flex-wrap gap-3">
            {stats.topLanguages.map((lang) => (
              <div
                key={lang}
                className="bg-tertiary px-4 py-2 rounded-full text-white font-medium hover:bg-tertiary/80 transition-all"
              >
                {lang}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        variants={fadeIn("up", "spring", 0.7, 0.75)}
        className="mt-10 flex justify-center"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
        >
          View Full Profile on GitHub
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(GitHubStats, "github");
