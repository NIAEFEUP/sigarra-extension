chrome.alarms.create("watch", {periodInMinutes:0.05, when:200});

chrome.alarms.onAlarm.addListener(async (alarm) => {
    if(alarm.name === "watch"){
        let request = await fetch(
            "https://localhost:8069/hasUpdate"
        );
        if(request.status !== 200){
            console.log(`request has throwed ${request.status}: ${request.statusText}`);
            return;
        }
        let requestJson = await request.json();
        if(requestJson.update){
            console.log("Detected updated command...");
            let tabList = await chrome.tabs.query({url:"*://sigarra.up.pt/feup/*"});
            for(let tab of tabList){
                console.log("Reloading tab ID: %d", tab.id)
                await chrome.tabs.reload(tab.id);
            }
            console.log("Reloading extension...")
            chrome.runtime.reload();
        }
    }
});