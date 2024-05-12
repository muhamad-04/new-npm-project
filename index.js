import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_VZB1u9b7iWWCc9Nzplx41zXjlKxYBRPw6w8toqU0');
convertCurrency( "INR", "USD", 3);
async function convertCurrency(fromCurrency,toCurrency,units ){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency

    })
    const multiplier = res.data[toCurrency]
    console.log[multiplier]
}

freecurrencyapi.latest({
   
}).then(response => {
    console.log(response);
});