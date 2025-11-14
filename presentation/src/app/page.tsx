export default function Home() {
  const agenda = [
    {
      name: "Зачем Gemini Opal",
      detail: "Ключевые преимущества и позиционирование модели в экосистеме Gemini.",
    },
    {
      name: "Интеграция",
      detail: "Подключение через API, безопасность данных и архитектура решений.",
    },
    {
      name: "Практика",
      detail: "Готовые сценарии: ассистенты, аналитика, генерация знаний и мультимодальность.",
    },
    {
      name: "Запуск",
      detail: "Метрики качества, операционная поддержка и roadmap развития.",
    },
  ];

  const capabilityColumns = [
    {
      title: "Режимы работы",
      items: [
        {
          label: "Мультимодальность",
          description:
            "Понимание текста, изображений, аудио и структурированных данных в одном запросе.",
        },
        {
          label: "Динамический контекст",
          description:
            "Расширенный токен-лист и инструменты для потоковой передачи ответов в реальном времени.",
        },
        {
          label: "Оптимизация стоимости",
          description:
            "Сбалансированная производительность за счёт адаптивного управления температурой и Top-K.",
        },
      ],
    },
    {
      title: "Инструменты разработчика",
      items: [
        {
          label: "Gemini API & SDK",
          description:
            "Унифицированные клиенты для TypeScript, Python и REST с поддержкой Function Calling.",
        },
        {
          label: "Аппаратные ускорители",
          description:
            "Интеграция с TPU и Vertex AI для запуска ресурсоёмких пайплайнов и обучения на своих данных.",
        },
        {
          label: "Governance",
          description:
            "Контроль качества, контент-фильтры и аудит взаимодействий через Safety-тулы.",
        },
      ],
    },
    {
      title: "Бизнес-эффект",
      items: [
        {
          label: "Автоматизация знаний",
          description:
            "Сбор и обогащение ответов на запросы клиентов, снижение нагрузки на поддержку.",
        },
        {
          label: "Аналитика в реальном времени",
          description:
            "Глубокий анализ тональности, событий и трендов на основе неструктурированных данных.",
        },
        {
          label: "Новые продукты",
          description:
            "Персонализированные ассистенты, обучающие симуляторы и генерация контента.",
        },
      ],
    },
  ];

  const pipeline = [
    {
      title: "Discovery",
      description:
        "Формулировка задач, сбор пользовательских историй, определение KPI и ограничений.",
      accent: "Проектный старт",
    },
    {
      title: "Data & Safety",
      description:
        "Очистка данных, проверка на чувствительность, проектирование политик доступа и фильтров.",
      accent: "Контроль качества",
    },
    {
      title: "Prototype",
      description:
        "Быстрый PoC в Gemini Studio, проверка бизнес-гипотез и подбор параметров генерации.",
      accent: "Итерации",
    },
    {
      title: "Productization",
      description:
        "Вывод в прод с пайплайнами Vertex AI, мониторинг метрик и интеграция в процессы.",
      accent: "Масштабирование",
    },
  ];

  const caseStudies = [
    {
      company: "FinNova Bank",
      story:
        "Gemini Opal использован для анализа звонков контакт-центра: автоматическое резюмирование, выявление рисков и предложения по следующему шагу. SLA по обработке сократился с 12 до 2 минут.",
      metrics: ["-83% время ответа", "+18 NPS", "98% точность категорий"],
    },
    {
      company: "EduLab",
      story:
        "Генерация персональных учебных траекторий на основе мультимодального профиля ученика. Ассистент подбирает материалы, видео и практику с учётом эмоций и прогресса.",
      metrics: ["1.6x вовлеченность", "-35% churn студентов", "Пилот < 6 недель"],
    },
  ];

  const toolkit = [
    {
      title: "Gemini Studio",
      points: [
        "Тестирование промтов, сравнение моделей и визуализация ответов.",
        "Versioning: фиксация успешных промтов и контроль изменений.",
      ],
    },
    {
      title: "Function Calling",
      points: [
        "Оркестрация действий из одного запроса.",
        "Интеграция с внешними сервисами (CRM, ERP, базы знаний).",
      ],
    },
    {
      title: "Vertex AI Guardrails",
      points: [
        "Настройка безопасных ответов и политика редактирования.",
        "Автоматический аудит и тревоги по нарушению правил.",
      ],
    },
  ];

  const roadmap = [
    {
      phase: "Спринт 1",
      focus: "Onboarding & PoC",
      result:
        "Обучение команды, запуск пилотного сценария, формирование библиотеки промтов.",
    },
    {
      phase: "Спринт 2-3",
      focus: "Интеграция & Метрики",
      result:
        "Подключение к продовым данным, построение мониторинга, внедрение A/B тестов.",
    },
    {
      phase: "Спринт 4+",
      focus: "Масштабирование",
      result:
        "Расширение на новые процессы, автоматизация обновления знаний, запуск RAG.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.25),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:py-32 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300">
              Gemini Opal
            </p>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Презентация: запуск продуктов с Gemini Opal
            </h1>
            <p className="text-lg text-slate-200 sm:text-xl">
              Практическое руководство для продуктовых и инженерных команд о
              том, как построить ценность на базе последнего поколения моделей
              Gemini. Инструменты, архитектура, безопасность и реальные кейсы —
              в одном плейбуке.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#agenda"
                className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Перейти к программе
              </a>
              <a
                href="#cases"
                className="rounded-full border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-sky-400"
              >
                Посмотреть кейсы
              </a>
            </div>
          </div>
          <div className="grid w-full max-w-xl gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Roadmap</span>
              <span>Q4 2024</span>
            </div>
            <div className="space-y-3">
              {roadmap.map((stage) => (
                <div
                  key={stage.phase}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-sky-300">
                    <span>{stage.phase}</span>
                    <span>{stage.focus}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{stage.result}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              * Переход между фазами сопровождается ревью метрик качества и
              обновлением рисков.
            </p>
          </div>
        </div>
      </header>

      <main className="relative flex flex-col gap-24 pb-32">
        <section
          id="agenda"
          className="mx-auto w-full max-w-6xl px-6"
          aria-labelledby="agenda-title"
        >
          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
            <div>
              <h2
                id="agenda-title"
                className="text-3xl font-semibold text-slate-50"
              >
                Программа презентации
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Структура встречи построена вокруг полного жизненного цикла
                продукта — от стратегического обоснования до масштабирования и
                поддержки.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {agenda.map((item) => (
                <article
                  key={item.name}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-sky-400/60"
                >
                  <h3 className="text-lg font-semibold text-slate-50 group-hover:text-sky-300">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.15),_transparent_65%)]" />
          <div className="relative mx-auto w-full max-w-6xl rounded-[40px] border border-slate-800/70 bg-slate-900/40 px-6 py-16 sm:px-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                Ключевые тезисы
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-slate-50 sm:text-4xl">
                Gemini Opal — единая платформа принятия решений на базе данных
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Благодаря мультимодальности и встроенным механизмам безопасности
                модель подходит как для клиентских ассистентов, так и для
                внутренних аналитических задач. Оптимальные стоимости инференса
                позволяют масштабировать использование без потери качества.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {capabilityColumns.map((column) => (
                <div
                  key={column.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-100">
                    {column.title}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {column.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-sm font-semibold text-sky-300">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pipeline"
          className="mx-auto w-full max-w-6xl px-6"
          aria-labelledby="pipeline-title"
        >
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            <div className="space-y-6">
              <h2
                id="pipeline-title"
                className="text-3xl font-semibold text-slate-50"
              >
                Путь от идеи до продакшена
              </h2>
              <p className="text-base text-slate-300">
                Используйте этапы ниже как готовый чек-лист при планировании
                внедрения. Каждый шаг сопровождается измеримыми результатами и
                артефактами.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pipeline.map((step, index) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <span className="absolute right-6 top-6 text-5xl font-semibold text-slate-800">
                    {index + 1}
                  </span>
                  <p className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                    {step.accent}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="toolkit"
          className="mx-auto w-full max-w-6xl px-6"
          aria-labelledby="toolkit-title"
        >
          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <div>
              <h2
                id="toolkit-title"
                className="text-3xl font-semibold text-slate-50"
              >
                Инженерный набор
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Комбинация инструментов, позволяющая быстро собрать
                пользовательские решения и обеспечить контроль качества.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-800 bg-slate-900/60">
              <div className="grid divide-y divide-slate-800/60">
                {toolkit.map((block) => (
                  <div key={block.title} className="grid gap-4 p-8 md:grid-cols-[200px_1fr]">
                    <h3 className="text-lg font-semibold text-sky-200">
                      {block.title}
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      {block.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="cases"
          className="mx-auto w-full max-w-6xl px-6"
          aria-labelledby="cases-title"
        >
          <div className="mb-10 flex flex-col gap-4 text-center">
            <span className="self-center rounded-full border border-slate-700 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Кейсы
            </span>
            <h2
              id="cases-title"
              className="text-3xl font-semibold text-slate-50 sm:text-4xl"
            >
              Как компании создают ценность на Gemini Opal
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Результаты пилотов показывают, что сочетание мультимодальных
              данных и автоматизации действий приносит измеримый эффект уже в
              первый квартал запуска.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((item) => (
              <article
                key={item.company}
                className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {item.company}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{item.story}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-sky-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="next-steps"
          className="mx-auto w-full max-w-6xl px-6"
          aria-labelledby="next-steps-title"
        >
          <div className="rounded-[40px] border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/80 p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h2
                  id="next-steps-title"
                  className="text-3xl font-semibold text-slate-50 sm:text-4xl"
                >
                  Следующие шаги команды
                </h2>
                <p className="text-base text-slate-300">
                  Обновите карту экспериментов, соберите UX-обратную связь и
                  подготовьте запуск на прод. Дорожная карта уже готова —
                  остаётся согласовать владельцев этапов.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://ai.google.dev/gemini-api/docs"
                  className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Документация Gemini API
                </a>
                <a
                  href="https://cloud.google.com/vertex-ai"
                  className="rounded-full border border-sky-400/70 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-sky-200"
                >
                  Запросить пилот
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/60 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-slate-500">
            Gemini Opal Playbook · 2024
          </p>
          <p>
            Контакты команды:{" "}
            <a
              href="mailto:gemini-opal-team@example.com"
              className="text-sky-300 hover:text-sky-200"
            >
              gemini-opal-team@example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
