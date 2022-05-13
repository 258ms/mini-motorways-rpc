import { Client } from 'discord-rpc'

const client = new Client({ transport: "ipc" });


/**
 * Init the discord rich presence
 * @returns {Promise<void>}
 */
export async function init(): Promise<void> {
    client.on("ready", () => {
        const time = new Date();
        setActivity(time)
    })
}

/**
 * Set the discord activity
 * @param {Date} date
 * @returns {Promise<void>}
 */
export async function setActivity(time: Date) {
    client.setActivity({
        state: 'Playing',
        smallImageKey: "mini_icon",
        startTimestamp: time,
        largeImageKey: 'mini_icon'
    })
}

client.login({
    clientId: "974617585473691648"
}).catch((e) => {
    throw new Error(e)
})