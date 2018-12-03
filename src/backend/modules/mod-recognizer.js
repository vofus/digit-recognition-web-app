import axios from "axios";

export default axios.create({
  baseURL: "http://vofus.ru/recognizer/api"
});