# Total expenses on Amazon per page
A small script that summarizes all Amazon expenses for a single order page.

## Why?
Since there is no way to view all my Amazon costs, and I don't want to grant third-party add-ons or tools access to my Amazon account, I programmed this little solution.

## What does it do?
This script summarizes all Amazon expenses for a single order page. If you have multiple pages, you must run this script on each subpage. The script works for € and $.

## What does it NOT do?
Unfortunately, it's not a one-click solution. You have to note down the total expenses of each order page and add them up yourself.

## How?
Right-click within the order page and select “Inspect” or “Inspect Element.” The browser's developer tools will open. Go to “Console” and paste the source code. Press Enter to run the script.

## Code
```javascript
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
`
