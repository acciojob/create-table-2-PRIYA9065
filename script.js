
function createTable() {
    //Write your code here

	let rows = prompt("Input number of rows");
    let columns = prompt("Input number of columns");
	if(columns){
	    var mytable = document.getElementById("myTable");
        mytable.innerHTML = ""; 
	
	    for(let i = 0; i < rows; i++){
		    const row = mytable.insertRow(i);
			for(let j = 0; j < columns; j++){
				const column = row.insertCell(j);
				column.innerHTML = "Row-" + (i) + "Column-" + (j);
			}
		}
	}
	
}
