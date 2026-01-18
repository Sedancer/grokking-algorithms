// we dont have hash tables in ts natively but we can use objects or maps

let book: {[key: string]: number} = {};
book["apple"] = 0.67;
book["milk"] = 1.49;
book["avocado"] = 1.49; 

console.log(book);


const bookMap = new Map<string, number>();
bookMap.set("apple", 0.67);
bookMap.set("milk", 1.49);
bookMap.set("avocado", 1.49);

console.log(bookMap.get("apple")); // 0.67