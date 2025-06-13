document.addEventListener("DOMContentLoaded", () => {
  // Average Down Calculator
  document.getElementById("avg-calc-btn").addEventListener("click", (e) => {
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

  // Clear entries
  document.getElementById("clear-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("buy1").value = "";
    document.getElementById("avg1").value = "";
    document.getElementById("buy2").value = "";
    document.getElementById("avg2").value = "";
    document.getElementById("resultLabel").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("totalcost").textContent = "";
    document.getElementById("shares").textContent = "";
  });

  // Regular Calculator
  document.getElementById("regular-calc-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }

    let result;
    if (num2 === 0) {
      alert("Cannot divide by zero.");
      return;
    }
    result = num1 / num2;

    document.getElementById(
      "regular-result"
    ).textContent = `Result: ${result.toFixed(4)}`;
  });

  // Clear regular calculator entries
  document.getElementById("clear-btn2").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("regular-result").textContent = "";
  });

  // Tab Switching
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
});
