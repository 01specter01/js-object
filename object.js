{
    einkaufenGehen: true;
}

const todo = {
    Aufgaben: [
        { beschreibung: "einkaufenGehen", erledigt: false },
        { beschreibung: "wohnung putzen", erledigt: false },
        { beschreibung: "essen kochen", erledigt: false },
        { beschreibung: "waesche waschen", erledigt: false },
        { beschreibung: "yaman wecken", erledigt: false },
    ],
    info: function () {
        console.log(
            `Die Todoliste zeigt an, alle die false sind, bleiben noch zu erledigen: ${this.Aufgaben[0].beschreibung} => ${this.Aufgaben[0].erledigt}, ${this.Aufgaben[1].beschreibung} => ${this.Aufgaben[1].erledigt}, ${this.Aufgaben[2].beschreibung} => ${this.Aufgaben[2].erledigt},  ${this.Aufgaben[3].beschreibung} => ${this.Aufgaben[3].erledigt}, ${this.Aufgaben[4].beschreibung} => ${this.Aufgaben[4].erledigt}`
        );
    },
    einkaufen: function () {
        return (this.Aufgaben[0].erledigt = true);
    },
    putzen: function () {
        return (this.Aufgaben[1].erledigt = true);
    },
    kochen: function () {
        return (this.Aufgaben[2].erledigt = true);
    },
    waesche: function () {
        return (this.Aufgaben[3].erledigt = true);
    },
    wecken: function () {
        return (this.Aufgaben[4].erledigt = true);
    },
    loeschen: function (i) {
        return delete this.Aufgaben[i].erledigt;
    },
    weitereAufgabe: function (beschreibung) {
        let neueAufgabe = { beschreibung: beschreibung, erledigt: false };
        console.log(neueAufgabe);
        return this.Aufgaben.push(neueAufgabe);
    },
};
console.log(todo.Aufgaben);
todo.info();
console.log(todo.einkaufen());
todo.info();
console.log(todo.putzen());
todo.info();
console.log(todo.kochen());
todo.info();
console.log(todo.waesche());
todo.info();
console.log(todo.wecken());
todo.info();
console.log(todo.loeschen(4));
todo.info();
console.log(todo.weitereAufgabe("GartenArbeit"));
todo.info();
