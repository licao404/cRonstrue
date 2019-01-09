import { Locale } from "./locale";
import { zh_CN } from "./locales/zh_CN";

export class zh_CNLocaleLoader {
  load(availableLocales: { [name: string]: Locale }) {
    availableLocales["zh_CN"] = new zh_CN();
  }
}
