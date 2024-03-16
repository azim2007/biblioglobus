class Test{
    name:string;
    description:string;
    questions:Question[];
    personParams:PersonParameter[];

    constructor(name, description, questions, pp){
        this.name = name;
        this.description = description;
        this.questions = questions;
        this.personParams = pp;
    }
}

class Question{
    text:string;
    variants:Variant[];

    constructor(text, variants){
        this.text = text;
        this.variants = variants;
    }
}

class Variant{
    text:string;
    changeParamId:number[];
    value:number[];

    constructor(text, change, value){
        this.text = text;
        this.changeParamId = [change];
        this.value = [value];
    }

    constructor(text, changes, values){
        this.text = text;
        this.changeParamId = changes;
        this.value = values;
    }
}

class PersonParameter{
    name:string;
    limits:Limitation[];

    constructor(name, limits){
        this.name = name;
        this.limits = limits;
    }
}

class Limitation{
    personParamValue:number;
    bookParam:BookParam;
    limits:number[];
    isRange:boolean;

    constructor(personParamValue, bookParam, limits, isRange){
        this.personParamValue = personParamValue;
        this.bookParam = bookParam;
        this.limits = limits;
        this.isRange = isRange;
    }
}

function CLimitation(personParamValue, bookParam, limits, isRange){
    return new Limitation(personParamValue, bookParam, limits, isRange);
}

function CVariant(text, change, value){
    return new Variant(text, change, value);
}

function CPersonParameter(name, limits){
    return new PersonParameter(name, limits);
}

function CQuestion(text, variants){
    return new Question(text, variants);
}

function CTest(name, description, questions, pp){
    return new Test(name, description, questions, pp);
}

const BookParam = {
    pageCount: 0,
    year: 1,
    genre: 2,
    tag: 3,
};

export default Question;
export default Test;
export default Variant;
export default PersonParameter;
export default Limitation;
export default BookParam;
export default CLimitation;
export default CPersonParameter;
export default CQuestion;
export default CTest;
export default CVariant;