// 1. 
const hogwarts = {
  gryffindor: ["Seamus Finnigan", "Lee Jordan", "Parvati Patil"],
  slytherin: ["Pansy Parkinson", "Graham Montague", "Gregory Goyle"],
  ravenclaw: ["Cho Chang", "Roger Davies", "Padma Patil"],
  hufflepuff: ["Ernie MacMillan", "Justin Finch-Fletchley", "Hannah Abbott"]
}

sortGryffindor = (student) => {
  let {gryffindor} = hogwarts

  // Is there a difference between 1 & 2? If so, what is it?
  // 1.
  gryffindor = [...gryffindor, student]
  // 2.
  hogwarts.gryffindor = [...gryffindor]

} 

sortSlytherin = (student) => {
  let {slytherin} = hogwarts

  slytherin = [...slytherin, student]

  hogwarts.slytherin = [...slytherin]
} 


sortRavenclaw = (student) => {
  let {ravenclaw} = hogwarts

  ravenclaw = [...ravenclaw, student]

  hogwarts.ravenclaw = [...ravenclaw]
} 


sortHufflepuff = (student) => {
  let {hufflepuff} = hogwarts

  hufflepuff = [...hufflepuff, student]

  hogwarts.hufflepuff = [...hufflepuff]
} 

// In one line of code, create a function which takes 
goToCommonRoom = (house) => hogwarts[house]

// TESTS
sortGryffindor("Harry Potter")
sortSlytherin("Draco Malfoy")
sortRavenclaw("Luna Lovegood")
sortHufflepuff("Cedric Diggory")

console.log(goToCommonRoom("gryffindor"))

// 2.
// Create a function that returns the students from all the houses except Slytherin in one array.

battleOfHogwarts = () => {
  const {gryffindor, ravenclaw, hufflepuff} = hogwarts

  let battle = [...gryffindor, ...ravenclaw, ...hufflepuff]

  return battle
}

console.log(battleOfHogwarts())


// 3.
// Create a function which returns an array of all the hogwarts students who have a p in their names

letterP = () => {
  const {gryffindor, slytherin, ravenclaw, hufflepuff} = hogwarts

  let p = [...gryffindor, ...slytherin, ...ravenclaw, ...hufflepuff]

  return p.filter(student => student.includes("n"))

}

console.log(letterP())