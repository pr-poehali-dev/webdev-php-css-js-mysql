export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: number;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
}

export const newsCategories: NewsCategory[] = [
  { id: "1", name: "Политика", slug: "politics" },
  { id: "2", name: "Экономика", slug: "economy" },
  { id: "3", name: "Технологии", slug: "tech" },
  { id: "4", name: "Спорт", slug: "sport" },
  { id: "5", name: "Культура", slug: "culture" },
  { id: "6", name: "Наука", slug: "science" },
];

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: "Новый технологический прорыв в области искусственного интеллекта",
    excerpt:
      "Российские ученые представили революционную разработку в сфере машинного обучения, которая может изменить подход к анализу данных.",
    content: "Полная статья о технологическом прорыве...",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    category: "Технологии",
    publishedAt: "2024-01-15T10:30:00Z",
    author: "Александр Петров",
    readTime: 5,
  },
  {
    id: "2",
    title: "Экономический рост показал положительную динамику",
    excerpt:
      "Аналитики отмечают устойчивый рост основных экономических показателей в текущем квартале.",
    content: "Детальный анализ экономической ситуации...",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    category: "Экономика",
    publishedAt: "2024-01-15T09:15:00Z",
    author: "Мария Сидорова",
    readTime: 7,
  },
  {
    id: "3",
    title: "Культурный фестиваль собрал рекордное количество участников",
    excerpt:
      "Международный фестиваль искусств привлек внимание творцов со всего мира.",
    content: "Репортаж с культурного фестиваля...",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
    category: "Культура",
    publishedAt: "2024-01-15T08:00:00Z",
    author: "Елена Козлова",
    readTime: 4,
  },
  {
    id: "4",
    title: "Спортивная команда одержала победу в чемпионате",
    excerpt:
      "Российская сборная показала отличные результаты на международных соревнованиях.",
    content: "Подробности спортивных достижений...",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    category: "Спорт",
    publishedAt: "2024-01-14T18:45:00Z",
    author: "Игорь Волков",
    readTime: 3,
  },
  {
    id: "5",
    title: "Научное открытие в области медицины",
    excerpt:
      "Ученые разработали новый метод лечения, который может помочь миллионам пациентов.",
    content: "Научная статья о медицинском прорыве...",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    category: "Наука",
    publishedAt: "2024-01-14T16:20:00Z",
    author: "Дмитрий Новиков",
    readTime: 6,
  },
  {
    id: "6",
    title: "Политические переговоры завершились успешно",
    excerpt:
      "Представители разных стран достигли важных договоренностей по ключевым вопросам.",
    content: "Анализ политических событий...",
    imageUrl:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
    category: "Политика",
    publishedAt: "2024-01-14T14:30:00Z",
    author: "Анна Смирнова",
    readTime: 8,
  },
];

export const featuredNews = mockNews[0];
export const latestNews = mockNews.slice(1);
