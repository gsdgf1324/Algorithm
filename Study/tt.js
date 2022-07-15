function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    console.log(title);
    console.log(width);
    console.log(height);
    console.log(items);
};

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};


showMenu(options);