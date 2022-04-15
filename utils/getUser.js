const url = 'https://randomuser.me/api/'

export const getUser = async()=>{
    const response = await fetch(url);
    const data = await response.json()
    // destructuracion 
    const person = data.results[0]
    const {phone,email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {first,last} = person.name;
    const {dob:{age}} = person // otra forma de hacerlo
    const {street:{number,name}} = person.location
    
    return {
        phone,email,image,password,age,
        street:`${number} ${name}`,
        name: `${first} ${last}`,
    }
}