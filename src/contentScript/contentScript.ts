chrome.runtime.sendMessage("Message from content script", (res) => {
    console.log(res)
})