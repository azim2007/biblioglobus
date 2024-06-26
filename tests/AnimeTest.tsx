import {perseverance, drama, thriller, detective, fantasy, fantastic, historical, psycho_philosophy} from './SomePersonParams'

function variant(txt, pp, vals){
    return {text:txt, personParams:pp, values:vals};
}

function question(nm, vars){
    return {name:nm, variants: vars};
}

const AnimeTest = {id:2, name:"Для анимешников", description:"Вы любите аниме, но не читаете книги? Тогда этот тестик для вас! К сожалению, сейчас очень много людей смотрит аниме, вместо того, чтобы читать. Надеемся, этот тест хоть чуточку исправит положение",
    questions:[
    question("Насколько длинные аниме вы любите?",
        [
            variant("50-100 серий, а можно и больше!", [0], [3]),
            variant("26-49 серий", [0], [2]),
            variant("меньше 26 серий", [0], [1]),
            variant("фильмы по 1-1,5 часа, на большее меня не хватает", [], []),
        ]
    ),

    question("Какое из этих аниме вам больше нравится?",
        [
            variant("унесенные призраками", [1, 3], [1, 1]),
            variant("крутой учитель Онидзука", [1], [1]),
            variant("евангелион", [4], [1]),
            variant("тетрадь смерти", [2, 5], [1, 1]),
        ]
    ),

    question("Нравится ли вам аниме \"Босоногий Гэн\" и почему?",
        [
            variant("да, у него хороший сюжет и персонажи", [1], [1]),
            variant("да, там хорошо отражены исторические события", [6], [1]),
            variant("нет, я не люблю аниме подобного жанра", [1], [-1]),             // -1 ALERT!!!!!
            variant("нет, оно мне показалось затянутым / скучным / я не смог на нем сконцентрироваться", [], []),
            variant("я его не смотрел", [], []),
        ]
    ),

    question("Как часто вы смотрите аниме?",
        [
            variant("каждый день, после работы/учебы", [0], [2]),
            variant("как придется, но обычно раза 2-3 в неделю", [0], [1]),
            variant("раз в неделю, а может и меньше", [], []),
        ]
    ),

    question("Какое из этих аниме вам больше нравится?",
        [
            variant("город, в котором меня нет", [5], [1]),
            variant("созданный в бездне", [3, 1], [1, 1]),
            variant("токийский гуль (1-2 сезоны)", [2], [1]),
            variant("ковбой Бибоп", [4], [1]),
        ]
    ),

    question("Понравилось ли вам аниме \"Парад смерти\" и по каким причинам?",
        [
            variant("да, оно заставило меня серьезно задуматься над жизнью и смертью и о том, что будет после",
            [7], [1]),
            variant("нет, оно мне показалось скучным", [], []),
            variant("да, мне понравилась его мрачная обстановка и оно вызывало у меня чувство волнения",
            [2], [1]),
            variant("я не смотрел это аниме", [], []),
        ]
    ),

    question("Хотите ли вы начать читать книги вместо просмотра аниме в свободное время?",
        [
            variant("да (собственно, для этого тест и прохожу)", [0], [1]),
            variant("нет, но у меня есть свободное время и на книги", [], []),
            variant("нет, не хочу тратить много времени на чтение книг", [0], [-1]),     // -1 ALERT!!!!!!!
        ]
    ),

    question("Смотря аниме, я обычно ...",
        [
            variant("ассоциирую себя с главным героем, сопереживаю ему", [1], [1]),
            variant("смотрю на героев и происходящее \"сверху\", пытаюсь оценивать их действия с разных точек зрения", 
            [7], [1]),
            variant("уделяю больше внимания замысловатому сюжету, раскрытию побочных героев с разных сторон", 
            [5], [1]),
        ]
    ),

    question("Нравится ли вам аниме \"Монстр\" и почему?",
        [
            variant("да, мне понравился сам сюжет и раскрытие истории главного антагониста", [5], [1]),
            variant("да, мне понравилось, как в нем накаляется обстановка", [2], [1]),
            variant("да, оно заставило меня сильно задуматься над некоторыми вопросами", [7], [1]),
            variant("нет, оно слишком длинное и изобилует филлерами", [], []),
            variant("я не смотрел это аниме", [], []),
        ]
    ),

    question("Что из нижеперечисленного вам больше всего понравилось в аниме \"Берсерк\" (1 сезон)?", 
        [
            variant("развитие событий в условиях средневековья и сословного строя", [6], [1]),
            variant("мысли о несправедливости жизни и достижении свободы человеком, отраженные в аниме", 
            [7], [1]),
            variant("то, как в этом аниме была использована магия и иные элементы фэнтези", [3], [1]),
            variant("не смотрел это аниме / мне они не понравились", [], []),
        ]
    ),

    question("Любите ли вы читать ранобэ / мангу?",
        [
            variant("да, ранобэ и манги больше, чем аниме, поэтому больше выбор", [], []),
            variant("да, так как в ранобэ и манге зачастую лучше раскрыты персонажи, сюжетные моменты и т. д.",
            [7], [1]),
            variant("нет, аниме оказывает на меня большее воздействие", [1], [1]),
            variant("я не пробовал читать ранобэ и мангу", [], []),
        ]
    ),

    question("Что вам кажется главной особенностью Невероятных приключений Джо Джо?",
        [
            variant("действия аниме происходят в различных временных промежутках: от 19 века и до наших дней",
            [6], [1]),
            variant("запоминающиеся персонажи и их противостояния противникам, сюжет", [1], [1]),
            variant("хорошо прописанный мир со стэндами, хаманом, всякой нежитью и прочим", [3], [1]),
            variant("я не смотрел это шедевр", [], []),
        ]
    ),

    question("Большинство аниме, из тех, что я смотрю у меня ассоциируются с ...",
        [
            variant("идеализированной Японией / любой другой страной, моей собственной жизнью",
            [1], [1]),
            variant("далеким, но реальным прошлым", [6], [1]),
            variant("чем-то, чего не может быть в действительности и в будущем", [3], [1]),
            variant("будущим или альтернативой настоящему", [4], [1]),
        ]
    ),

    question("Вам нравится аниме / манга \"Акира\"?",
        [
            variant("да, так как там хорошо показан киберпанк и упадок культуры", [4], [1]),
            variant("аниме мне не понравилось, а манга понравилась, так как там лучше прописан сюжет и взаимоотношения персонажей",
            [1], [1]),
            variant("понравилось и аниме и манга, но манга на голову выше аниме", [1, 4], [1, 1]),
            variant("нет, я не люблю подобные аниме и мангу", [], []),
            variant("я не смотрел это аниме", [], []),
        ]
    ),

    question("Понравилось ли вам аниме \"Эхо террора\"?",
        [
            variant("да, оно заставило меня задуматься о психологии террористов и о том, зачем совершаются терракты", 
            [7], [1]),
            variant("да, мне понравилось то, как велось расследование и неоднозначность и загадочность реальных мотивов преступников",
            [5], [1]),
            variant("да, оно выводило меня на эмоции и держало в напряженнии почти все время, что я его смотрел",
            [2], [1]),
            variant("нет, оно мне показалось скучным и концовка не впечатлила", [], []),
            variant("я не смотрел это аниме", [], []),
        ]
    ),

    question("Что вам больше всего нравится в фильмах Хаяо Миядзаки?", 
        [
            variant("элементы японской мифологии, придающие его фильмам самобытность", [6], [1]),
            variant("сеттинг его фильмов: природа, волшебные существа и прочее", [3], [1]),
            variant("мне нравится размышлять над посылом его фильмов, думать, что хотел сказать автор тем-то и тем-то", 
            [7], [1]),
            variant("не смотрел его фильмы / мне они не понравились", [], []),
        ]
    ),

    question("Смотрите ли вы аниме в транспорте?", 
        [
            variant("да, если ехать долго", [], []),
            variant("да, часто так делаю, так как делать в транспорте нечего", [], []),
            variant("нет, это неудобно и можно пропустить свою остановку", [], []),
            variant("нет, мне это мешает сконцентрироваться на аниме", [], []),
        ]
    ),

    question("Что вам больше всего понравилось в аниме \"Меланхолия Харухи Судзумии\"?", 
        [
            variant("смотреть, как Кён (главный герой) постепенно пытается привыкнуть и разобраться в том, что происходит", 
            [5], [1]),
            variant("фантастично-комичное мироустройство, где главным богом является Харухи, и вокруг нее вертятся экстрасенсы, люди из будущего и инопланетяне", 
            [4], [1]),
            variant("вообще, мне больше понравилось Исчезновение Харухи Судзумии, а сериал показался скучноватым", 
            [1], [1]),
            variant("я не смотрел это аниме", [], []),
        ]
    ),
    // максимумы:
    // perseverance 6
    // drama        -1 - 9
    // thriller     5
    // fantasy      6
    // fantastic    5
    // detective    6
    // historical   5
    // philosophy   7
], params:[perseverance, drama, thriller, fantasy, fantastic, detective, historical, psycho_philosophy]};

export default AnimeTest;