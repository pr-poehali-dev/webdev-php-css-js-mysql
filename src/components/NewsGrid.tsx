import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { latestNews } from "@/lib/mockData";

const NewsGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-oswald font-bold text-gray-900">
            Последние новости
          </h2>
          <Button
            variant="outline"
            className="border-news-orange text-news-orange hover:bg-news-orange hover:text-white"
          >
            Все новости
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestNews.slice(0, 6).map((article) => (
            <NewsCard key={article.id} article={article} variant="default" />
          ))}
        </div>

        {/* Breaking news ticker */}
        <div className="bg-gray-50 border-l-4 border-news-orange p-4 rounded-r-lg">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 bg-news-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-news-orange">
                СРОЧНО
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-sm text-gray-700">
                  Важное событие произошло в центре города • Экстренное
                  заседание правительства • Новые меры поддержки бизнеса •
                  Прогноз погоды на завтра
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
