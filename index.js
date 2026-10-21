const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];

// 1
function getAllNames(arr) {
    return arr.map(person => person.name);
}
console.log(getAllNames(data));

// 2
function BornBefore1990(arr) {
    return arr.filter(person => {
        const yearStr = person.birthday.slice(-4);
        const year = parseInt(yearStr);

        return year < 1990;
    });
}

console.log(BornBefore1990(data));

//3
function getFoodCount(arr) {
    const foodCount = {};
  
    arr.forEach(person => {
      const meats = person.favoriteFoods.meats || [];
      const fish = person.favoriteFoods.fish || [];
      const allFoods = [...meats, ...fish];
  
      allFoods.forEach(food => {
        if (foodCount[food]) {
          foodCount[food] += 1;
        } else {
          foodCount[food] = 1;
        }
      });
    });
  
    return foodCount;
  }
  
  console.log(getFoodCount(data));
