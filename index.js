(function(){
  load('product.json');
})()

function load(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.timeout = 1000;
  xhr.send();

  xhr.onload = function() {
    alert(`Loaded: ${this.status} ${this.responseText}`);
    var context = {sn: "My New Post",
                    id: "First post!",
                    imageUrl: "/img/image.png",
                    name: "TEST NAME",
                    snippet: "DESCRIPTION ..."};
    var html    = template(context);
  };

  xhr.onerror = () => alert('Error');

  xhr.ontimeout = () => alert('Timeout!');
}

var options = {
  valueNames: [ 'sn', 'id', 'imageUrl', 'name', 'snippet' ]
};

var userList = new List('products', options);
