import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { NewsArticle } from "@/lib/mockData";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "default" | "horizontal" | "featured";
  className?: string;
}

const NewsCard = ({
  article,
  variant = "default",
  className = "",
}: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (variant === "featured") {
    return (
      <Card
        className={`group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden ${className}`}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <Badge className="bg-news-orange text-white">
              {article.category}
            </Badge>
            <div className="flex items-center text-sm text-news-gray">
              <Icon name="Clock" size={14} className="mr-1" />
              {article.readTime} мин
            </div>
          </div>
          <h2 className="text-2xl font-oswald font-bold leading-tight group-hover:text-news-orange transition-colors">
            {article.title}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-news-gray mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-news-gray">
            <span>
              <Icon name="User" size={14} className="inline mr-1" />
              {article.author}
            </span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "horizontal") {
    return (
      <Card
        className={`group cursor-pointer hover:shadow-md transition-shadow ${className}`}
      >
        <div className="flex">
          <div className="w-1/3 aspect-video overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {article.category}
              </Badge>
              <div className="flex items-center text-xs text-news-gray">
                <Icon name="Clock" size={12} className="mr-1" />
                {article.readTime} мин
              </div>
            </div>
            <h3 className="font-oswald font-semibold mb-2 group-hover:text-news-orange transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-news-gray mb-2 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-news-gray">
              <span>{article.author}</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden ${className}`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
          <div className="flex items-center text-xs text-news-gray">
            <Icon name="Clock" size={12} className="mr-1" />
            {article.readTime} мин
          </div>
        </div>
        <h3 className="font-oswald font-semibold group-hover:text-news-orange transition-colors line-clamp-2">
          {article.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-news-gray mb-3 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-news-gray">
          <span>{article.author}</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
