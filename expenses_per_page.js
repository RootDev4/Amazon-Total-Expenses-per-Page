const prices = document.querySelectorAll('.a-size-base.a-color-secondary.aok-break-word')
let total = 0.0
for (let i = 0; i < prices.length; i++) {
  if (/^(\d+(,|.)?\d{2}(\s|&nbsp;|\\u00A0)?(€|\$)?)$/.test(prices[i].innerHTML)) {
    let parts = prices[i].innerHTML.split('&nbsp;')
    let price = parseFloat(parts[0].replace(',', '.'))
    total += price
  }
}
console.log(total.toFixed(2))
