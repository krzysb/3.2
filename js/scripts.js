function LocalDB(name) {
    this.name = name;
}
LocalDB.prototype.save = function (key, value) {
        this.key = this.name + "." + key;
        this.value = value;
        window.localStorage.setItem(this.key, JSON.stringify(this.value));
    }
    // Tworzona jest nowa instancja,
    // w której należy zapamiętać nazwę "DB1"
var DB1 = new LocalDB("DB1");
var DB2 = new LocalDB("DB2");
LocalDB.prototype.get = function (key) {
        this.key = this.name + "." + key;
        var output = window.localStorage[this.key];
        if (output) {
            output = JSON.parse(output);
        }
        console.log(output);
    }
    // Jakiś obiekt do zapisania
var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};

var tomek = {
    firstName: "Tomasz",
    lastName: "Nowak",
    age: 20

};

// Na prototypie LocalDB znajdować się
// musi metoda save, która przyjmuje
// parę klucz-wartość, a wartość powinna
// być przed zapisaniem przepuszczona
// przez JSON.stringify
DB1.save("janek", janek);
DB1.save("tomek", tomek);
DB2.save("janek", janek);
DB2.save("tomek", tomek);

// Prototyp LocalDB powinien również
// posiadać metodę get, która odczyta
// podany klucz, przepuszczając wartość
// przez JSON.parse

DB1.get("janek");
DB1.get("tomek");
DB2.get("janek");
DB2.get("tomek");


// Porada. Aby móżna było tworzyć bazy danych
// o różnych nazwach, przy zapisywaniu poszczególnych
// danych, do klucza dodawaj nazwę bazy danych,
// np. "DB1.janek"