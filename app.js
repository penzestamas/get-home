function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
    var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
    var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');

    // Számítsd ki a szükséges üzemanyag-mennyiséget
    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);

    // Számítsd ki a leeresztendő üzemanyag-mennyiséget
    var fuelToOffload = tankCapacity - requiredFuel;
    
    alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();