import domService from "./dom-service";
import { LoadLatestSimarAlert } from "./load-simar-alerts";
import filterFromSimarDomDivAlerts from "../utils/filter-from-simar-dom-div-alerts";
import cacheService from "./cache-service";

const SIMAR_ALERT_KEY = "simar-alert"

export const getLastSimarAlerts = async () => {
    const simarHtmlPageText = await LoadLatestSimarAlert()

    if (simarHtmlPageText.length == 0) {
        return []
    }

    const simarDom = domService(simarHtmlPageText)
    const alerts = filterFromSimarDomDivAlerts(simarDom)

    return alerts
}

export const getLastSimarAlertsFromCache = async () : Promise<string[]> => {
    const cAlerts = await cacheService().get(SIMAR_ALERT_KEY)

    if (cAlerts == undefined) {
        const simarHtmlPageText = await LoadLatestSimarAlert()

        if (simarHtmlPageText.length == 0) {
            return []
        }

        const simarDom = domService(simarHtmlPageText)
        const alerts = filterFromSimarDomDivAlerts(simarDom)
        await cacheService().set(SIMAR_ALERT_KEY, alerts)

        return alerts
    }

    return cAlerts
}