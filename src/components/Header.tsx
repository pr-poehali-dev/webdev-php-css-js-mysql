import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { newsCategories } from "@/lib/mockData";

const Header = () => {
  return (
    <header className="bg-white border-b border-news-light-gray sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-news-light-gray">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-news-gray">
              {new Date().toLocaleDateString("ru-RU", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-news-gray hover:text-news-orange"
            >
              <Icon name="User" size={16} className="mr-1" />
              Войти
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-news-gray hover:text-news-orange"
            >
              <Icon name="Settings" size={16} className="mr-1" />
              Настройки
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-oswald font-bold text-news-orange">
              НОВОСТИ.РФ
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {newsCategories.slice(0, 5).map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="text-gray-700 hover:bg-news-orange hover:text-white font-medium px-4 py-2 rounded-md transition-colors"
                >
                  {category.name}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Поиск новостей..."
                className="w-64 pl-10 pr-4 py-2 border border-news-light-gray rounded-md focus:ring-2 focus:ring-news-orange focus:border-transparent"
              />
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-2.5 text-news-gray"
              />
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
