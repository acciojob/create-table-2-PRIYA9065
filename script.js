const mytable = document.getElementById("myTable");
function createTable() {
    //Write your code here
  let rows = prompt("Input number of rows");
  let columns = prompt("Input number of columns");
	for(let i = 0; i < rows; i++){
		const row = mytable.insertRow(i);
		for(let j = 0; j < columns; j++){
			const column = mytable.insertCell(j);
			row.append(column);
		}
	}
}
