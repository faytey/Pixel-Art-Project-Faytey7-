// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#submit").on('click', makeGrid);
$('#pixelCanvas').on("click", "td", addColor)



function makeGrid(event) {

    event.preventDefault();


    //variable declaration
    let table = $('#pixelCanvas');
    let height = $("#inputHeight").val();
    let weight = $("#inputWeight").val();
    let mainTable = "";

    //clear table
    while(table.empty()){

    
    //loop to create table
    for (let x = 1; x <= height; x++) {

        mainTable += "<tr>";
        for (let y = 1; y <= weight; y++) {
            mainTable += '<td></td>'
        }
        mainTable += "</tr>";
    }
    return table.append(mainTable);
}}

function addColor() {
    let color = $('#colorPicker').val();
    $(this).css("background-color", color);
}