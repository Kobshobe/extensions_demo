
let index = 1

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(async function(msg) {
        console.log("get msg: ", msg)
        port.postMessage({"msg": "resp", index})
        index++
    })
})