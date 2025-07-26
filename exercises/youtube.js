const videoDetails = [{
    image: "profile1.jpg",
    time: '2:43:08',
    userImage: "profile3.jpg",
    name: 'Dr William Rick',
    subscriber: '122k subscribers',
    videoTitle: 'Get to know about an irish girl: Nina Swaltzman',
    videoAuthor: 'Dr William Rick',
    videoStats: '4.2M views'
},
{
    image: "profile4jpg",
    time: '2:43:08',
    userImage: "profile3.jpg",
    name: 'Dr William Rick',
    subscriber: '122k subscribers',
    videoTitle: 'Get to know about an irish girl: Nina Swaltzman',
    videoAuthor: 'Dr William Rick',
    videoStats: '4.2M views'
},
{
    image: "profile1.jpg",
    time: '2:43:08',
    userImage: "profile3.jpg",
    name: 'Dr William Rick',
    subscriber: '122k subscribers',
    videoTitle: 'Get to know about an irish girl: Nina Swaltzman',
    videoAuthor: 'Dr William Rick',
    videoStats: '4.2M views'
},
{
    image: "profile1.jpg",
    time: '2:43:08',
    userImage: "profile3.jpg",
    name: 'Dr William Rick',
    subscriber: '122k subscribers',
    videoTitle: 'Get to know about an irish girl: Nina Swaltzman',
    videoAuthor: 'Dr William Rick',
    videoStats: '4.2M views'
}]

let videoInfo = '';
videoDetails.forEach((video, index) => {
    videoInfo += `
    <div class="video-preview-container">
    <div class="video-thumbnail">
    <img class="nina-profile-pic" src="${video.image}" alt="girl in a uniform at school">
    <div class="time">${video.time}</div>
  </div>
  <div class="video-info-grid">
    <div class="channel-1-dp-container">
      <img class="author-dp" src="${video.userImage}" alt="A man in jacket">
      <div class="user-container">
      <img class="user-profile" src="${video.userImage}" alt="">
      <div class="info">
        <p class="channel-name">${video.name}</p>
        <p class="subscriber">${video.subscriber}</p>
      </div>
    </div>
  </div>
    <div class="description-container">
      <p class="video-title">${video.videoTitle}</p>
      <p class="video-author">${video.name}</p>
      <p class="video-stats">${video.videoStats}</p>
    </div>
  </div>
</div>
    `
  document.querySelector('.master-grid').innerHTML 
    = videoInfo;  
})