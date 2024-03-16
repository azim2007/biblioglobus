const TagsDict:{[key:string]:number} ={
    "Сборник рассказов":0,
    "Экранизации":1,
    "Социальная проза":2,
    "Психологическая проза":3,
    "Философская фантастика":4,
    "Философская проза":5,
    "Авантюрные приключения":6,
    "Английская классика":7,
    "Иллюстрированное издание":8,
    "Становление героя":9,
    "Опасные приключения":10,
    "Американская классика":11,
    "Портрет эпохи":12,
    "Исторические романы":13,
    "Психологическая фантастика":14,
    "Детская классика":15,
    "Французская классика":16,
    "Невероятные приключения":17,
    "Авторский сборник":18,
    "Далёкое будущее":19,
    "Судьба человека":20,
    "Ироничная проза":21,
    "Антиутопия":22,
    "Миры будущего":23,
    "Нобелевская премия по литературе":24,
    "Автобиографическая проза":25,
    "Эпическое фэнтези":26,
    "Американская литература":27,
    "Внеземные цивилизации":28,
    "Приключенческое фэнтези":29,
    "Социальная сатира":30,
    "Проза жизни":31,
    "Захватывающие приключения":32,
    "Повести":33,
    "Ксенофантастика":34,
    "Английская литература":35,
    "Борьба за власть":36,
    "Житейские истории":37,
    "Придворные интриги":38,
    "Магический реализм":39,
    "Советская фантастика":40,
    "Спасение мира":41,
    "Великие русские писатели":42,
    "Школьная программа":43,
    "Исторические личности":44,
    "Фантастические рассказы":45,
    "Индейцы":46,
    "Магические миры":47,
    "Советская классика":48,
    "Сатира":49,
    "Семейная сага":50,
    "Хоррор":51,
    "Взросление":52,
    "Книги о животных":53,
    "Интеллектуальная проза":54,
    "Квест":55,
    "Путешествия во времени":56,
    "Немецкая классика":57,
    "Женские судьбы":58,
    "Семейное чтение":59,
    "Рассказы":60,
    "Текстовый материал":61,
    "Советская эпоха":62,
    "История любви":63,
    "Нравственные ценности":64,
    "Пираты":65,
    "Параллельные миры":66,
    "Лексический материал":67,
    "Мистические тайны":68,
    "Загадочные события":69,
    "Космические приключения":70,
    "Жизненные ценности":71,
    "Адаптированный текст":72,
    "Вторая мировая война":73,
    "Волшебные миры":74,
    "Инопланетяне":75,
    "Жизненный выбор":76,
    "Пороки общества":77,
    "Повороты судьбы":78,
    "Современная классика":79,
    "Поиск сокровищ":80,
    "Вторжение «чужих»":81,
    "Книги для старшего школьного возраста":82,
    "Роман-эпопея":83,
    "Россия XIX века":84,
    "Романтические истории":85,
    "Мистическая проза":86,
    "Борьба за выживание":87,
    "Нравственный выбор":88,
    "Издательство Corpus":89,
    "Свидетели эпохи":90,
    "Французская литература":91,
    "Истории о любви":92,
    "Иные миры":93,
    "Бессмертие":94,
    "Близкое будущее":95,
    "Космические путешествия":96,
    "Премия «Хьюго»":97,
    "Тамплиеры":98,
    "Королевские династии":99,
    "Природа и человек":100,
    "Морские сражения":101,
    "Гражданская война":102,
    "Красочные иллюстрации":103,
    "Тайны прошлого":104,
    "Будущее человечества":105,
    "Умирающая Земля":106,
    "Мировой бестселлер":107,
    "Космоопера":108,
    "Выживание человечества":109,
    "Русская эмиграция":110,
    "Духовные ценности":111,
    "Историческая сага":112,
    "Сентиментальные романы":113,
    "Превратности судьбы":114,
    "Северная Америка":115,
    "Золотоискатели":116,
    "Авантюрные романы":117,
    "Средневековье":118,
    "Антивоенная литература":119,
    "Революция":120,
    "Робинзонада":121,
    "Двуязычная литература (билингва)":122,
    "Остросюжетная фантастика":123,
    "Жизнь после смерти":124,
    "Хроноопера":125,
    "Русско-японская война":126,
    "Отечественная война 1812 года":127,
    "Время и судьбы":128,
    "Дореволюционная Россия":129,
    "Сказки с картинками":130,
    "Средние века":131,
    "Книги о детстве":132,
    "Смешные истории":133,
    "Средневековая Франция":134,
    "Охотники за сокровищами":135,
    "Предательство":136,
    "Детям и родителям":137,
    "Отважные герои":138,
    "Мифические существа":139,
    "Любовные приключения":140,
    "Фантастические миры":141,
    "Авторские методики":142,
    "Древние боги":143,
    "Сюрреализм":144,
    "Галактические войны":145,
    "Провокационные романы":146,
    "Рыцарские ордена":147,
    "Эмигрантская проза":148,
    "Французька література":149,
    "Смысл жизни":150,
    "Жизненные трудности":151,
    "Реализм":152,
    "Любовная драма":153,
    "История Руси":154,
    "Романтические отношения":155,
    "Викторианская Англия":156,
    "Самиздат":157,
    "Вечные вопросы":158,
    "Воспоминания":159,
    "Японская литература":160,
    "Русские писатели":161,
    "Живая природа":162,
    "Мистические романы":163,
    "В поисках счастья":164,
    "Освоение Америки":165,
    "Африка":166,
    "Морские путешествия":167,
    "Викторианская эпоха":168,
    "Романтическое фэнтези":169,
    "Король Артур":170,
    "Магические способности":171,
    "«Темный Властелин»":172,
    "Метод комментированного чтения":173,
    "Психоделика":174,
    "11 класс":175,
    "Эксперименты над людьми":176,
    "Экранизированный бестселлер":177,
    "Сверхспособности":178,
    "Космические миры":179,
    "Искусственный интеллект":180,
    "Утопия":181,
    "Супергерои":182,
    "Великая Отечественная война":183,
    "Романы-притчи":184,
    "Первая мировая война":185,
    "Філософська проза":186,
    "Русская литература":187,
    "Рассказы о животных":188,
    "Раздвоение личности":189,
    "Быт XIX века":190,
    "Философские притчи":191,
    "Исторические события":192,
    "Поиск предназначения":193,
    "Духовные поиски":194,
    "Женская проза":195,
    "Сказочные приключения":196,
    "Философские концепции":197,
    "Записки путешественников":198,
    "Литература XIX века":199,
    "Интриги":200,
    "Любовные интриги":201,
    "Царская Россия":202,
    "История Франции":203,
    "Благородный разбойник":204,
    "Английские детективы":205,
    "Любовные испытания":206,
    "Поиски смысла жизни":207,
    "Постапокалиптика":208,
    "Польская литература":209,
    "Космические войны":210,
    "Интеллектуальная фантастика":211,
    "Призраки":212,
    "Спасение человечества":213,
    "Приключенческая фантастика":214,
    "Освоение космоса":215,
    "Историческая авантюра":216,
    "Редакция Елены Шубиной":217,
    "Фашизм":218,
    "Жизнь в СССР":219,
    "Крестьянство":220,
    "Старая Москва":221,
    "Психологические драмы":222,
    "Светская жизнь":223,
    "Русский характер":224,
    "Национальный менталитет":225,
    "Классическая поэзия":226,
    "Философская поэзия":227,
    "Мировая литература":228,
    "Первая любовь":229,
    "10 класс":230,
    "Философские сказки":231,
    "Автобиографические романы":232,
    "Сильные женщины":233,
    "Загадки прошлого":234,
    "Книги для среднего школьного возраста":235,
    "Книги о подростках":236,
    "Поучительные истории":237,
    "Месть":238,
    "Австралия":239,
    "Кораблекрушение":240,
    "Эзотерические учения":241,
    "Литературная сказка":242,
    "Остросюжетная проза":243,
    "Лесные приключения":244,
    "Человеческие страсти":245,
    "Кругосветное путешествие":246,
    "Комментарий специалиста":247,
    "Остросюжетные романы":248,
    "Психологические триллеры":249,
    "Женские истории":250,
    "Поэмы":251,
    "Готические рассказы":252,
    "Древние легенды":253,
    "Драконы":254,
    "Мистические детективы":255,
    "Фантасмагория":256,
    "Малая проза":257,
    "Постмодернизм":258,
    "Необъяснимые явления":259,
    "Древний мир":260,
    "Терраформирование":261,
    "Адаптированный английский":262,
    "Изучение иностранных языков":263,
    "Смертельная опасность":264,
    "Экспедиции":265,
    "Роман-катастрофа":266,
    "Научные открытия":267,
    "Изобретения":268,
    "Тоталитаризм":269,
    "Россия начала XX века":270,
    "История Европы":271,
    "Власть и общество":272,
    "Эссе":273,
    "Факты биографии":274,
    "Производственный роман":275,
    "Страстная любовь":276,
    "Москва":277,
    "СССР":278,
    "Криминальные драмы":279,
    "Старообрядчество":280,
    "Военная проза":281,
    "Художественно-документальная литература":282,
    "Исторические хроники":283,
    "Начало XX века":284,
    "Нацизм":285,
    "Казачество":286,
    "Советские лагеря":287,
    "Духовная мудрость":288,
    "Вечные истины":289,
    "Позитивная проза":290,
    "История Москвы":291,
    "История городов":292,
    "Путь к Богу":293,
    "Норвежская литература":294,
    "Лауреаты Нобелевской премии":295,
    "Литературный анализ":296,
    "Экзистенциализм":297,
    "Дневники":298,
    "Париж":299,
    "Детская дружба":300,
    "Пьесы":301,
    "Договор с нечистой силой":302,
    "9 класс":303,
    "Дворянство":304,
    "Душа человека":305,
    "Нигилизм":306,
    "Молодое поколение":307,
    "Литературное наследие":308,
    "Отечественная история":309,
    "Дружба":310,
    "Аристократия":311,
    "Иносказания":312,
    "Вопросы бытия":313,
    "Религиозная философия":314,
    "Судьба России":315,
    "Трактаты":316,
    "Литературные памятники":317,
    "Повседневная жизнь":318,
    "Китайская литература":319,
    "Сборники стихотворений":320,
    "Золотодобыча":321,
    "Остросюжетная литература":322,
    "Древняя Греция":323,
    "Книги для девочек":324,
    "Интересные факты":325,
    "Индия":326,
    "Дикий Запад":327,
    "Знаменитые полководцы":328,
    "Рыцарские романы":329,
    "Религиозные войны":330,
    "Семейные тайны":331,
    "Становление личности":332,
    "Приключенческие детективы":333,
    "Загадочные явления":334,
    "Проклятия":335,
    "Романтическая любовь":336,
    "Магические артефакты":337,
    "Добро и зло":338,
    "Мистический триллер":339,
    "Вампиры":340,
    "Темные тайны":341,
    "Интеллектуальный бестселлер":342,
    "Романтическая проза":343,
    "Мифологические сюжеты":344,
    "Очерки":345,
    "Сражения":346,
    "Кинобестселлеры":347,
    "Древнее зло":348,
    "Книги для чтения на английском языке":349,
    "Подводный мир":350,
    "Каменный век":351,
    "Авантюрная фантастика":352,
    "Спецслужбы":353,
    "Космические пираты":354,
    "Колонизация Марса":355,
    "Альтернативная история":356,
}