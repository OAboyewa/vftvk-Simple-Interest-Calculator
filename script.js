// Calcuate result 
function compute()
{
    // Get element values
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    // Calculate interst
    let interest = principal * years * rate / 100;

    // Combine current year and years seleted form element
    let year = new Date().getFullYear() + parseInt(years);
    
    // Princple is less then or equal zero preform form vaidation
    if (parseInt(principal) <= 0)
     {
         alert("Enter a positive number");
         document.getElementById("principal").focus();
     }
     else if (parseInt(principal) > 0)
     {
        document.getElementById("result").innerHTML =
        "If you deposit " + "<mark>" + `${principal}` + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + `${rate}` + "%</mark>." +
        "\<br\>You will receive an amount of " + "<mark>" + `${interest}` + "</mark>" +",\<br\>in the year " + "<mark>" + `${year}` + "</mark>" + "\<br\>";
     }
}

// Update percentage text next to interest rate input range
function updateRate()
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
