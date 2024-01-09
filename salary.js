function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
    const benefits = parseFloat(document.getElementById('benefits').value) || 0;
    
    const grossSalary = basicSalary + benefits;
    document.getElementById('grossSalary').innerText = `Gross Salary: ${grossSalary} Ksh`;

    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = (grossSalary - 24000) * 0.25 + 2400;
    } else if (grossSalary <= 500000) {
        paye = (grossSalary - 32333) * 0.3 + 5166.75;
    } else if (grossSalary <= 800000) {
        paye = (grossSalary - 500000) * 0.325 + 123499.75;
    } else {
        paye = (grossSalary - 800000) * 0.35 + 255499.75;
    }
    document.getElementById('payee').innerText = `PAYE (Tax): ${paye.toFixed(2)} Ksh`;

    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];
    let nhif = 0;
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhif = rate.deduction;
            break;
        }
    }
    document.getElementById('nhif').innerText = `NHIF Deductions: ${nhif} Ksh`;

    const nssfLimit = 400;
    const nssf = Math.min(nssfLimit, grossSalary * 0.05);
    document.getElementById('nssf').innerText = `NSSF Deductions: ${nssf.toFixed(2)} Ksh`;
    
    const netSalary = grossSalary - paye - nhif - nssf;
    document.getElementById('netSalary').innerText = `Net Salary: ${netSalary.toFixed(2)} Ksh`;
}