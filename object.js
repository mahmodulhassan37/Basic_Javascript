const student = {
    name : "mahmud",
    id: 124,
    address: "Kuril Dhaka",
    isSingle: true,

    movies: [{name:'number 1',year:2015},{name:"king khan",year:2018}],
    act: function()
    {
        console.log("Acting like sakib")

    },

    friends : ['khan','apu','afridi','zaoad'],

    car: {
        brand : "Tesla",
        price : 2500000,
        made: 2024,
        manufacture:{
            CEO : "Elon Mask",
            type :"inovative",
            purpose: "Business",
            country: "USA"
        }
    }
}

//console.log(student);
console.log(student.friends[0]);
console.log(student.movies[0].name);
console.log(student.car.manufacture.country);
student.act()