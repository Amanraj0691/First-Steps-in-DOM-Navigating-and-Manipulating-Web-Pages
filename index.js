let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  
  

//   let bbox =  document.getElementById("")

user.forEach((ele) => {

    let bbox = document.createElement("div");
    bbox.style.height =  "150px";
    bbox.style.width = "290px";
    bbox.style.border = "2px solid red"
    bbox.style.backgroundColor ="yellowgreen"
    bbox.style.textAlign ="center"
    bbox.style.margin = "auto"
    bbox.style.padding ="2rem"

    

  
    let id1 = document.createElement("id");
    id1.textContent = ele.id;
    id1.id = "id0"

    let name1 = document.createElement("p");
    name1.textContent = ele.name;
    name1.id = "name0";

    let username1 = document.createElement("p");
    username1.textContent = ele.username;
    username1.id ="username0";

    let mail1 =document.createElement("a")
    mail1.id = "mail1";
    mail1.textContent = ele.email

    
  document.body.append(bbox);
  bbox.append(id1 , name1 , username1 , mail1);

});



