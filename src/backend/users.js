const users = [] ;

const addUser = ( {id, name ,passsword }) => {
  name = name.trim().toLowerCase();
  

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, passsword };
  users.push(user);
  return { user };
};



const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => (
  users.find((user) => user.id === id)
);

const checkpassword = (id,passsword) => {
  if (getUser(id).passsword===passsword) {
  return true;
  } else {
  return  false;
  }
  
}


module.exports = { addUser, removeUser, getUser, checkpassword   };