chrome.runtime.onInstalled.addListener(()=>{
    console.log("installed")
})

chrome.bookmarks.onCreated.addListener((b)=>{
    console.log('bookmarked boy!')
    console.log()
})