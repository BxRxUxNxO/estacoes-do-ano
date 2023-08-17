function checkSeason() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new Date(dateInput);
    const month = inputDate.getMonth() + 1; // Months are 0-based
  
    let season = "";
  
    if (month >= 3 && month <= 5) {
      season = "Primavera";
    } else if (month >= 6 && month <= 8) {
      season = "Verão";
    } else if (month >= 9 && month <= 11) {
      season = "Outono";
    } else {
      season = "Inverno";
    }
  
    const seasonOutput = document.getElementById("seasonOutput");
    seasonOutput.textContent = `A estação da data informada é: ${season}`;
  }
  