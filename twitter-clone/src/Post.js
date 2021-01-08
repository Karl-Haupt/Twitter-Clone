import React from 'react';
import './Post.css';

import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, userName, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajab" />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Karl Haupt{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />@karlhaupt
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Twitter Clone under consturction</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                </div>
            
            </div>
        </div>
    )
}

export default Post
