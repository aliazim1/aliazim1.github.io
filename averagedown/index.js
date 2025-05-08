document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.querySelector(".btn");

  calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const sharesOwned = parseFloat(document.getElementById("buy1").value);
    const avgPriceOwned = parseFloat(document.getElementById("avg1").value);
    const newShares = parseFloat(document.getElementById("buy2").value);
    const newPrice = parseFloat(document.getElementById("avg2").value);

    if (
      isNaN(sharesOwned) ||
      isNaN(avgPriceOwned) ||
      isNaN(newShares) ||
      isNaN(newPrice)
    ) {
      alert("Please enter valid numbers in all fields.");
      return;
    }

    const totalShares = sharesOwned + newShares;
    const totalCost = sharesOwned * avgPriceOwned + newShares * newPrice;
    const newAverage = totalCost / totalShares;

    document.getElementById(
      "resultLabel"
    ).textContent = `Stock Average Down Result`;
    document.getElementById(
      "result"
    ).textContent = `Average Price: $${newAverage.toFixed(4)}`;
    document.getElementById(
      "totalcost"
    ).textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById(
      "shares"
    ).textContent = `Total Shares: ${totalShares.toFixed(1)}`;
  });
});
