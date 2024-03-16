import {perseverance} from './SomePersonParams'
import AnimeTest from './AnimeTest'

function variant(txt, pp, vals){
    return {text:txt, personParams:pp, values:vals};
}

function question(nm, vars){
    return {name:nm, variants: vars};
}

const DefaultTest = {id:1, name:"Для всех", description:"Хотите всерьез вкатиться в чтение? А может просто нет хорошей книги на примете? тогда воспользуйтесь нашим тестом и быть может вы найдете именно ту самую... книгу!",
    questions:[
    question("Пока что не готов, но скоро будет",
        [
            variant("ладно, жду!", [0],[3]),
            variant("не буду ждать", [0], [2]),
        ]
    ),

    question("Если Кирилл сделает",
        [
            variant("ДА, кирилл, сделай уже", [0], [2]),
            variant("хватит, мы все заждались уже", [0], [1]),
            variant("дада, все ждем", [0], [0]),
        ]
    ),

    question("Как часто вы смотрите аниме?",
        [
            variant("каждый день, после работы/учебы", [0], [2]),
            variant("как придется, но обычно раза 2-3 в неделю", [0], [1]),
            variant("раз в неделю, а может и меньше", [0], [0]),
        ]
    ),
], params:[perseverance]};

const allTests = [DefaultTest, AnimeTest];

export default variant;
export default DefaultTest;
export default allTests;