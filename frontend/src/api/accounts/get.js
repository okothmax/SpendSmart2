
import Api from "src/api/root/api";

export default class Get extends Api {
  constructor() {
    super('accounts'); // call the super class constructor and pass in the name parameter
  }

  /**
   *
   * @param identifier
   * @param date
   * @returns {Promise<AxiosResponse<any>>}
   */
  get(identifier, date) {
    let params = {date: date};
    if (!date) {
      return this.apiGet(identifier);
    }
    return this.apiGet(identifier, params);
  }

  /**
   *
   * @param identifier
   * @param page
   * @returns {Promise<AxiosResponse<any>>}
   */
  transactions(identifier, page) {
    return this.apiGetChildren('transactions', identifier, page);
  }
}
