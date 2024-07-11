document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
    
    document.getElementById('cookie-popup').addEventListener('click', );
});

let currentStories = [];

    currentStories.push({
        Title: 'Open Houses Available',
        Body: 'Open houses and campus tours being given, click for more info.',
        linkUrl: 'https://www.marist.edu/openhouse/',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'New menu',
        Body: 'The meal switch is official! Click here for the new menu items.',
        linkUrl: 'https://dineoncampus.com/marist',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Brightspace info',
        Body: 'This is oficially our 2nd year of replacing Sekai with Brightspace, if you need assinstance click here.',
        linkUrl: 'https://my.de.marist.edu/brightspace-help',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
                </a>
                <hr>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });