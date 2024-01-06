function calculatePayee(grossSalary) {
    let annualSalary = grossSalary * 12;
    let taxRate;

if (annualSalary <= 288000) {
    taxRate = 0.1;
} else if (annualSalary <= 388000) {
    taxRate = 0.25;
} else if (annualSalary <= 6000000) {
    taxRate = 0.3;
} else if (annualSalary <= 9600000) {
    taxRate = 0.325;
} else {
    taxRate = 0.35;
}

let payee = (annualSalary * taxRate) / 12;
return payee;
}

function calculateNHIFDeductions(grossSalary) {
    // NHIF deductions logic can be added here
    // For simplicity, let's assume a fixed value for NHIF deductions for this example
    return 500;
}

function calculateNSSFDDeductions(grossSalary) {
    // NSSF deductions logic can be added here
    // For simplicity, let's assume a fixed value for NSSF deductions for this example
    return 700;
}

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePayee(grossSalary);
    let nhifDeductions = calculateNHIFDeductions(grossSalary);
    let nssfDeductions = calculateNSSFDDeductions(grossSalary);

let grossSalaryAfterDeductions = grossSalary - (payee + nhifDeductions + nssfDeductions);
let netSalary = grossSalaryAfterDeductions;

return { payee, nhifDeductions, nssfDeductions, grossSalary, netSalary };
}

// Example usage:
let basicSalary = parseFloat(prompt("Enter basic salary: "));
let benefits = parseFloat(prompt("Enter benefits: "));

let result = calculateNetSalary(basicSalary, benefits);

console.log("\nGross Salary: " + result.grossSalary + " Ksh");
console.log("Payee (Tax): " + result.payee + " Ksh");
console.log("NHIF Deductions: " + result.nhifDeductions + " Ksh");
console.log("NSSF Deductions: " + result.nssfDeductions + " Ksh");
console.log("Net Salary: " + result.netSalary + " Ksh");