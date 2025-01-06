/* Compound interest calculator that prompts some user inputs, and finally calculates
the compounded interest value.

Step 1. Define a function that we can use to calculate the final value of the compounded
interest.

Step 2. Define a function that would calculate the difference (i.e. the effect that compounding
has had).

Step 3. To create a run function that then prompts the user for all necessary inputs requiered to
calculate the final amounts.

Step 4. Inside of said function, make a nice pretty print statement using a template literal
string that gives the financial breakdown. */

// Default values

let init_amount = 20000
let monthly_contribution = 400
let number_of_years = 30
let interest_rate = 10

// Step 1.

function compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = init_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution
        total = total * ((100 + interest_rate) / 100)
    }
    return total.toFixed(2)
}

// Step 2.

function calculateRegular(init_amount, monthly_contribution, number_of_years) {
    return (init_amount + monthly_contribution * 12 * number_of_years).toFixed(2)
}

function printOutput(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years,
        interest_rate)
    let value_without_compounding = calculateRegular(init_amount, monthly_contribution, number_of_years)
    let summary = `INIT_AMOUNT: ${init_amount}\nMONTHLY_CONTRIBUTION: ${monthly_contribution}
    \nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}\n\n
    FINAL_COMPOUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${value_without_compounding}\n
    DIFFERENCE: $${final_value - value_without_compounding}`

    console.log(summary)
}