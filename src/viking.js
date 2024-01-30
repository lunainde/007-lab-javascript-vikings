// console.log("test")

// Soldier----------------------------
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        //remove the received damage from health property
        this.health -= damage;
    }
}

// Viking should extend from soldier
class Viking extends Soldier {
    constructor(name, health, strength){ //all arguments
    super(health, strength)              //super form soldier
        this.name = name;                //+ name   
    };
    // attack(){
    //     return this.strength;
    // };
    receiveDamage(damage){
        //remove the received damage from health property
        this.health -= damage;
        // should return "NAME/DAMAGE", if the Viking is still alive
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
        // should return "NAME has died in act of combat", if the Viking dies
            return `${this.name} has died in act of combat`
        }
    };
    battleCry(){
        return "Odin Owns You All!"
    };
}

// Saxon------------------------
class Saxon extends Soldier {
    //constructor/arguments inherited from soldier.
    receiveDamage(damage){
        //remove the received damage from health property
        this.health -= damage;
        if (this.health > 0){
            // if the Saxon is still alive
            return `A Saxon has received ${damage} points of damage`  
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War | Bonus-------------------
class War {
    //should receive 0 arguments
    constructor(){
        // should assign an empty array to the vikingArmy property
        this.vikingArmy = []; //to store vikings soldiers
        // should assign an empty array to the saxonArmy property
        this.saxonArmy = []; //to store saxon soldiers
    }
    // should be a declared
    // receive 1 argument (a Viking object) & add the received Viking to the army[]
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        //A Saxon (chosen at Math.random()) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.

        //randomViking selected from vikingArmy[] to attack!!!
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        //randomSaxon selected from saxonArmy[] to be attacked
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        
        //should make Saxon receiveDamage() equal to the strength of a Viking
        const result = randomSaxon.receiveDamage(randomViking.strength)
       
        // should remove dead saxons from the army
        if (saxon.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1);  //remove 1 element => random selected
        }
        return result;

        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        
    }
    saxonAttack(){}
    showStatus(){} 
}


//------.SPLICE()----------------------------
            /*const months = ['Jan', 'March', 'April', 'June'];
            months.splice(1, 0, 'Feb');
            // Inserts at index 1
            console.log(months);
            // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

            months.splice(4, 1, 'May');
            // Replaces 1 element at index 4
            console.log(months);
            // Expected output: Array ["Jan", "Feb", "March", "April", "May"]*/

            /*splice(start)
            splice(start, deleteCount)
            splice(start, deleteCount, item1)
            splice(start, deleteCount, item1, item2)
            splice(start, deleteCount, item1, item2, /* …, */



//======CONSOLE.LOG-TERMINAL======
/*➜  007-lab-javascript-vikings git:(master) ✗ ls
README.md       src
SpecRunner.html tests
jasmine
➜  007-lab-javascript-vikings git:(master) ✗ ./src
➜  src git:(master) ✗ node viking.js 
test */
//'Alf','Alvis','Bo','Frey','Hans','Jo','Magnus','Odin','Olaf','Tor' 
//-----------OPEN PREVIEW IN CODE ------------
//right click on README.md open preview
//-----------test--> live---------------------
//SpecRunner.html cmd+l, cmd+o