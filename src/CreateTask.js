import add from './components/add';
import frac from './components/frac';

function CreateTask(task) {
    //const { type, val1, val2, explainer } = task;
    const {type} = task;
    //console.log(task)
    //console.log(type)
    let aufgabeDaten = []
    switch(type){
        case "add":
            aufgabeDaten = add()
        break;
        case "frac":
            aufgabeDaten = frac()
        break;
        default: 
            aufgabeDaten = add()
    }
    //let aufgabeDaten = eval(type + '()') || add();
    
    const processedTask = {
    text: `${aufgabeDaten[0]}`,
    answer: `${aufgabeDaten[1]}`,
    help: `${aufgabeDaten[2]}`,
    explainer: `${aufgabeDaten[3]}`,
    };
 
    return processedTask;
}
    
export default CreateTask;
    