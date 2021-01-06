import { Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="any image here" />
                    <input type="text" placeholder="Whats Happening" />
                </div>
                <input type="text" className="tweetBox__imageInput" placeholder="Enter image URL" />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
