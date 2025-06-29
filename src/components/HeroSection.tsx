import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { featuredNews } from "@/lib/mockData";

const HeroSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-news-orange text-white text-sm font-medium rounded-full">
                ГЛАВНАЯ НОВОСТЬ
              </div>
              <div className="flex items-center text-sm text-news-gray">
                <Icon name="Clock" size={14} className="mr-1" />
                {featuredNews.readTime} мин чтения
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-oswald font-bold leading-tight text-gray-900">
              {featuredNews.title}
            </h1>

            <p className="text-xl text-news-gray leading-relaxed">
              {featuredNews.excerpt}
            </p>

            <div className="flex items-center space-x-6 text-sm text-news-gray">
              <div className="flex items-center">
                <Icon name="User" size={16} className="mr-2" />
                {featuredNews.author}
              </div>
              <div className="flex items-center">
                <Icon name="Calendar" size={16} className="mr-2" />
                {formatDate(featuredNews.publishedAt)}
              </div>
              <div className="flex items-center">
                <Icon name="Tag" size={16} className="mr-2" />
                {featuredNews.category}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-news-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Читать полностью
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-news-orange text-news-orange hover:bg-news-orange hover:text-white px-6 py-3"
              >
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={featuredNews.imageUrl}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon
                  name="TrendingUp"
                  size={20}
                  className="text-news-orange"
                />
                <span className="text-sm font-medium">Популярная новость</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
