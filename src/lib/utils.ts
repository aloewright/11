import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Article } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const createNewsSummary = (articles: Article[]): string => {
  const topStories = articles.slice(0, 5);

  const summaryText = `
    Good morning! Here's your daily news summary for ${new Date().toLocaleDateString()}.
    
    ${topStories
      .map(
        (article, index) => `
      Story ${index + 1}: ${article.title}
      ${article.description || "No description available."}
      Source: ${article.source.name}
    `,
      )
      .join("\n\n")}
    
    That concludes your daily news briefing. Stay informed and have a great day!
  `;

  return summaryText.trim();
};
