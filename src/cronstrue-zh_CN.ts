import { ExpressionDescriptor } from "./expressionDescriptor";
import { zh_CNLocaleLoader } from "./i18n/zh_CNLocaleLoader";

ExpressionDescriptor.initialize(new zh_CNLocaleLoader());
export default ExpressionDescriptor;

let toString = ExpressionDescriptor.toString;
export { toString };
