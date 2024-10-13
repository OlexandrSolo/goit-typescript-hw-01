type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

// const originalProfile: User = {
//     name: undefined,
//     surname: undefined,
//     email: "",
//     password: ""
// }

function createOrUpdateUser( initialValues: Partial<User1> ) {
    return initialValues
}

 createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
