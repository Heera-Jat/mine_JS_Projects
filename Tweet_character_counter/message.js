function msg() {
    var tweet = prompt("Compose your tweet here :");
    var tweetCount = tweet.length;
    
    alert("You written "+tweetCount+" characters, " +(280-tweetCount)+" characters remaining.");
}
