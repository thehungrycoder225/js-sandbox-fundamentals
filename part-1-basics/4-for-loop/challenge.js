const c = console.log.bind(this);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (bill) => {
  return bill <= 50 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

c(tips);
c(totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i] / arr.length;
  }
  return c(sum);
};

calcAverage(totals);
