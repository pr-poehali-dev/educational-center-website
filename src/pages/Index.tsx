import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Кассир торгового зала. Допуск к ККМ',
    category: 'Базовые навыки',
    duration: '2 недели',
    level: 'Начальный',
    description: 'Профессиональная подготовка кассиров с получением допуска к контрольно-кассовой машине',
    icon: 'ShoppingCart'
  },
  {
    id: 2,
    title: 'Пользователь ПК для школьников',
    category: 'Базовые навыки',
    duration: '1 месяц',
    level: 'Начальный',
    description: 'Основы работы с компьютером, операционной системой и офисными программами',
    icon: 'Monitor'
  },
  {
    id: 3,
    title: 'Графика и дизайн + Работа в сети Интернет',
    category: 'Базовые навыки',
    duration: '1.5 месяца',
    level: 'Начальный',
    description: 'Создание графики, работа с редакторами и безопасное использование интернета',
    icon: 'Palette'
  },
  {
    id: 4,
    title: 'Основы программирования',
    category: 'Программирование',
    duration: '2 месяца',
    level: 'Начальный',
    description: 'Введение в алгоритмы, логику программирования и основные концепции',
    icon: 'Code'
  },
  {
    id: 5,
    title: 'Объектно-ориентированное программирование',
    category: 'Программирование',
    duration: '2 месяца',
    level: 'Средний',
    description: 'Изучение ООП, классов, наследования и полиморфизма',
    icon: 'Box'
  },
  {
    id: 6,
    title: 'Web-программирование',
    category: 'Программирование',
    duration: '3 месяца',
    level: 'Средний',
    description: 'HTML, CSS, JavaScript и создание интерактивных веб-сайтов',
    icon: 'Globe'
  },
  {
    id: 7,
    title: '1С: Бухгалтерия',
    category: '1С',
    duration: '1.5 месяца',
    level: 'Начальный',
    description: 'Работа в программе 1С: Бухгалтерия, ведение учета и отчетность',
    icon: 'Calculator'
  },
  {
    id: 8,
    title: '1С: Зарплата и Управление персоналом',
    category: '1С',
    duration: '1 месяц',
    level: 'Начальный',
    description: 'Расчет заработной платы, кадровый учет и отчетность по персоналу',
    icon: 'Users'
  },
  {
    id: 9,
    title: '1С: Управление торговлей',
    category: '1С',
    duration: '1 месяц',
    level: 'Начальный',
    description: 'Автоматизация торговых операций, складской учет и ценообразование',
    icon: 'TrendingUp'
  },
  {
    id: 10,
    title: 'Переход с 1С: Предприятие 7.7',
    category: '1С',
    duration: '2 недели',
    level: 'Средний',
    description: 'Миграция данных и адаптация к новой версии платформы',
    icon: 'RefreshCw'
  },
  {
    id: 11,
    title: '1С: УНФ',
    category: '1С',
    duration: '3 недели',
    level: 'Начальный',
    description: 'Управленческий и налоговый учет для малого бизнеса',
    icon: 'FileText'
  },
  {
    id: 12,
    title: 'Программирование в системе "1С: Предприятие 8"',
    category: '1С',
    duration: '3 месяца',
    level: 'Продвинутый',
    description: 'Разработка конфигураций, работа с языком программирования 1С',
    icon: 'Terminal'
  },
  {
    id: 13,
    title: 'Администрирование в системе 1С',
    category: '1С',
    duration: '1 месяц',
    level: 'Продвинутый',
    description: 'Настройка системы, резервное копирование и обслуживание баз данных',
    icon: 'Settings'
  }
];

const testimonials = [
  {
    name: 'Анна Петрова',
    course: '1С: Бухгалтерия',
    text: 'Отличные курсы! Преподаватели доступно объясняют материал. После обучения устроилась на работу бухгалтером.',
    rating: 5
  },
  {
    name: 'Дмитрий Соколов',
    course: 'Web-программирование',
    text: 'Программа хорошо структурирована, много практики. Рекомендую всем, кто хочет войти в IT.',
    rating: 5
  },
  {
    name: 'Елена Васильева',
    course: 'Графика и дизайн',
    text: 'Замечательный курс для школьников! Дочь научилась работать с графическими редакторами.',
    rating: 5
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const categories = ['Все', 'Базовые навыки', 'Программирование', '1С'];

  const filteredCourses = selectedCategory === 'Все' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">EduCenter</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Записаться</Button>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-br from-accent/30 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Образовательный центр 
                <span className="text-primary"> для вашего успеха</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональное обучение 1С, программированию и IT-навыкам. 
                Опытные преподаватели, современные методики и практический подход.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Выбрать курс
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ec773b36-c859-409d-b271-94916dfe6676/files/147025b1-dcd6-4b7d-b9ac-af0a258a79a4.jpg" 
                alt="Обучение" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle>Опытные преподаватели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Практикующие специалисты с многолетним опытом</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-secondary" size={32} />
                </div>
                <CardTitle>Практический подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Реальные задачи и проекты для закрепления навыков</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="text-accent-foreground" size={32} />
                </div>
                <CardTitle>Сертификаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Официальные документы по окончании курсов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите направление обучения, которое поможет достичь ваших карьерных целей
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={course.icon as any} className="text-primary" size={24} />
                    </div>
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BarChart" size={16} />
                      {course.level}
                    </div>
                  </div>
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCategory !== 'Все' && filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Курсы в данной категории скоро появятся</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ec773b36-c859-409d-b271-94916dfe6676/files/c902f8a3-0eee-4484-ab08-268a9e608a95.jpg" 
                alt="Обучение 1С" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Почему выбирают нас?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Более 500 выпускников</h3>
                    <p className="text-muted-foreground">Успешно завершили обучение и работают по специальности</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Briefcase" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Помощь в трудоустройстве</h3>
                    <p className="text-muted-foreground">Сотрудничаем с ведущими компаниями региона</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Компьютерные классы с актуальным ПО</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших студентов</h2>
            <p className="text-lg text-muted-foreground">Узнайте, что говорят выпускники о нашем центре</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.course}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ec773b36-c859-409d-b271-94916dfe6676/files/4a712d2e-ae62-4367-bba8-4cbb1b5ebc8c.jpg" 
                alt="Программирование" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Начните обучение прямо сейчас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Записывайтесь на бесплатное пробное занятие и убедитесь в качестве нашего обучения
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span>Гибкий график обучения</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span>Группы до 10 человек</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span>Индивидуальный подход</span>
                </div>
              </div>
              <Button size="lg" className="mt-6">
                Записаться на пробное занятие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Ответим на все ваши вопросы и поможем выбрать курс</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@educenter.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Телефон" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить сообщение
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">EduCenter</span>
              </div>
              <p className="text-muted-foreground">Профессиональное обучение для вашего успеха</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Направления</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Базовые навыки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">1С курсы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О центре</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EduCenter. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
