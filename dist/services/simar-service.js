"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastSimarAlertsFromCache = exports.getLastSimarAlerts = void 0;
const dom_service_1 = __importDefault(require("./dom-service"));
const load_simar_alerts_1 = require("./load-simar-alerts");
const filter_from_simar_dom_div_alerts_1 = __importDefault(require("../utils/filter-from-simar-dom-div-alerts"));
const cache_service_1 = __importDefault(require("./cache-service"));
const SIMAR_ALERT_KEY = "simar-alert";
const getLastSimarAlerts = () => __awaiter(void 0, void 0, void 0, function* () {
    const simarHtmlPageText = yield (0, load_simar_alerts_1.LoadLatestSimarAlert)();
    if (simarHtmlPageText.length == 0) {
        return [];
    }
    const simarDom = (0, dom_service_1.default)(simarHtmlPageText);
    const alerts = (0, filter_from_simar_dom_div_alerts_1.default)(simarDom);
    return alerts;
});
exports.getLastSimarAlerts = getLastSimarAlerts;
const getLastSimarAlertsFromCache = () => __awaiter(void 0, void 0, void 0, function* () {
    const cAlerts = yield (0, cache_service_1.default)().get(SIMAR_ALERT_KEY);
    if (cAlerts == undefined) {
        const simarHtmlPageText = yield (0, load_simar_alerts_1.LoadLatestSimarAlert)();
        if (simarHtmlPageText.length == 0) {
            return [];
        }
        const simarDom = (0, dom_service_1.default)(simarHtmlPageText);
        const alerts = (0, filter_from_simar_dom_div_alerts_1.default)(simarDom);
        yield (0, cache_service_1.default)().set(SIMAR_ALERT_KEY, alerts);
        return alerts;
    }
    return cAlerts;
});
exports.getLastSimarAlertsFromCache = getLastSimarAlertsFromCache;
