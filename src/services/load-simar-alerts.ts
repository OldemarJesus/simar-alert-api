const SIMAR_WEB_URL = "https://www.simar-louresodivelas.pt/index.php/roturas-com-texto"

export const LoadLatestSimarAlert = async () => {
    const res = await fetch(SIMAR_WEB_URL)
    if(res.status == 200) {
        return await res.text()
    }
    return ""
}