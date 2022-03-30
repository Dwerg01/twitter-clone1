
$.ajax({
    url: "your-turn-dynamic-twitter/index.js",
    dataType: "script",
    
    // method: "GET",
    success: function () {
        console.log(user1.tweets[0])
        var handle = `<h2 id="main-handle" class="handle">${user1.displayName}
        <svg id="verified" viewBox="0 0 24 24" aria-label="Verified account" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
        </h2>`
        var tweetHandle = `<h4 class="handle">${user1.displayName}
        <svg id="verified" viewBox="0 0 24 24" aria-label="Verified account" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
        </h4>`
        var profilePic = `<img src="./your-turn-dynamic-twitter/assets/elonmusk.jpg" alt="${user1.displayName}" id="main-avatar" class="avatar"></img>`
        var tweetPic = `<img src="./your-turn-dynamic-twitter/assets/elonmusk.jpg" alt="${user1.displayName}" class="avatar"></img>`
        var svgSpeech = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>`
        var svgRetweet = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>`;

        var svgHeart = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>`;
        var svgShare = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>`;




        // var iconBell = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M23.24 3.26h-2.425V.832c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.26H16.89c-.414 0-.75.335-.75.75s.336.75.75.75h2.426v2.424c0 .414.336.75.75.75s.75-.336.75-.75V4.76h2.425c.415 0 .75-.337.75-.75s-.336-.75-.75-.75zm-6.23 7.606c.02-2.434-.782-4.597-2.258-6.09-1.324-1.342-3.116-2.084-5.046-2.093h-.013c-1.93.01-3.722.75-5.046 2.092C3.172 6.27 2.37 8.433 2.39 10.867 2.426 15 .467 16.56.39 16.62c-.26.193-.367.53-.266.838.102.308.39.515.712.515h4.716c.11 2.226 1.94 4.007 4.194 4.007s4.083-1.78 4.194-4.007h4.625c.32 0 .604-.206.707-.51s0-.643-.255-.838c-.082-.064-2.043-1.625-2.008-5.76zM9.745 20.48c-1.426 0-2.586-1.11-2.694-2.508h5.388c-.108 1.4-1.268 2.507-2.694 2.507zm-7.29-4.007c.702-1.095 1.457-2.904 1.434-5.618-.017-2.062.614-3.8 1.825-5.025C6.757 4.774 8.172 4.19 9.7 4.184c1.527.007 2.943.59 3.985 1.646 1.21 1.226 1.84 2.963 1.823 5.025-.022 2.714.732 4.523 1.437 5.618H2.455z"></path></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"></span>`
        // var iconElipse = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"></span>`
        var iconCal = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
                        <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"></span>`
        var container = $('<div></div>').attr({id: "main", class: "no-show container"})

        $(profilePic).attr("id", "main-avatar")
        function convertToInternationalCurrencySystem (labelValue) {
             
            // Six Zeroes for Millions
          
            return Math.abs(Number(labelValue)) >= 1.0e+6
            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
            ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "K"
            : Math.abs(Number(labelValue));
            
        }
        const followers_HR = convertToInternationalCurrencySystem(user1.followerCount)

        $(document.body).append(container)
        var headerContent = `<div id="nav-header">
            <div dir="auto" class="css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13h20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0" style="border-bottom: 2px solid rgb(15, 20, 25);"></span></div>
            <div>
                ${handle}
                <p class="subtext">${user1.tweets.length} Tweets</p>
            </div>
        </div>
        <div>
            <img id="image-cover" class="hoverItem" src="./your-turn-dynamic-twitter/assets/elonmusk-cover.jpeg" alt="${user1.displayName} cover image"></img>
            ${profilePic}
            <div id="control-buttons">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                <div class="main-button">Following</div>
            </div>

            <div>
                ${handle}
                <p class="subtext">${user1.userName}</p>
                <span id="iconCal">${iconCal}Joined ${user1.joinedDate}</span>
                <p><span class="strong">${user1.followingCount}</span> Following <span class="strong">${followers_HR}</span> Followers</p>
            </div>
        
        </div>

        `
        $(container).append(headerContent)

        var mainContent = `
            <div id="switcher">
                <div class="hoverItem">
                    <p class="switch active">Tweets</p>
                </div>
                <div class="hoverItem">
                    <p class="switch">Tweets & replies</p>
                </div>
                <div class="hoverItem">
                    <p class="switch">Media</p>
                </div>
                <div class="hoverItem">
                    <p class="switch">Likes</p>
                </div>
            </div>
        `
        container.append(mainContent)


        user1.tweets.forEach((entry) => {
        function getDifferenceInDays(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return Math.round(diffInMs / (1000 * 60 * 60 * 24));
          }
            var postDate = new Date(entry.timestamp)
            var currentDay = new Date();
            // console.log(entry.timestamp)
            console.log(postDate );
            
            $(container).append(`<div class="tweet-block">
                ${tweetPic} <div class="tweet"><span>${ tweetHandle }</span> <span>${ user1.userName } - </span><span>${getDifferenceInDays(postDate, currentDay)}</span>d</div>
                <div class="tweet-text">${entry.text}</div>
                <div class="eMotes">${svgSpeech}${svgRetweet}${svgHeart}${svgShare}</div></div>`)}
        )
       
    }

})

