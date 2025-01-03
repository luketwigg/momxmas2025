
const personDatabases = {
    dad: {
      upbeat: [
        { title: "You Only Live Once", link: "https://open.spotify.com/track/4fPBB44eDH71YohayI4eKV?si=4b5e1def134c425f", albumCover: "images/stroke.jpeg", artist: "The Strokes" },
        { title: "This Life", link: "https://open.spotify.com/track/4dRqYKhLVujxiBXcq50YzG?si=91aff99c9a954389", albumCover: "images/vamp.jpg", artist: "Vampire Weekend" },
        { title: "Fancy Like", link: "https://open.spotify.com/track/58UKC45GPNTflCN6nwCUeF?si=ba2ca7e2db014bb5", albumCover: "images/ab67616d0000b273cc1ed62132516aabf6ef8751.jpeg", artist: "Walker Hayes" },
        { title: "Softly", link: "https://open.spotify.com/track/4PvbbMYL4fkToni5BLaYRb?si=c7d468dd0720492c", albumCover: "images/bags.jpeg", artist: "Clairo" }
      ],
      slow: [
        { title: "Harmony Hall", link: "https://open.spotify.com/track/4fPBB44eDH71YohayI4eKV?si=4b5e1def134c425f", albumCover: "images/vamp.jpg", artist: "Vampire Weekend" },
        { title: "I Will Be Here", link: "https://open.spotify.com/track/7w0CEIlW8kcomXPgxQ55Hj?si=07cd3f6bd3024584", albumCover: "images/stu.jpeg", artist: "Steven Curtis Chapman" },
        { title: "I Won't Let You Go", link: "https://open.spotify.com/track/6beEbu3P1snG0GAGDNyOtp?si=f8d596e43c134750", albumCover: "images/switchfoot.jpg", artist: "Switchfoot" },
        { title: "Make You Feel My Love", link: "https://open.spotify.com/track/5FgPwJ7Nh2FVmIXviKl2VF?si=88e0db1ed42d4960", albumCover: "images/19.png", artist: "Adele" }
      ],
      other: [
        { title: "I Wanna Be Yours", link: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=a811c3e957304087", albumCover: "images/i.jpeg", artist: "Arctic Monkeys" },
        { title: "We Can Work It Out", link: "https://open.spotify.com/track/1hTUFqJuQAMjXVGwUPWDqi?si=c15c9652b7534284", albumCover: "images/beatles.jpg", artist: "The Beatles" },
        { title: "Chill Baby", link: "https://open.spotify.com/track/0qpdzfTxAkOREtvvGO5oew?si=a9737190971245fd", albumCover: "images/sza.jpeg", artist: "SZA" },
        { title: "Northern Attitude", link: "https://open.spotify.com/track/5FgPwJ7Nh2FVmIXviKl2VF?si=88e0db1ed42d4960", albumCover: "images/noah.jpg", artist: "Noah Kahan" }
      ],
      random: [
        { title: "Terrapin", link: "https://open.spotify.com/track/32fwe7MW5koort1Ua3YFx6?si=f1d4094a2d7b4053", albumCover: "images/clairoglory.png", artist: "Clairo" },
        { title: "Down Bad", link: "https://open.spotify.com/track/0vjpfpch27QUf1cUs4seDl?si=09fb0087d27d4e21", albumCover: "images/yot.jpeg", artist: "Yot Club" },
        { title: "Are You Looking Up", link: "https://open.spotify.com/track/1sWYVBg7ix2WAq43J9nY7E?si=1cba2b22659f4ad3", albumCover: "images/mk.jpg", artist: "Mk.gee" },
        { title: "311", link: "https://open.spotify.com/track/5cKRhjcflNOmlI2fqXBhjI?si=bc0114c2dd71428b", albumCover: "images/jordan.jpeg", artist: "Jordan Ward & Gwen Bunn" }
      ]
    },
  
    julia: {
      upbeat: [
        { title: "My Favorite Girl Loves Reading", link: "https://open.spotify.com/track/1y25WaAvFJos46JJGjE0pA?si=7a38a523644c4774", albumCover: "images/reading.jpeg", artist: "Foxtide" },
        { title: "Hey Gringo", link: "https://open.spotify.com/track/4aPeeN8IYOCMNBGI0p7169?si=3b9743dba4d1466d", albumCover: "images/hey.jpg", artist: "KALEO" },
        { title: "Nexa", link: "https://open.spotify.com/track/4wbFHTS5Pdk3VZZ0cpKwTL?si=abd94463104943e5", albumCover: "images/nexa.jpg", artist: "Slug Bug" },
        { title: "Lunatic Actions", link: "https://open.spotify.com/track/3VMxrD3P2Lj4Pkr0PqaVcv?si=97d19324b5bb4785", albumCover: "images/cats.jpeg", artist: "Cats and Dragons" }
      ],
      slow: [
        { title: "Sunset Canyon", link: "https://open.spotify.com/track/3kXrgO7Sl0jgURAv7boX5q?si=99d3e07382344057", albumCover: "images/fox.jpg", artist: "Foxwarren" },
        { title: "Watch Your Mouth", link: "https://open.spotify.com/track/4DHLopEsKDwQBgucGKJuzj?si=67046aecdefc4c11", albumCover: "images/watch.jpeg", artist: "The Backseat Lovers" },
        { title: "Robbers", link: "https://open.spotify.com/track/06cCziAHtDg6pcsidZHu03?si=0d9f601cd3dd4996", albumCover: "images/19751.jpg", artist: "The 1975" },
        { title: "Out Of My Head", link: "https://open.spotify.com/track/5tOjRq5shlEdm15nmJBq7Z?si=9b9cd7e9a5f24d33", albumCover: "images/fastball.jpg", artist: "Fastball" },
      ],
      other: [
        { title: "Evergreen", link: "https://open.spotify.com/track/2bUyKAHjQ58o6gQNh5uyf1?si=e039998f8ab142e1", albumCover: "images/ever.jpeg", artist: "Mt. Joy" },
        { title: "The Other Way", link: "https://open.spotify.com/track/4uYBMuSp7kUN8TLrOW0KoJ?si=e7e269b4b7d046c8", albumCover: "images/mi.jpg", artist: "Michigander" },
        { title: "City Kitty", link: "https://open.spotify.com/track/7hyXvklwSf9ceS0EpV6ial?si=2b9d29f4cb4c4242", albumCover: "images/kitty.jpeg", artist: "French Cassettes" },
        { title: "Sincerity Is Scary", link: "https://open.spotify.com/track/6HguG9HRb1Ke1bhihfE4m8?si=8d6105b767ea4241", albumCover: "images/19752.jpg", artist: "The 1975" }
      ],
      random: [
        { title: "Knees", link: "https://open.spotify.com/track/7fE9r2qOJmjgruk3TdW4MD?si=29cdf9d3d1d048ce", albumCover: "images/ocean.jpeg", artist: "Ocean Alley" },
        { title: "Trun The Lights Back On", link: "https://open.spotify.com/track/1KTemUlHzS0SvVtTjY1NTw?si=0a5d170327a4411a", albumCover: "images/billy.jpg", artist: "Billy Joel" },
        { title: "Chop Suey", link: "https://open.spotify.com/track/705miw0hD4bBwyO4MtksqX?si=16473d62359f49df", albumCover: "images/chop.jpg", artist: "Brother Son" },
        { title: "Run Boy Run", link: "https://open.spotify.com/track/0boS4e6uXwp3zAvz1mLxZS?si=37e8e60537f24964", albumCover: "images/run.jpeg", artist: "Woodkid" }
      ]
    },
  
    ian: {
      upbeat: [
        { title: "Until Then", link: "https://open.spotify.com/track/0jnI2o0HKJrRglMwp3nIVJ?si=1c80e58da471447a", albumCover: "images/jack.jpeg", artist: "Chumpfrey" },
        { title: "Hello Hello Hello", link: "https://open.spotify.com/track/1xNknVNOolLB4oQeEtNBX2?si=ba5732e6af874408", albumCover: "images/remi.jpeg", artist: "Remi Wolf" },
        { title: "Casual Encounters", link: "https://open.spotify.com/track/3rK5Wr5xSep1gHRLettcnO?si=16071e0f4d754e57", albumCover: "images/beach.jpg", artist: "Bench Fuzz & Natalie Crane" },
        { title: "Omw", link: "https://open.spotify.com/track/3LqH8V4gEdmuH0mUjbceRc?si=57d779c288204849", albumCover: "images/omw.jpeg", artist: "((( O ))) & FKJ" },
        { title: "Gonna Bleach My Eyebrows", link: "https://open.spotify.com/track/3zQHfHufmH496jyJmRrccJ?si=cce6f98fb6f640bd", albumCover: "images/bleach.jpeg", artist: "Alemeda" }
      ],
      slow: [
        { title: "Nomad", link: "https://open.spotify.com/track/4WJPxTsvWIdRZ9vMtqk7fj?si=6aad2bf457574524", albumCover: "images/clairoglory.png", artist: "Clairo" },
        { title: "Open My Door", link: "https://open.spotify.com/track/1A8QcZJKhUmJwdqzoAahvR?si=0fe27638556c479f", albumCover: "images/witches.jpg", artist: "Alice Phoebe Lou" },
        { title: "Bushel Hyde", link: "https://open.spotify.com/track/6oeRdUqXFfueEqxEKU4Mbd?si=c3f1fb415d6841e1", albumCover: "images/pratt.jpg", artist: "Jessica Pratt" },
        { title: "Call It Fate, Call It Karma", link: "https://open.spotify.com/track/3Y4rUyw7XBCK6hGHCOt6rp?si=4bf7f7c3492b4f87", albumCover: "images/fate.jpeg", artist: "The Strokes" },
        { title: "Road Head", link: "https://open.spotify.com/track/5rQEom98vgByjAZ4kIw2kL?si=7824e41b0f5840b9", albumCover: "images/head.jpeg", artist: "Japanese Breakfast" }
      ],
      other: [
        { title: "Murder On The Dancefloor", link: "https://open.spotify.com/track/4tKGFmENO69tZR9ahgZu48?si=bae236bad97a4564", albumCover: "images/murder.jpg", artist: "Sophie Ellis-Bextor" },
        { title: "LOVE", link: "https://open.spotify.com/track/6PGoSes0D9eUDeeAafB2As?si=31724d1fd22b40a4", albumCover: "images/damn.png", artist: "Kendrick Lamar (Feat. Zacari)" },
        { title: "Fill In The Blank", link: "https://open.spotify.com/track/0SVvyfRMFMRJzc0L2odX20?si=6789f0f380394ec3", albumCover: "images/car.png.jpeg", artist: "Car Sear Headrest" },
        { title: "Witches", link: "https://open.spotify.com/track/5BBK1WoaiD3b3sJ2UysLuM?si=fe5ef2b2f68a47b8", albumCover: "images/door.jpeg", artist: "Allice Pheobe Lou" },
        { title: "rises the moon", link: "https://open.spotify.com/track/51Grh1RyUDcMBbpuyUIUHI?si=179418a9533d4c80", albumCover: "images/flores.jpg", artist: "Liana Flores" },
        { title: "I Wish I Was Stephen Malkmus", link: "https://open.spotify.com/track/0MXwuLvZU9cauIEXlMZcdC?si=8696a915ca8747f4", albumCover: "images/bee.jpeg", artist: "beabadoobee" }
      ],
      random: [
        { title: "Wolfcat", link: "https://open.spotify.com/track/1Hu2OypX8tMPwBcCUaAeO4?si=7116958f5d724540", albumCover: "images/woozy.jpeg", artist: "Still Woozy" },
        { title: "Lover, You Should've Come Over", link: "https://open.spotify.com/track/6Jv7kjGkhY2fT4yuBF3aTz?si=50ee691101db49d5", albumCover: "images/lover.jpeg", artist: "Jeff Buckley" },
        { title: "Vanilla Swirl", link: "https://open.spotify.com/track/07IGOY9oq3wMaM0y6hAoll?si=c7d6d00f004a4337", albumCover: "images/mark.jpg", artist: "Mark Whalen" },
        { title: "You Might Be Sleeping", link: "https://open.spotify.com/track/2KvbRojbZGMsWr1Nuj5n2f?si=f504b4c388ed4f99", albumCover: "images/jakob.jpg", artist: "Jakob & Clairo" },
        { title: "Naruto Themed Sexting", link: "https://open.spotify.com/track/3yoGVIY5OrRIBvNA9PYOS7?si=f7981af3fbf54b0f", albumCover: "images/sex.jpg", artist: "Panucci's Pizza" },
        { title: "recently,", link: "https://open.spotify.com/track/1djCoU5rvnq2zXFyD2iqq4?si=e01eba7f42d6432b", albumCover: "images/flores.jpg", artist: "Liana Flores" }
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
        { title: "CryBaby", link: "https://open.spotify.com/track/1g7pFO1WtclKCuIQiS8sNM?si=wInm1upMTsy7Lj3l_QLlRA", albumCover: "images/sza.jpeg", artist: "SZA" },
        { title: "Still Beating", link: "https://open.spotify.com/track/4LpUpiYoZ2M3Z1kmhn4EQo", albumCover: "images/mac.jpg", artist: "Mac DeMarco" },
        { title: "Love Affair", link: "https://open.spotify.com/track/2gUKcorABKuubRsTh2bL5e", albumCover: "images/you.jpg", artist: "Larry Lovestein & The Velvet Revival" },
        { title: "Black Memories", link: "https://open.spotify.com/track/571hDJQ2yYvOlvEZy6F00V?si=QAczXEK4S0yWD1s4bCAt8w", albumCover: "images/growl.jpg.webp", artist: "The Growlers" }
      ],
      other: [
        { title: "MUSTARD", link: "https://open.spotify.com/track/1vITRP5ITGjLK5v8LjjVo0?si=OwH9tPXwQUyRrqOjQJQ0_Q", albumCover: "images/jordan.jpeg", artist: "Jordan Ward (Feat. 6LACK)" },
        { title: "Glory of the Snow", link: "https://open.spotify.com/track/4JLBaHFkjxnbf9X0D8G3zQ?si=47199a5a132b486b", albumCover: "images/clairoglory.png", artist: "Clairo" },
        { title: "Candy", link: "https://open.spotify.com/track/6TeJroHNM4rXP4GluTvKXV?si=32fa96a165a2480d", albumCover: "images/mk.jpg", artist: "Mk.gee" },
        { title: "Not Allowed", link: "https://open.spotify.com/track/3IznIgmXtrUaoPWpQTy5jB?si=945eea9f08564308", albumCover: "images/tv.jpg", artist: "TV Girl" }
      ],
      random: [
        { title: "Bags", link: "https://open.spotify.com/track/6UFivO2zqqPFPoQYsEMuCc?si=2eece8e2c1164148", albumCover: "images/bags.jpeg", artist: "Clairo" },
        { title: "Slim Pickins", link: "https://open.spotify.com/track/0XkZmBCCcdMY0EPY8ij6Gb?si=7eaf369a02e74403", albumCover: "images/sab.png", artist: "Sabrina Carpenter" },
        { title: "Moments", link: "https://open.spotify.com/track/3DLlsSUvnQG2WIJSy044AN?si=c57005c57c9e4e3e", albumCover: "images/moments.jpg", artist: "MOIO" },
        { title: "unexplainable", link: "https://open.spotify.com/track/17Y34TYILFtfEB9hLsxdnD?si=1783ff16ea964286", albumCover: "images/yot.jpeg", artist: "Yot Club" }
      ]
    }
  };

function selectSongType(type) {
    const song = getRandomSong(type);

    console.log("Selected song:", song);

    if (song) {
        displaySongRecommendation(song);
    } else {
        alert("Sorry, no songs found for this category.");
    }
}

function getRandomSong(category) {
    const songCategory = getPersonDatabase(selectedPerson)[category];
    console.log('Song category:', songCategory);

    if (!songCategory) return null;

    const randomIndex = Math.floor(Math.random() * songCategory.length);
    const selectedSong = songCategory[randomIndex];
    console.log('Random song selected:', selectedSong);

    return selectedSong;
}

function displaySongRecommendation(song) {
    console.log(song);

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
    console.log('Selected person:', selectedPerson);
    document.getElementById('songTypePage').style.display = 'block';
    document.getElementById('personSelectionPage').style.display = 'none';
}


