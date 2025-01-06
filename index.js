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
    return total
}

function calculateRegular(init_amount, monthly_contribution, number_of_years, interest_rate) {
    return init_amount * monthly_contribution * 12 * number_of_years
}

console.log(compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate))