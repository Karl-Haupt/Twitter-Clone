import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

import { Avatar } from '@material-ui/core';

function Post({displayName, userName, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="" />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Karl Haupt
                            <span>
                                <VerifiedUSerIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Twitter Clone under consturction</p>
                    </div>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Post
