
const personDatabases = {
    adam: {
      upbeat: [
        { title: "Blinding Lights - The Weeknd", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYdJRU1I4t", albumCover: "https://link-to-album-cover.com/album1.jpg", artist: "The Weeknd" },
        { title: "Shape of You - Ed Sheeran", link: "https://open.spotify.com/track/0hrBpAOgrt8VXdx8a1X4b2", albumCover: "https://link-to-album-cover.com/album2.jpg", artist: "Ed Sheeran" },
        { title: "Uptown Funk - Mark Ronson ft. Bruno Mars", link: "https://open.spotify.com/track/0g1OsbIoBDleIi9Z1BvFqt", albumCover: "https://link-to-album-cover.com/album3.jpg", artist: "Mark Ronson ft. Bruno Mars" },
        { title: "Can't Stop the Feeling! - Justin Timberlake", link: "https://open.spotify.com/track/0A4B2H8LgP7zQOSW0YbdxX", albumCover: "https://link-to-album-cover.com/album4.jpg", artist: "Justin Timberlake" }
      ],
      slow: [
        { title: "Someone Like You - Adele", link: "https://open.spotify.com/track/4kYwe8vnEgfIc0IEX9daGR", albumCover: "https://link-to-album-cover.com/album5.jpg", artist: "Adele" },
        { title: "Stay - Rihanna", link: "https://open.spotify.com/track/2QqOEc5AK8UxuUy9Q6mB8C", albumCover: "https://link-to-album-cover.com/album6.jpg", artist: "Rihanna" },
        { title: "Let Her Go - Passenger", link: "https://open.spotify.com/track/1av4g78IMfN0vFkLjqNZZP", albumCover: "https://link-to-album-cover.com/album7.jpg", artist: "Passenger" },
        { title: "All of Me - John Legend", link: "https://open.spotify.com/track/5pJ3e8Jm5vLrxY6y74rWvc", albumCover: "https://link-to-album-cover.com/album8.jpg", artist: "John Legend" }
      ],
      other: [
        { title: "Bohemian Rhapsody - Queen", link: "https://open.spotify.com/track/7vBQxVQ7u5V07eoiXY0X6g", albumCover: "https://link-to-album-cover.com/album9.jpg", artist: "Queen" },
        { title: "Take Me to Church - Hozier", link: "https://open.spotify.com/track/0Xz2G5R3XY0gnmLBdl0tt6", albumCover: "https://link-to-album-cover.com/album10.jpg", artist: "Hozier" },
        { title: "Clocks - Coldplay", link: "https://open.spotify.com/track/0r5rYbu4tq55wdl1pHugxF", albumCover: "https://link-to-album-cover.com/album11.jpg", artist: "Coldplay" },
        { title: "Smells Like Teen Spirit - Nirvana", link: "https://open.spotify.com/track/6Ej8FJklKFdeB0KftN5Yln", albumCover: "https://link-to-album-cover.com/album12.jpg", artist: "Nirvana" }
      ],
      random: [
        { title: "Old Town Road - Lil Nas X", link: "https://open.spotify.com/track/2cFZlVlx9a69D7RMT3bO5X", albumCover: "https://link-to-album-cover.com/album13.jpg", artist: "Lil Nas X" },
        { title: "God's Plan - Drake", link: "https://open.spotify.com/track/2nYc6TxCakUjqbZkpx90p6", albumCover: "https://link-to-album-cover.com/album14.jpg", artist: "Drake" },
        { title: "Blinding Lights - The Weeknd", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYdJRU1I4t", albumCover: "https://link-to-album-cover.com/album15.jpg", artist: "The Weeknd" },
        { title: "Levitating - Dua Lipa", link: "https://open.spotify.com/track/4nbt8jF47tAFdD5KD6yWn0", albumCover: "https://link-to-album-cover.com/album16.jpg", artist: "Dua Lipa" }
      ]
    },
  
    julia: {
      upbeat: [
        { title: "Levitating - Dua Lipa", link: "https://open.spotify.com/track/4nbt8jF47tAFdD5KD6yWn0", albumCover: "https://link-to-album-cover.com/album21.jpg", artist: "Dua Lipa" },
        { title: "Don't Start Now - Dua Lipa", link: "https://open.spotify.com/track/6sF5DAfuxTEZ9rB2soOOvD", albumCover: "https://link-to-album-cover.com/album22.jpg", artist: "Dua Lipa" },
        { title: "Physical - Dua Lipa", link: "https://open.spotify.com/track/1jOoBbM34jZJtTgyvVV1i2", albumCover: "https://link-to-album-cover.com/album23.jpg", artist: "Dua Lipa" },
        { title: "Blinding Lights - The Weeknd", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYdJRU1I4t", albumCover: "https://link-to-album-cover.com/album24.jpg", artist: "The Weeknd" }
      ],
      slow: [
        { title: "Shallow - Lady Gaga & Bradley Cooper", link: "https://open.spotify.com/track/4QXMduElh9HzSxAfyEwBzC", albumCover: "https://link-to-album-cover.com/album25.jpg", artist: "Lady Gaga & Bradley Cooper" },
        { title: "When We Were Young - Adele", link: "https://open.spotify.com/track/0rTiUjiSTlqVsXB4A7aE1w", albumCover: "https://link-to-album-cover.com/album26.jpg", artist: "Adele" },
        { title: "The One That Got Away - Katy Perry", link: "https://open.spotify.com/track/2g6UNmjm7lkQYX3h49Mf52", albumCover: "https://link-to-album-cover.com/album27.jpg", artist: "Katy Perry" },
        { title: "Slow Hands - Niall Horan", link: "https://open.spotify.com/track/7LLOHfaRGjV56miVE7Atzv", albumCover: "https://link-to-album-cover.com/album28.jpg", artist: "Niall Horan" }
      ],
      other: [
        { title: "Royals - Lorde", link: "https://open.spotify.com/track/5tItnMj3z1c4gk8GQh6yJ0", albumCover: "https://link-to-album-cover.com/album29.jpg", artist: "Lorde" },
        { title: "Faded - Alan Walker", link: "https://open.spotify.com/track/60nZkp17gdpH4lqH9ng2h3", albumCover: "https://link-to-album-cover.com/album30.jpg", artist: "Alan Walker" },
        { title: "Perfect - Ed Sheeran", link: "https://open.spotify.com/track/4nyzlkJ2Jw7mgNoPY2bBrX", albumCover: "https://link-to-album-cover.com/album31.jpg", artist: "Ed Sheeran" },
        { title: "Something Just Like This - The Chainsmokers & Coldplay", link: "https://open.spotify.com/track/1Tyl8SbiKwf38BX3jsNmr9", albumCover: "https://link-to-album-cover.com/album32.jpg", artist: "The Chainsmokers & Coldplay" }
      ],
      random: [
        { title: "Bad Guy - Billie Eilish", link: "https://open.spotify.com/track/5NgTk4WmNJ1r98eP4PaQ6G", albumCover: "https://link-to-album-cover.com/album33.jpg", artist: "Billie Eilish" },
        { title: "Circles - Post Malone", link: "https://open.spotify.com/track/0nT6XKp3X1dyau8vc0xy6h", albumCover: "https://link-to-album-cover.com/album34.jpg", artist: "Post Malone" },
        { title: "Starboy - The Weeknd", link: "https://open.spotify.com/track/7oxC9tN8xd1D3hqqVjeTXC", albumCover: "https://link-to-album-cover.com/album35.jpg", artist: "The Weeknd" },
        { title: "Levitating - Dua Lipa", link: "https://open.spotify.com/track/4nbt8jF47tAFdD5KD6yWn0", albumCover: "https://link-to-album-cover.com/album36.jpg", artist: "Dua Lipa" }
      ]
    },
  
    ian: {
      upbeat: [
        { title: "Wake Me Up - Avicii", link: "https://open.spotify.com/track/2tq1NDrUMSezzPTHtKX9MF", albumCover: "https://link-to-album-cover.com/album41.jpg", artist: "Avicii" },
        { title: "Happy - Pharrell Williams", link: "https://open.spotify.com/track/3l3jZGQyPx0LhXy7rwbcpD", albumCover: "https://link-to-album-cover.com/album42.jpg", artist: "Pharrell Williams" },
        { title: "Can't Stop the Feeling! - Justin Timberlake", link: "https://open.spotify.com/track/0A4B2H8LgP7zQOSW0YbdxX", albumCover: "https://link-to-album-cover.com/album43.jpg", artist: "Justin Timberlake" },
        { title: "Blinding Lights - The Weeknd", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYdJRU1I4t", albumCover: "https://link-to-album-cover.com/album44.jpg", artist: "The Weeknd" }
      ],
      slow: [
        { title: "Someone Like You - Adele", link: "https://open.spotify.com/track/4kYwe8vnEgfIc0IEX9daGR", albumCover: "https://link-to-album-cover.com/album45.jpg", artist: "Adele" },
        { title: "Let Her Go - Passenger", link: "https://open.spotify.com/track/1av4g78IMfN0vFkLjqNZZP", albumCover: "https://link-to-album-cover.com/album46.jpg", artist: "Passenger" },
        { title: "Perfect - Ed Sheeran", link: "https://open.spotify.com/track/4nyzlkJ2Jw7mgNoPY2bBrX", albumCover: "https://link-to-album-cover.com/album47.jpg", artist: "Ed Sheeran" },
        { title: "All of Me - John Legend", link: "https://open.spotify.com/track/5pJ3e8Jm5vLrxY6y74rWvc", albumCover: "https://link-to-album-cover.com/album48.jpg", artist: "John Legend" }
      ],
      other: [
        { title: "Take Me to Church - Hozier", link: "https://open.spotify.com/track/0Xz2G5R3XY0gnmLBdl0tt6", albumCover: "https://link-to-album-cover.com/album49.jpg", artist: "Hozier" },
        { title: "Clocks - Coldplay", link: "https://open.spotify.com/track/0r5rYbu4tq55wdl1pHugxF", albumCover: "https://link-to-album-cover.com/album50.jpg", artist: "Coldplay" },
        { title: "Smells Like Teen Spirit - Nirvana", link: "https://open.spotify.com/track/6Ej8FJklKFdeB0KftN5Yln", albumCover: "https://link-to-album-cover.com/album51.jpg", artist: "Nirvana" },
        { title: "Bohemian Rhapsody - Queen", link: "https://open.spotify.com/track/7vBQxVQ7u5V07eoiXY0X6g", albumCover: "https://link-to-album-cover.com/album52.jpg", artist: "Queen" }
      ],
      random: [
        { title: "Old Town Road - Lil Nas X", link: "https://open.spotify.com/track/2cFZlVlx9a69D7RMT3bO5X", albumCover: "https://link-to-album-cover.com/album53.jpg", artist: "Lil Nas X" },
        { title: "God's Plan - Drake", link: "https://open.spotify.com/track/2nYc6TxCakUjqbZkpx90p6", albumCover: "https://link-to-album-cover.com/album54.jpg", artist: "Drake" },
        { title: "Blinding Lights - The Weeknd", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYdJRU1I4t", albumCover: "https://link-to-album-cover.com/album55.jpg", artist: "The Weeknd" },
        { title: "Levitating - Dua Lipa", link: "https://open.spotify.com/track/4nbt8jF47tAFdD5KD6yWn0", albumCover: "https://link-to-album-cover.com/album56.jpg", artist: "Dua Lipa" }
      ]
    },
  
    luke: {
      upbeat: [
        { title: "Book of Life", link: "https://open.spotify.com/track/4tWtLjreDU4443LRv2CXmc?si=U9HwL0n4S7Go7wcG1eivKw", albumCover: "images/hi-tech.jpeg", artist: "Hi-Tech" },
        { title: "You're Too Late", link: "https://open.spotify.com/track/1hiKryaNX1kwtVxc8h80zZ", albumCover: "images/fantacy.jpeg", artist: "Fantacy" },
        { title: "BIRDS OF A FEATHER", link: "https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB?si=oGJYq-ogTaa025-4qrWDIw", albumCover: "images/billie-eilish.jpeg", artist: "Billie Eilish" },
        { title: "Lavender Buds", link: "https://open.spotify.com/track/5j42r1PmIbM6fZSe11O08C?si=w1YEmxYqSR21ITMgX7WzEA", albumCover: "images/mfdoom.jpg", artist: "MF DOOM" }
      ],
      slow: [
        { title: "CryBaby", link: "https://open.spotify.com/track/1g7pFO1WtclKCuIQiS8sNM?si=wInm1upMTsy7Lj3l_QLlRA", albumCover: "momxmas2025/images/sza.jpeg", artist: "SZA" },
        { title: "Still Beating", link: "https://open.spotify.com/track/4LpUpiYoZ2M3Z1kmhn4EQo", albumCover: "momxmas2025/images/mac.jpg", artist: "Mac DeMarco" },
        { title: "Love Affair", link: "https://open.spotify.com/track/2gUKcorABKuubRsTh2bL5e", albumCover: "momxmas2025/images/you.jpg", artist: "Larry Lovestein & The Velvet Revival" },
        { title: "Black Memories", link: "https://open.spotify.com/track/571hDJQ2yYvOlvEZy6F00V?si=QAczXEK4S0yWD1s4bCAt8w", albumCover: "momxmas2025/images/growl.jpg.webp", artist: "The Growlers" }
      ],
      other: [
        { title: "MUSTARD", link: "https://open.spotify.com/track/1vITRP5ITGjLK5v8LjjVo0?si=OwH9tPXwQUyRrqOjQJQ0_Q", albumCover: "momxmas2025/images/jordan.jpeg", artist: "Jordan Ward (Feat. 6LACK)" },
        { title: "Glory of the Snow", link: "https://open.spotify.com/track/4JLBaHFkjxnbf9X0D8G3zQ?si=47199a5a132b486b", albumCover: "momxmas2025/images/clairoglory.png", artist: "Clairo" },
        { title: "Candy", link: "https://open.spotify.com/track/6TeJroHNM4rXP4GluTvKXV?si=32fa96a165a2480d", albumCover: "momxmas2025/images/mk.jpg", artist: "Mk.gee" },
        { title: "Not Allowed", link: "https://open.spotify.com/track/3IznIgmXtrUaoPWpQTy5jB?si=945eea9f08564308", albumCover: "momxmas2025/images/tv.jpg", artist: "TV Girl" }
      ],
      random: [
        { title: "Bags", link: "https://open.spotify.com/track/6UFivO2zqqPFPoQYsEMuCc?si=2eece8e2c1164148", albumCover: "momxmas2025/images/bags.jpeg", artist: "Clairo" },
        { title: "Slim Pickins", link: "https://open.spotify.com/track/0XkZmBCCcdMY0EPY8ij6Gb?si=7eaf369a02e74403", albumCover: "momxmas2025/images/sab.png", artist: "Sabrina Carpenter" },
        { title: "Moments", link: "https://open.spotify.com/track/3DLlsSUvnQG2WIJSy044AN?si=c57005c57c9e4e3e", albumCover: "momxmas2025/images/moments.jpg", artist: "MOIO" },
        { title: "unexplainable", link: "https://open.spotify.com/track/17Y34TYILFtfEB9hLsxdnD?si=1783ff16ea964286", albumCover: "momxmas2025/images/yot.jpeg", artist: "Yot Club" }
      ]
    }
  };
  

// Assuming the database and other code are already defined above this

function selectSongType(type) {
    const song = getRandomSong(type);

    console.log("Selected song:", song);  // Debugging line

    if (song) {
        displaySongRecommendation(song);
    } else {
        alert("Sorry, no songs found for this category.");
    }
}

function getRandomSong(category) {
    const songCategory = getPersonDatabase(selectedPerson)[category];
    console.log('Song category:', songCategory);  // Debugging line

    if (!songCategory) return null;

    const randomIndex = Math.floor(Math.random() * songCategory.length);
    const selectedSong = songCategory[randomIndex];
    console.log('Random song selected:', selectedSong);  // Debugging line

    return selectedSong;
}

function displaySongRecommendation(song) {
    console.log(song);  // Check if song object contains correct data

    const resultContainer = document.getElementById('resultContainer');

    if (song) {
        resultContainer.innerHTML = `
            <div class="song-result">
                <img id="albumCover" src="${song.albumCover}" alt="${song.title} album cover" class="album-cover">
                <h2 id="title">${song.title || "Unknown Title"}</h2>
                <p id="artist" class="artist">${song.artist || "Unknown Artist"}</p>
                <a id="playNowButton" href="${song.link}" target="_blank">Play Now</a>
            </div>
        `;
    } else {
        resultContainer.innerHTML = '<p>No song found.</p>';
    }

    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('songTypePage').style.display = 'none';
}

function selectPerson(person) {
    selectedPerson = person;
    console.log('Selected person:', selectedPerson);  // Debugging line
    document.getElementById('songTypePage').style.display = 'block';
    document.getElementById('personSelectionPage').style.display = 'none';
}


