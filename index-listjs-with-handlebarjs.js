// Get index table details from Json
let load = (url) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.timeout = 1000;
  xhr.send();

  xhr.onload = function() {
    //console.log(this.responseText);
    if(this.status==200){
      let result_json = this.responseText;
      result_json = '{"products-list":'+result_json+'}';
      let data = JSON.parse(result_json);
      let template = Handlebars.compile( $('#handlebar-template').html() );
      $('#tablebody').append( template(data) );
    }
  };

  xhr.onerror = () => alert('Error');

  xhr.ontimeout = () => alert('Timeout!');
}
load('product.json');
