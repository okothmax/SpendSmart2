
import {api} from "boot/axios";

export default class Authenticate {
  async authenticate() {
    return await api.get('/sanctum/csrf-cookie');
  }
}
