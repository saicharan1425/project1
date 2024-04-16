function fetchUser(){
    fetch('https://randomuser.me/api/')
    .then((res)=> res.json())
    .then((data) => displayUser(data.results[0]))
};

function displayUser(user){
   const userDisplay = document.querySelector('#user')
   const randomColor = Math.floor(Math.random()*16777215).toString(16)
    if(user.gender ==='female')
    document.body.style.backgroundColor = `#${randomColor}` 
  else document.body.style.backgroundColor = `#${randomColor}`

        // document.body.style.backgroundColor = '#fe8ca0';
        // else document.body.style.backgroundColor = '#3b82f6';
    
        userDisplay.innerHTML = ` <div class="flex justify-between">
        <div class="flex">
          <img
            class="w-48 h-48 rounded-full mr-8"
            src=${user.picture.medium}
          />
          <div class="space-y-3">
            <p class="text-xl">
              <span class="font-bold">Name : </span>${user.name.first} ${user.name.last}
            </p>
            <p class="text-xl">
              <span class="font-bold">Email: </span> ${user.email}
            </p>
            <p class="text-xl">
              <span class="font-bold">Phone: </span> ${user.phone}
            </p>
            <p class="text-xl">
              <span class="font-bold">Location: </span> ${user.location.country}
            </p>
            <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
          </div> 
        </div>`
}

document.querySelector('#generate').addEventListener('click', fetchUser)

fetchUser()

