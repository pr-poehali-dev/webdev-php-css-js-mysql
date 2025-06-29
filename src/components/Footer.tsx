import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { newsCategories } from "@/lib/mockData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-oswald font-bold text-news-orange">
              НОВОСТИ.РФ
            </div>
            <p className="text-gray-400 text-sm">
              Актуальные новости России и мира. Оперативные сводки, аналитика и
              эксклюзивные материалы.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-news-orange p-2"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-news-orange p-2"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-news-orange p-2"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-news-orange p-2"
              >
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold">Разделы</h3>
            <ul className="space-y-2">
              {newsCategories.map((category) => (
                <li key={category.id}>
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal justify-start"
                  >
                    {category.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold">О проекте</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal justify-start"
                >
                  О нас
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal justify-start"
                >
                  Редакция
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal justify-start"
                >
                  Контакты
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal justify-start"
                >
                  Реклама
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-oswald font-semibold">Подписка</h3>
            <p className="text-gray-400 text-sm">
              Получайте главные новости на email
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-news-orange hover:bg-orange-600 text-white px-4">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Новости.РФ. Все права защищены.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal"
            >
              Политика конфиденциальности
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-news-orange p-0 h-auto font-normal"
            >
              Условия использования
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
