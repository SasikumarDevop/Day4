const person={
    name:"Sasikumar G",
    age:24,
    Gender:"Male",
    Martialstatus:"Unamarried",
    Phoneno: 8526288328,
    Emailid: "infosasi7274@gmail.com",
    Education: ["SSLC","HSC","BCA"],
    Skills:["JAVASCRIPT","HTML","CSS"],
    Address: {
        Street: "MalaipuraStreet",
        Village: "Kurinjippai",
        Dist: "Villupuram",
        Pincode: 604205
    }

 }
// for(let key in person){
//     console.log(person[key])
//  }
person.Education.forEach(ele=>{console.log(ele)})
// person.Skills.forEach(ele=>{console.log(ele)})
// for(let key in person.Address)
// {
//     console.log(key)
// }






// Box method using in object

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["Gender"]);
// console.log(person["Martialstatus"]);
// console.log(person["Phoneno"]);
// console.log(person["Emailid"]);
// for( var i=0; i<=person["Education"].length-1; i++){
//     console.log(person["Education"][i]);
// }
// for( var i=0; i<person["Skills"].length; i++){
//     console.log(person["Skills"][i]);
// }
// console.log(person["Address"]["Street"]);
// console.log(person["Address"]["Village"]);
// console.log(person["Address"]["Dist"]);
// console.log(person["Address"]["Pincode"]);

// Obect using Dot method

// console.log(person.name);
// console.log(person.age);
// console.log(person.Gender);
// console.log(person.Martialstatus);
// console.log(person.Phoneno);
// console.log(person.Emailid);
// for( var i=0; i<person.Education.length; i++){
//     console.log(person.Education[i]);
// }
// for( var i=0; i<person.Skills.length; i++){
//     console.log(person.Skills[i]);
// }
// console.log(person.Address.Street);
// console.log(person.Address.Village);
// console.log(person.Address.Dist);
// console.log(person.Address.Pincode);