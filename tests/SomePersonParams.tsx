import PersonParameter from './Test'
import Limitation from './Test'
import CLimitation from './Test'
import BookParam from './Test'

function Lim(val, par, lim, ir){
    return {personParameterValue:val, bookParam: par, limits: lim, isRange: ir};
}

export const perseverance = {name:"perseverance",
limitations:[
    Lim(0, 0, [0, 80], true),
    Lim(1, 0, [0, 150], true),
    Lim(2, 0, [50, 250], true),
    Lim(3, 0, [100, 350], true),
    Lim(4, 0, [200, 500], true),
    Lim(5, 0, [250, 1000], true),
    Lim(6, 0, [300, 2000], true),
]};

export const drama = {name: "drama",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [60], false), // Пьесы и драматургия
    Lim(2, 2, [60, 90], false), // зарубежная драма
    Lim(3, 2, [60, 90, 109], false),

    Lim(4, 2, [60, 90, 109], false), // русская драма
    Lim(4, 3, [153], false), // любовная драма

    Lim(5, 2, [60, 90, 109], false), // русская драма
    Lim(5, 3, [153], false), // любовная драма
]};

export const thriller = {name:"thriller",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [98], false), // триллер
    Lim(2, 2, [98], false),
    Lim(3, 2, [98], false),

    Lim(4, 2, [98], false),
    Lim(4, 3, [249], false), // психологический триллер

    Lim(5, 2, [98], false),
    Lim(5, 3, [249], false), // психологический триллер
]};

export const fantasy = {name:"fantasy",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [12], false), // класика фентези
    Lim(2, 2, [12, 14], false), // зарубежное фентези
    Lim(3, 2, [12, 14, 17], false), // героическое
    Lim(4, 2, [12, 14, 17, 48, 133, 136], false), // боевое любовное русское
    Lim(4, 3, [26, 29], false), // эпическое приключенческое
]};

export const fantastic = {name:"fantastic",
limitations:[
    Lim(-1, 2, [], false),
    Lim(0, 2, [], false),
    Lim(1, 2, [6], false), // классика
    Lim(2, 2, [6, 8], false), // зарубежная
    Lim(3, 2, [6, 8, 7], false), // научная
    Lim(3, 3, [40], false), // советская
    Lim(4, 2, [6, 8, 7, 11, 15], false), // социальная космическая
    Lim(4, 3, [4, 40], false), // философская советская
]};

export const detective = {name:"detective",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [46], false), // классические
    Lim(2, 2, [46, 50], false), // зарубежные
    Lim(3, 2, [46, 50, 96], false), // современные
    Lim(3, 3, [205], false), // английские
    Lim(4, 2, [46, 50, 96], false), // современные
    Lim(4, 3, [205, 333], false), // английские приключенческие
]};

export const historical = {name:"historical",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [10], false), // исторические приключения

    Lim(2, 2, [10], false), // исторические приключения
    Lim(2, 3, [13], false), // исторические романы

    Lim(3, 2, [10, 51], false), // историческая фантастика
    Lim(3, 3, [13], false), // исторические романы

    Lim(4, 2, [10, 51, 52], false), // исторические любовные романы
    Lim(4, 3, [13], false), // исторические романы
]};

export const psycho_philosophy = {name:"psycho_philosophy",
limitations:[
    Lim(0, 2, [], false),
    Lim(1, 2, [], false),
    Lim(2, 3, [3], false), // психологическая проза
    Lim(3, 3, [3, 5], false), // философская проза
    Lim(4, 3, [3, 5, 4], false), // философская фантастика
    Lim(5, 3, [3, 5, 4], false), // философская фантастика
]};