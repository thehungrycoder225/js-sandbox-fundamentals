const c = console.log.bind(this);

// bill <= 50 = Tip 15%
// bill > 50 = Tip 20%

const bills = [125, 556, 44];
const tips = [];
const total = [];
const calcTip = (bill) => {
  return bill <= 50 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);

  //   Tips
  c(`Bill:${bills[i]}`);
  c(`Tip: ${tip}`);
  //   Total
  total.push(tip + bills[i]);
  c(`Total: ${total[i]}`);
}
