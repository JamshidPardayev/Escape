import React from "react";
import './About.css'
const About = () => {
  return (
    <div id="about" className="about">
      <div id="posts" className="aboutPosts">
        <h2>Featured Posts</h2>
        <img src="./image/vector.png" alt="vector" className="vectorImg" />
        <div className="postImg">
          <div className="postLeft">
            <img src="./image/postImg1.png" alt="postImg" className="postImages"/>
            <div className="postTitle">
              <h3>The Road Ahead</h3>
              <p>The road ahead might be paved - it might not be.</p>
              <div className="postTitleName">
                <span>
                    <img src="./image/matVogels.png" alt="Mat Vogels" />
                    <p>Mat Vogels</p>
                </span>
                <p>September 25, 2015</p>
              </div>
            </div>
          </div>
          <div className="postRight">
            <img src="./image/postImg2.png" alt="postImg" className="postImages"/>
            <div className="postTitle">
              <h3>The Road Ahead</h3>
              <p>Once a year, go someplace you’ve never been before.</p>
              <div className="postTitleName">
                <span>
                    <img src="./image/matWong.png" alt="William Wong" />
                    <p>William Wong</p>
                </span>
                <p>September 25, 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutRecent">
        <h2>Most Recent</h2>
        <img src="./image/vector.png" alt="vector" className="vectorImg" />
        <div className="recentCards">
            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent1.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Still Standing Tall</h3>
                <p>Life begins at the end of your comfort zone.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matWong.png" alt="Wong" />
                    <p>William Wong</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>

            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent2.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Sunny Side Up</h3>
                <p>No place is ever as bad as they tell you it’s going to be.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matVogels.png" alt="Vogels" />
                    <p>Mat Vogels</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>

            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent3.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Water Falls</h3>
                <p>We travel not to escape life, but for life not to escape us.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matVogels.png" alt="Vogels" />
                    <p>Mat Vogels</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>

            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent4.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Through the Mist</h3>
                <p>Travel makes you see what a tiny place you occupy in the world.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matWong.png" alt="Wong" />
                    <p>William Wong</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>

            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent5.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Awaken Early</h3>
                <p>Not all those who wander are lost.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matVogels.png" alt="Vogels" />
                    <p>Mat Vogels</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>

            <div className="recentCard">
                <div className="recentImgSection">
                  <img src="./image/recent6.png" alt="recentImg" className="recentCardImg"/>
                </div>
                <h3>Try it Always</h3>
                <p>The world is a book, and those who do not travel read only one page.</p>
                <div className="recentTitleName">
                <span>
                    <img src="./image/matVogels.png" alt="Vogles" />
                    <p>Mat Vogels</p>
                </span>
                <p>9/25/2015</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
