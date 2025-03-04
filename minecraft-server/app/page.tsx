import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Server, BookOpen, BarChart2, User, ChevronRight, Copy, ExternalLink } from "lucide-react"
import ServerStats from "../components/server-stats"
import GuideCard from "../components/guide-card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-orange-800 bg-black/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="EgaPixel Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-orange-500">EgaPixel</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
              Главная
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
              О сервере
            </Link>
            <Link href="#stats" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
              Статистика
            </Link>
            <Link href="#guides" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
              Гайды
            </Link>
            <Link href="#personal" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
              Личный кабинет
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-orange-500 text-orange-500 hover:bg-orange-950 hover:text-orange-400"
            >
              Войти
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Играть сейчас</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Minecraft Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Выживание</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
              <span className="text-orange-500">EgaPixel</span> - Лучший сервер Minecraft PE
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Присоединяйтесь к нашему сообществу и погрузитесь в увлекательный мир выживания с уникальными
              возможностями и дружелюбным комьюнити.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-950 hover:text-orange-400"
              >
                Узнать больше
              </Button>
            </div>
            <div className="mt-8 p-4 bg-orange-950/50 rounded-lg border border-orange-800 flex items-center justify-between">
              <span className="text-sm font-mono">play.egapixel.com</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-400 hover:text-orange-300 hover:bg-orange-950/70"
                onClick={() => navigator.clipboard.writeText("play.egapixel.com")}
              >
                <Copy className="h-4 w-4 mr-2" />
                Копировать IP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-black to-orange-950/20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">О нашем сервере</h2>
              <p className="text-gray-300 mb-4">
                EgaPixel - это уникальный сервер Minecraft PE с режимом выживания, где каждый игрок может найти что-то
                интересное для себя. Мы создали комфортную атмосферу для игры и развития.
              </p>
              <p className="text-gray-300 mb-6">
                Наш сервер предлагает множество уникальных возможностей, включая кастомные крафты, экономику, PvP-арены,
                ивенты и многое другое. Администрация сервера всегда готова помочь и ответить на ваши вопросы.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-200">Стабильная работа 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-200">Дружелюбное сообщество</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-200">Регулярные обновления</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-200">Уникальная экономика</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video rounded-lg overflow-hidden border-4 border-orange-600 shadow-lg shadow-orange-600/20">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Сервер Minecraft"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-orange-600 text-white p-3 rounded-lg shadow-lg">
                <p className="font-bold">Версия: 1.20+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">Статистика сервера</h2>
          <ServerStats />
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Присоединяйтесь к сотням игроков, которые уже оценили наш сервер!</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Подключиться сейчас</Button>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-16 bg-gradient-to-b from-black to-orange-950/20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Гайды по игре</h2>
            <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
              Все гайды <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="Начало игры на сервере"
              description="Узнайте, как начать игру на нашем сервере и получить максимум удовольствия с первых минут."
              image="/placeholder.svg?height=300&width=500"
              category="Для новичков"
            />
            <GuideCard
              title="Экономика и торговля"
              description="Подробное руководство по экономической системе сервера, заработку и торговле с другими игроками."
              image="/placeholder.svg?height=300&width=500"
              category="Экономика"
            />
            <GuideCard
              title="PvP арены и сражения"
              description="Как участвовать в PvP сражениях, какое снаряжение выбрать и тактики для победы."
              image="/placeholder.svg?height=300&width=500"
              category="PvP"
            />
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section id="personal" className="py-16 bg-black">
        <div className="container">
          <div className="bg-gradient-to-r from-orange-950 to-black p-8 rounded-lg border border-orange-800">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-orange-500">Личный кабинет игрока</h2>
                <p className="text-gray-300 mb-6">
                  Зарегистрируйтесь на нашем сайте, чтобы получить доступ к личному кабинету. В нём вы сможете
                  отслеживать свою статистику, управлять аккаунтом и получать эксклюзивные награды.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <User className="h-4 w-4 mr-2" />
                    Регистрация
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-950 hover:text-orange-400"
                  >
                    Войти в аккаунт
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-black/50 p-6 rounded-lg border border-orange-700">
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">Возможности личного кабинета:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Отслеживание статистики</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Управление аккаунтом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Эксклюзивные награды</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-300">Участие в ивентах</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gradient-to-b from-black to-orange-950/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Скоро</Badge>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">В разработке</h2>
            <p className="text-gray-300 mb-8">
              В настоящее время мы активно готовим для вас множество интересных материалов. Это только начало, и в
              ближайшее время на сайте появятся дополнительные разделы с полезной информацией и эксклюзивными
              обновлениями.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-black/50 p-4 rounded-lg border border-orange-800">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Форум сообщества</h3>
                <p className="text-sm text-gray-400">
                  Общайтесь с другими игроками, делитесь опытом и находите новых друзей
                </p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-orange-800">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Магазин предметов</h3>
                <p className="text-sm text-gray-400">
                  Приобретайте уникальные предметы и возможности для комфортной игры
                </p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-orange-800">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Карта мира</h3>
                <p className="text-sm text-gray-400">Интерактивная карта мира сервера с отметками важных локаций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-900 py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="EgaPixel Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-xl font-bold text-orange-500">EgaPixel</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучший сервер Minecraft PE с режимом выживания и уникальными возможностями.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-orange-400 text-sm">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-orange-400 text-sm">
                    О сервере
                  </Link>
                </li>
                <li>
                  <Link href="#stats" className="text-gray-400 hover:text-orange-400 text-sm">
                    Статистика
                  </Link>
                </li>
                <li>
                  <Link href="#guides" className="text-gray-400 hover:text-orange-400 text-sm">
                    Гайды
                  </Link>
                </li>
                <li>
                  <Link href="#personal" className="text-gray-400 hover:text-orange-400 text-sm">
                    Личный кабинет
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-orange-500" />
                  <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm">
                    Discord
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-orange-500" />
                  <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm">
                    VK
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-orange-500" />
                  <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm">
                    Telegram
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-orange-500" />
                  <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Присоединяйтесь</h3>
              <p className="text-gray-400 text-sm mb-4">
                Подключайтесь к нашему серверу прямо сейчас и станьте частью нашего сообщества!
              </p>
              <div className="bg-orange-950/50 p-3 rounded border border-orange-800 text-center">
                <p className="text-sm font-mono mb-2 text-white">play.egapixel.com</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-orange-400 hover:text-orange-300 hover:bg-orange-950/70 w-full"
                  onClick={() => navigator.clipboard.writeText("play.egapixel.com")}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Копировать IP
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-900/50 text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} EgaPixel. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

