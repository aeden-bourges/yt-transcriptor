console.log("JS is working")
const button = document.getElementById("get-btn")
button.addEventListener("click", async function() {
    const url = document.getElementById("url-input").value
    
    if (url === ""){
        alert("please enter a url")
        return
    }

    const btn = document.getElementById("get-btn")
    btn.disabled = true
    btn.textContent = "loading..."

    try {
        const response = await fetch("https://api.supadata.ai/v1/youtube/transcript?url=" + encodeURIComponent(url) + "&text=true", {
            headers: {
            "x-api-key": "sd_a4ebbd657badeb72a518c42562fa62e1"
            }
        })
        const data = await response.json()

        if (!data.content) {
            document.getElementById("transcript").value = "could not get transcript for this video."
            btn.disabled = false
            btn.textContent = "get transcript"
            return
        }

        document.getElementById("transcript").value = data.content
        console.log(data.content)
    } catch (error) {
        alert("please enter a valid youtube url")
    }

    btn.disabled = false
    btn.textContent = "get transcript"
})

const copyButton = document.getElementById("copy-btn")
copyButton.addEventListener("click", function() {
    const transcript = document.getElementById("transcript")
    navigator.clipboard.writeText(transcript.value)
    
    const copyBtn = document.getElementById("copy-btn")
    copyBtn.textContent = "copied!"
    setTimeout(function() {
        copyBtn.textContent = "copy transcript"
    }, 2000)
})