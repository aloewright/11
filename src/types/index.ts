export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  content: string;
}

export interface NewsResponse {
  articles: Article[];
  totalResults: number;
}

export interface AudioGenerationResponse {
  audioData: string;
}

export interface EmailResponse {
  message: string;
}
