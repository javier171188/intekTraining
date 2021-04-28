let e = document.getElementsByClassName('exercise')[0];

var data = {"topic1":{"title":"Title 1", 
"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum!",
"image": "https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
"topic2": {"title":"Title 2", 
"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam?",
"image": "https://images.pexels.com/photos/2268516/pexels-photo-2268516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
"topic3":{"title": "Title 3", 
"text":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae!",
"image":"https://images.pexels.com/photos/332834/pexels-photo-332834.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
// remember to replace var data for a json file

let topics = Object.keys(data);

//When opening
var hash = new URL(document.URL).hash;
hash = hash.slice(1,);
if (topics.indexOf(hash)>=0){
  templateTwo(hash);
}else{
  onLanding();
  e.addEventListener('click',function(ev){
    let clicked = ev.target.getAttribute('class');
    
    if (topics.indexOf(clicked) >= 0){
        templateTwo(clicked);
    }
  });
}


//functions
function templateTwo(topic){
  let url_ob = new URL(document.URL);
  url_ob.hash = `#${topic}`;
  let new_url = url_ob.href;
  document.location.href = new_url;
  e.innerHTML = '';
  container = document.createElement('div');
  imageContainer = document.createElement('div');
  image = document.createElement('img');
  image.setAttribute('height', "28%");
  image.setAttribute('width', "22%");
  image.setAttribute('class',"imagetwo");
  image.setAttribute('src',data[topic]['image']);
  imageContainer.appendChild(image);
  container.appendChild(imageContainer);
  e.appendChild(container);
  title = document.createElement('h1');
  title.textContent += data[topic]['title'];
  e.appendChild(title);
  text = document.createElement('p');
  text.textContent += data[topic]['text'];
  e.appendChild(text);
  e.innerHTML += '<a href="">Go back</a>'
}


function onLanding(){
  let fragment = document.createDocumentFragment();
  for (let topic in data){
    div = document.createElement('div');
    div.setAttribute('id', topic);
    div.setAttribute('class', 'container')
    img = document.createElement('img');
    img.setAttribute('width','25%');
    img.setAttribute('height','30%');
    img.setAttribute('class','imageone');
    img.setAttribute('src', data[topic]['image']);
    img.setAttribute('class', topic)
    div.appendChild(img);
    divText = document.createElement('div');
    divText.setAttribute('class',topic);
    title = document.createElement('h1');
    title.setAttribute('class',topic);
    title.textContent += data[topic]['title'];
    divText.appendChild(title);
    divText.innerHTML += data[topic]['text'];
    div.appendChild(divText);
    fragment.appendChild(div);
  }
  e.appendChild(fragment);
}