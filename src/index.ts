import { getLastSimarAlertsFromCache } from "./services/simar-service"


const main = async () => {
    const alerts = await getLastSimarAlertsFromCache()
    console.log(alerts)
}

main()