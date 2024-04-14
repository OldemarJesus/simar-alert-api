import { env } from "process"
import App from "./app"


const main = async () => {
    const PORT = env.PORT ?? "3000";
    
    try {
        await App.listen({ port: parseInt(PORT) })
    } catch (error) {
        App.log.error(error)
        process.exit(1)
    }
}

main()