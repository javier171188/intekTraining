let e = document.querySelector('.exercise');

/*var data = {"topic1":{"title":"Title 1", 
"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam perspiciatis dolore fugit magni aspernatur at, quo vero modi tempora excepturi ut ipsa impedit, ratione, eos reprehenderit cumque doloremque earum!",
"image": "https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
"topic2": {"title":"Title 2", 
"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur cupiditate quas adipisci odio? Doloremque libero vero alias, quos distinctio iusto consequatur eveniet quasi tenetur nemo, eaque voluptatum nesciunt veniam?",
"image": "https://images.pexels.com/photos/2268516/pexels-photo-2268516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
"topic3":{"title": "Title 3", 
"text":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quam sunt sed. Asperiores officiis cum qui tempora possimus distinctio fugit omnis itaque eum assumenda libero facere optio aspernatur, labore molestiae!",
"image":"https://images.pexels.com/photos/332834/pexels-photo-332834.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}*/




fetch("./data.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    allProcess(data);
  });



//functions
function allProcess(data){
  var topics = Object.keys(data);
  //When opening
  var hash = new URL(document.URL).hash;
  var fullHash =new URL(document.URL).hash;
  hash = hash.slice(1,);
  if (topics.indexOf(hash)>=0){
    templateTwo(hash,data);
  }else{
    if (fullHash.length>0){
      noTopic();
    } else {
      onLanding(data, topics);
    }
  }
  
  window.addEventListener('hashchange', function() {
    let currentHash = new URL(document.URL).hash;
    let fullHash = new URL(document.URL).hash;
    let topic = currentHash.slice(1);
    if (topics.indexOf(topic)>=0){
      templateTwo(topic,data);
    }else if(fullHash.length === 0){
      e.innerHTML = '';
      onLanding(data, topics);
    } else{
      noTopic();
    }
  });

}


function templateTwo(topic,data){
  let url_ob = new URL(document.URL);
  url_ob.hash = `#${topic}`;
  let new_url = url_ob.href;
  document.location.href = new_url;
  e.innerHTML = '';
  let temp = document.querySelector("#view1");
  let div = temp.content.querySelector('div');
  div.setAttribute('class','second');
  let image = div.querySelector('img');
  image.setAttribute('height', "200px");
  image.setAttribute('class',"imagetwo");
  image.setAttribute('src',data[topic]['image']);
  let textContent = div.querySelector('div');
  let title = textContent.querySelector('h2');
  title.textContent = data[topic]['title'];
  let p = textContent.querySelector('p');
  p.innerHTML = '';
  let text = document.createElement('p');
  text.innerHTML = 'trying';
  div.appendChild(text);
  let a = document.importNode(div, true);
  e.appendChild(a);
  
  /*
  container = document.createElement('div');
  imageContainer = document.createElement('div');
  image = document.createElement('img');
  image.setAttribute('height', "200px");
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
  e.appendChild(text);*/
  let link = document.createElement('a');
  link.textContent = 'Go Home';
  link.setAttribute('href', "");
  e.appendChild(link);
  
}


function onLanding(data, topics){
  for(let topic in data){
    let temp = document.querySelector("#view1");
    let div = temp.content.querySelector('div');
    div.setAttribute('id', topic);
    div.setAttribute('class', 'container');
    let img = div.querySelector('img');
    img.setAttribute('height','200px')
    img.setAttribute('class','imageone');
    img.setAttribute('src', data[topic]['image']);
    img.setAttribute('alt', data[topic]['alt']);
    img.setAttribute('class', topic);
    let divText = div.querySelector('div');
    divText.setAttribute('class',topic);
    let title = divText.querySelector('h2');
    title.setAttribute('class',topic);
    title.textContent = data[topic]['title'];
    let content = divText.querySelector('p');
    content.setAttribute('class',topic);
    content.innerHTML = data[topic]['text'];
    let a = document.importNode(div, true);
    let exercise = document.querySelector(".exercise");
    exercise.appendChild(a);
    e.addEventListener('click',function(ev){
      let clicked = ev.target.getAttribute('class');
      if (topics.indexOf(clicked) >= 0){
          templateTwo(clicked,data);
      }
    });
  }
}

function noTopic(){
  let p = document.createElement('p');
  p.innerHTML = "We do not have that topic";
  e.innerHTML = "";
  e.appendChild(p);
  let a = document.createElement('a');
  a.innerHTML = 'Go Home';
  a.setAttribute('href','');
  e.appendChild(a);
}