// Get index table details from Json
(function(){
  load('product.json');
})()
function load(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.timeout = 1000;
  xhr.send();

  xhr.onload = function() {
    //console.log(this.responseText);
    if(this.status==200){
      var result_json = JSON.parse(this.responseText);
      var html_template = '';
      for (var key in result_json) {
        if (result_json.hasOwnProperty(key)) {
          html_template += '<tr><td class="sn">'+result_json[key].prod_sn+'</td>'+
          '<td class="id">'+result_json[key].prod_id+'</td>'+
          '<td class="imageUrl">'+result_json[key].prod_imageUrl+'</td>'+
          '<td class="name">'+result_json[key].prod_name+'</td>'+
          '<td class="snippet">'+result_json[key].prod_snippet+'</td></tr>';
        }
      }
      html_template += '<tr><ul class="pagination"></ul></tr>';
      document.getElementById("tablebody").innerHTML=html_template;
    }
  };

  xhr.onerror = () => alert('Error');

  xhr.ontimeout = () => alert('Timeout!');
}
