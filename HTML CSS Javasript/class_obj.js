
        let student = {}; // It will create an empty object   

        let person={

            firstName : "Niti",
            lastName : " Dwivedi"
        }                                // These are attributes of a Person class object 

        person.firstName = "Jatin"
        person.lastName = " Mehta"

        person.age =78;  // Adding a new attribute to a person class object

        console.log('age' in person);
        console.log("Niti" in person);

        delete person.age;

        console.log(person); // to print the entire object details

        let address = ["tilak nagar" , "delhi"];
        const colorCodes = [4,6,7,4];
        const mixedArray = ["hello" ,45454 , true , {address:"New Delhi"}]; 

        console.log(address[0]);
        console.log(address);

    
