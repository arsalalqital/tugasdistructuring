//distructuring array//

 const tugas =["judul tugas","prioritas tugas","tenggak waktu"];

const [urutantugaSatu,urutantugaDua,urutantugaTiga] =tugas

 console.log(urutantugaSatu,urutantugaDua,urutantugaTiga);


//Destructuring objek//

const person = {
    nama: "arsal alqital",
    usia: 29,
    pekerjaan: "web developer",
}

const { nama, usia, pekerjaan } = person;

console.log(nama, usia ,pekerjaan);


// Contoh destructuring dengan alias dan default value
const user = {
    firstName: 'arsal',
    lastName: 'alqital',
    age: 29
  };
  
  // Destructuring dengan alias dan default value
  const { firstName: fName = 'nama panggilan', lastName: lName, age: userAge = 25 } = user;
  
  console.log(`Hello, ${fName} ${lName}! You are ${userAge} years old.`);
  