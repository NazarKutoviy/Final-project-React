import { useEffect, useState } from "react";

const API_KEY = "dc78421004b14836a606cf6f953a6a1c";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const PAGE_SIZE = 10;
const CARDS_PER_LOAD = 4;

const fetchNews = async (page) => {
  const response = await fetch(
    `${BASE_URL}?country=us&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Помилка завантаження новин");
  }

  const data = await response.json();
  return data.articles.filter((article) => article.urlToImage);
};

export default function NewsModule() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMore();
    
  }, []);

  const loadMore = async () => {
    setLoading(true);

    try {
      let collected = [];
      let currentPage = page;

      while (collected.length < CARDS_PER_LOAD) {
        const newArticles = await fetchNews(currentPage);
        collected = [...collected, ...newArticles];
        currentPage++;
      }

      setArticles((prev) => [...prev, ...collected.slice(0, CARDS_PER_LOAD)]);
      setPage(currentPage);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="news-section">
      <h2 className="news-title">News today</h2>

      <ul className="news-list">
        {articles.map((article, index) => (
          <li className="news-card" key={index}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
            />
            <p className="news-text">{article.title}</p>
          </li>
        ))}
      </ul>

      <button className="see-more-btn" onClick={loadMore} disabled={loading}>
        {loading ? "Loading..." : "See more"}
      </button>
    </section>
  );
}
