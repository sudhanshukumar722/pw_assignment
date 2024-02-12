
function calculateTax(income){
    let taxRate=[
        { range: [0, 10000], rate: 0.1 },         
        { range: [10001, 50000], rate: 0.15 },
        { range: [50001, 100000], rate: 0.2 },
        { range: [100001, Infinity], rate: 0.25 }
    ];

    let applicableRate=taxRate.find(rate=>income>=rate.range[0]&&income<=rate.range[1]);
    if(applicableRate){
        let taxamount=income*applicableRate.rate;
        console.log(`For an income of ${income} the tax amount is ${taxamount}`);
    }else{
        console.log(`For an income of ${income} you have to pay Zero taxamount`);
    }
}
calculateTax(10000);
calculateTax(80000);
