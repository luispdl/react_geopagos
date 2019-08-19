export default class Batch {

  constructor(merchant, ...sales) {
    this.sales = sales;
    this.merchant = merchant;
  }

  close() {
    const total = this.sales.map(sale => sale.amount).
        reduce((prev, current) => prev + current);

    console.log(`Closing ${total}pe for ${this.merchant}`);
  }

}