function tableFromJson() {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            var response =JSON.parse( this.responseText);
          
            var jpeople=response.stock;


            var col = [];
            for (var i = 0; i < jpeople.length; i++) {
                for (var key in jpeople[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
    
            // Create a table
            var table = document.createElement("table");
    
            // Create table header row using the extracted headers above
            // table row
            var tr = table.insertRow(-1);                   
    
            for (var i = 0; i < col.length; i++) {
                // table header
                var th = document.createElement("th");      
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
    
            // add json data to the table as rows
            for (var i = 0; i < jpeople.length; i++) {
    
                tr = table.insertRow(-1);
    
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jpeople[i][col[j]];
                }
            }
    
            // Now, add the newly created table with json data, to a container
            var divShowData = document.getElementById('showData');
            divShowData.innerHTML = "";
            divShowData.appendChild(table);

            
            
        
      
        }
    }
    xhttp.open("get","list.json",true);
    xhttp.send();
}