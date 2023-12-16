const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let count = 0;
  
    data.forEach((person) => {
      if (person.profession === "developer") {
        count++;
        console.log(person.name);
      }
    });
  
    if (count === 0) {
      console.log("I apologize, but there are no developers present here.");
    }
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:").trim();
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:").trim();
  
    data.push({ name, age, profession });
    console.log("The data you provided has been added.");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].profession === "admin") {
        data.splice(i, 1);
      }
    }
    console.log("All admin profiles have been removed.");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "Rahul", age: 24, profession: "developer" },
      { name: "Aditya", age: 21, profession: "designer" },
    ];
  
    const resultArray = data.concat(dummyArray);
    console.log("Here is your concatenated array.", resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = Math.floor(totalAge / data.length);
    console.log("The average age of all profiles is : ", avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some((person) => person.age > 25);
    console.log(
      above25
        ? "Yes, there is at least one profile with an age above 25."
        : "No, there is no profile with an age above 25."
    );
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = new Set(data.map((person) => person.profession));
    console.log("This is a list of all professions.");
    Array.from(professions).forEach((profession) => console.log(profession));
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("The array has been sorted in ascending order based on age.");
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const johnToUpdate = data.find(
      (person) => person.name === "john" && person.profession !== "manager"
    );
  
    if (johnToUpdate) {
      johnToUpdate.profession = "manager";
      console.log("John's profession has been updated to 'manager'");
    } else {
      console.log("No eligible John found for profession update");
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
      if (person.profession === "developer" || person.profession === "admin") {
        count[person.profession] = (count[person.profession] || 0) + 1;
      }
      return count;
    }, {});
  
    console.log("Developer Count:", professionCount.developer || 0);
    console.log("Admin Count:", professionCount.admin || 0);
  }