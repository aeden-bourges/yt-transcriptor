console.log("JS is working")
const transcriptBox = document.getElementById("transcript")
function capitalizeSentence(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

function processTranscript(rawText) {
    let processedText = rawText
    processedText = processedText.replaceAll(">>","")
    processedText = processedText.replace(/\s+/g, " ")
    processedText = processedText.replace(/\[[^\]]+\]/g, "")
    processedText = processedText.replace(/\s+/g, " ")
    processedText = processedText.trim()
    
    const sentences = processedText
        .split(/(?<=[.!?])\s+/)
        .map(capitalizeSentence)
    const paragraphs = []
    
    for (let i = 0; i < sentences.length; i += 4) {
        const paragraph = sentences.slice(i, i + 4).join(" ")
        paragraphs.push(paragraph)
    }
    
    processedText = paragraphs.join("\n\n")
    return processedText
}

const button = document.getElementById("get-btn")
button.addEventListener("click", async function() {
    const url = document.getElementById("url-input").value
    
    if (url === ""){
        transcriptBox.value = "please enter a youtube url"
        return
    }

    const btn = document.getElementById("get-btn")
    btn.disabled = true
    btn.textContent = "loading..."

    try {
        const response = await fetch("https://yt-transcriptor-backend.vercel.app/transcript?url=" + encodeURIComponent(url))
        const data = await response.json()

        if (!data.content) {
            transcriptBox.value = "could not get transcript. check that the url is a valid youtube video and that captions are available."
            btn.disabled = false
            btn.textContent = "get transcript"
            return
        }

        const processedTranscript = processTranscript(data.content)
        transcriptBox.value = processedTranscript

    } catch (error) {
        transcriptBox.value = "something went wrong while loading the transcript. please try again."
    }

    btn.disabled = false
    btn.textContent = "get transcript"
})

const copyButton = document.getElementById("copy-btn")
copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(transcriptBox.value)
    
    copyButton.textContent = "copied!"
    setTimeout(function() {
        copyButton.textContent = "copy transcript"
    }, 2000)
})

const downloadButton = document.getElementById("download-btn")
downloadButton.addEventListener("click", function() {
    if (transcriptBox.value === "") {
        transcriptBox.value = "there is no transcript to download"
        return
    }

    const file = new Blob([transcriptBox.value], { type: "text/plain" })
    const link = document.createElement("a")

    link.href = URL.createObjectURL(file)
    link.download = "transcript.txt"
    link.click()

    downloadButton.textContent = "downloaded!"
    setTimeout(function() {
        downloadButton.textContent = "download .txt"
    }, 2000)

    URL.revokeObjectURL(link.href)
})