import domService from "./dom-service";
import { LoadLatestSimarAlert } from "./load-simar-alerts";
import filterFromSimarDomDivAlerts from "../utils/filter-from-simar-dom-div-alerts";
import cacheService from "./cache-service";

const SIMAR_ALERT_KEY = "simaralert"

export const getLastSimarAlerts = async () => {
    const simarHtmlPageText = await LoadLatestSimarAlert()

    if (simarHtmlPageText.length == 0) {
        return []
    }

    const simarDom = domService(simarHtmlPageText)
    const alerts = filterFromSimarDomDivAlerts(simarDom)

    return alerts
}

export const getLastSimarAlertsFromCache = async (): Promise<string[]> => {
    const cAlerts: { alerts: [] } | undefined = await cacheService().get(SIMAR_ALERT_KEY)

    if (cAlerts == undefined) {
        console.info("loading from website")
        const simarHtmlPageText = await LoadLatestSimarAlert()

        if (simarHtmlPageText.length == 0) {
            return []
        }

        const simarDom = domService(simarHtmlPageText)
        const alerts = filterFromSimarDomDivAlerts(simarDom)
        await cacheService().set(SIMAR_ALERT_KEY, { alerts })

        return alerts
    }

    console.info("loading from cache")
    return cAlerts.alerts
}