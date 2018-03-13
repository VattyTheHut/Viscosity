import React, { Component } from 'react';
import './Videoplug.css';

class Videoplug extends Component {
  render() {
    return (
      <div className="Videoplug">
        <div className="videoplug">
          <header className="v-header container">
            <div className="fullscreen-video-wrap">
                {/* <video src="splashIntro.mp4" type="video/mp4" loop="true" autoPlay></video> */}
                <video src="https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" allowfullscreen muted type="video/mp4" autoPlay="true" loop="true"></video>
            </div>
            <div className="header-overlay"></div>
            <div className="header-content">
              <h1>Hello Everyone!</h1>
              <p>In the world there exsisted two mighty clanes. the bamba of the north, and the shak or the south.
                yout could day that hahaha is</p>

              <a classname="btn"></a>  
            </div>

          </header> 

          <section className="section section-a">
    <div className="container">
      <h2>Section A</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>

  <section className="section section-b">
    <div className="container">
      <h2>Section B</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>

        </div>
      </div>
    );
  }
}

export default Videoplug;
