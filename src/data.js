const data = [
{
    id: 1,
    title: "Devil's Reign",
    price: "$3580",
    image: ["https://i.ibb.co/S3PtpGP/static-wikia-nocookie-net-640.jpg"],   
    description: " The story that’s been building for years is here! Wilson Fisk went from Kingpin to mayor of the biggest city in America and is going to bring his full criminal and political power to bear on the super heroes who call NYC home. The man who once destroyed Daredevil has set his sights on The Fantastic Four, Iron Man, Captain America, Spider-Man, Jessica Jones, Luke Cage and more. And since it’s Fisk, once he takes them all down, you know he’s going to sign it. CROSSBONES! TASKMASTER! TYPHOID MARY! SHOCKER! WHIPLASH! RHINO! KRAVEN! Fisk has an ARMY of super villains at his command – and this is just his opening salvo. For years, Fisk has waited for his time to strike, and YOU WON’T BELIEVE the aces he’s got up his sleeves!  " ,
    stock: "5",
    category: {
        name: "Crossover",
        id: 2
    },
    categoryId: 2,
},

{
    id: 2,
    title: "Spider-Man: Family Business",
    price: "$1350",
    image: ["https://i.ibb.co/cJsM7S4/static-wikia-nocookie-net-640-1.jpg"],
    description: " Someone has Spider-Man in their crosshairs, and the only person in the Marvel Universe who can save him is-Peter Parker's sister?! As the web-slinger meets family he never knew, will she end up becoming his greatest ally, or the one who damns him? And what does the Kingpin of Crime have to do with it? This self-contained graphic novel — written by Eisner Award-winner Mark Waid (DAREDEVIL) and acclaimed author James Robinson (Superman), and painted by the legendary Gabriele Dell'Otto (SECRET WAR) — brings you the web-slinger's darkest hour-and greatest triumph! " ,
    stock: "5",    
    category: {
        name: "Spider-Man",
        id: 1
    },
    categoryId: 1,
},

{
    id: 3,
    title: "House of M Ultimate Edition",
    price: "$3280",
    image: ["https://i.ibb.co/WnhttLg/static-wikia-nocookie-net-640-2.jpg"],    
    description: "  The Scarlet Witch is out of control, and the fate of the entire world is in her hands. Will Magneto help his daughter or use her powers to his own benefit? Starring the Astonishing X-Men and the New Avengers! " ,
    stock: "0",
    category: {
        name: "Crossover",
        id: 2
    },
    categoryId: 2,
}
];


  module.exports = {
    data,
  }  

/*   export const getData= () => {
    return new Promise((resolve, reject)=>{
        setTimeout (() => {
            return resolve(data);
        }, 2000)
    })
}   */