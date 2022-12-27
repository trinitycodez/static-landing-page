console.log("hello");
// space for construct

function Component(template: string, hookId: string){
    return function (constructor: any){
        const hookEl = document.getElementById("tri2");
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = "Emmanuel";
        }
        return class {
            name = "Ezekiel";
            getPrice(){}
        };
    };
}

@Component("<h1>Hello!</h1>", "app")
class Person {
    name = "GET OUT OF HERE";
    constructor(){
        console.log('Creating an Object...');
    }
}

// const person = new Person();
// console.log(person);