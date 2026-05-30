const API_KEY = '' // YouTube Data API Key
const videosList = document.getElementById('videos-list')

async function searchYTVideos(filter = 'relevance') {
  const searchQuery = document.getElementById('search-input').value
  if(!searchQuery) return

  const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchQuery}&type=video&videoDuration=long&maxResults=20&videoEmbeddable=true&order=${filter}`

  try {
    const res = await fetch(API_URL)
    const data = await res.json()

    videosList.innerHTML = ''
    data.items.forEach(item => {
      displayVideo(item.id.videoId)
    })
  } catch(error) {
    console.log('Could not fetch YT videos', error)
  }
}

function filterVideos() {
  const filter = document.getElementById('video-filter').value
  searchYTVideos(filter)
}

function displayVideo(videoId) {
  const iframe = document.createElement('iframe')
  iframe.width = 560
  iframe.height = 315
  iframe.src = `https://www.youtube.com/embed/${videoId}`
  iframe.title = "YouTube video player" 
  iframe.frameborder = 0
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  iframe.referrerpolicy ="strict-origin-when-cross-origin"
  iframe.setAttribute('allowfullscreen', true)
  iframe.classList.add('mt-3')

  videosList.append(iframe)
}