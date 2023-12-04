console.log("APIFetch-prueba")
const url = "https://reqres.in/api/users";

/*
La API fetch en JavaScript proporciona una interfaz para realizar 
solicitudes de red, como solicitudes HTTP, de manera asíncrona. 
Es una forma moderna y más poderosa de realizar solicitudes HTTP 
en comparación con métodos más antiguos, como XMLHttpRequest.
*/

const getData =  (url) => {
    fetch(url)
    .then(response => {
        console.log("status code: " + response.status);
        return response.json();     
    })
    .then( data => {
        console.log(data)
        imprimirEnDom(data);
})
    .catch((error) => {
            console.log("Error en la solicitud: ");
            console.warn(error);
    });
    
};

getData(url);

function imprimirEnDom(data){
  const container = document.getElementById("data-container");

  //  propiedad 'data'
  if (data.hasOwnProperty('data') && Array.isArray(data.data)) {
    
    container.innerHTML = '';

     //  encabezados 
     const headerRow = document.createElement('div');
     headerRow.classList.add('row', 'align-items-center', 'mb-3');
 
     // Encabezados
     const headers = ['ID', 'First Name', 'Last Name', 'E-mail', 'Image'];
     headers.forEach(header => {
       const col = document.createElement('div');
       col.classList.add('col');
   
       const h3 = document.createElement('h3');
       h3.textContent = header;
       col.appendChild(h3);
 
       headerRow.appendChild(col);
     });
 
     
     container.appendChild(headerRow);
 
     // Iterar sobre los elementos 
     data.data.forEach(item => {
       // una fila para cada usuario
       const row = document.createElement('div');
       row.classList.add('row', 'align-items-center', 'mb-3');
 
       // id
       const colId = createColumn(item.id);
       row.appendChild(colId);
 
       // first name
       const colFirstName = createColumn(item.first_name);
       row.appendChild(colFirstName);
 
       // last name
       const colLastName = createColumn(item.last_name);
       row.appendChild(colLastName);
 
       // emmail
       const colEmail = createColumn(item.email);
       row.appendChild(colEmail);
 
       // image
       const colImage = createImageColumn(item.avatar);
       row.appendChild(colImage);
 
       container.appendChild(row);
     });
   } else {
     console.error('La respuesta no tiene la estructura esperada.');
   }
 }
 
 function createColumn(content) {
   const col = document.createElement('div');
   col.classList.add('col');
   
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   li.textContent = content;
   ul.appendChild(li);
   col.appendChild(ul);
 
   return col;
 }
 
 function createImageColumn(imageUrl) {
   const col = document.createElement('div');
   col.classList.add('col');
   
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   
   const img = document.createElement('img');
   img.src = imageUrl;
   img.alt = 'User Avatar';
   img.classList.add('rounded-circle', 'img-fluid');
   
   li.appendChild(img);
   ul.appendChild(li);
   col.appendChild(ul);
 
   return col;
 }


 