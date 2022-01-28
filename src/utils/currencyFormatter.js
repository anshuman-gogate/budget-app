// undefined as first parameter means it will default to current users
// local language
export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "inr",
    style: "currency",
    minimumFractionDigits: 0 // this doesn't add decimal by default
})