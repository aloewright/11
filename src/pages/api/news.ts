import { NextApiRequest, NextApiResponse } from "next";
import { NewsResponse } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsResponse | { error: string }>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${process.env.NEWSAPI_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    const data: NewsResponse = await response.json();

    // Filter out articles with missing or incomplete data
    const filteredArticles = data.articles.filter(
      (article) =>
        article.title &&
        article.description &&
        article.title !== "[Removed]" &&
        article.description !== "[Removed]",
    );

    res.status(200).json({
      ...data,
      articles: filteredArticles,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
