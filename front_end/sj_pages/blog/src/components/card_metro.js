import './card.css';
import React, { Component } from 'react';

class Metro extends Component {
    render() {
        return (
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--camping">
                                    {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" class="card-front__icon"> */}
                               <path d="M57,52.1c0-0.4-0.1-0.7-0.3-1.1l-6.3-10.8L32.4,9l2.3-4c0.6-1,0.2-2.2-0.7-2.7c-1-0.6-2.2-0.2-2.7,0.7L30,5.2L28.7,3
                                   c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7l2.3,4l-18,31.1L3.3,51C3.1,51.3,3,51.7,3,52.1c0,0.4,0.1,0.7,0.3,1
                                   c0.4,0.6,1,1,1.7,1h50c0.7,0,1.4-0.4,1.7-1C56.9,52.8,57,52.4,57,52.1z M34.7,49.8C34.2,50,32.1,50,30,50s-4.2,0-4.7-0.2
                                   c-0.2-0.5-0.2-2.1-0.2-3.6l0-4.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9l0,4.3C34.9,47.7,34.9,49.3,34.7,49.8z M13.1,42.1L28,16.5
                                   v16.7c-3.9,0.9-6.9,4.4-6.9,8.6l0,4.3c0,1.7,0,2.9,0.2,4H8.5L13.1,42.1z M38.7,50.1c0.2-1,0.2-2.3,0.2-4l0-4.3
                                   c0-4.2-2.9-7.7-6.9-8.6V16.5l15,25.7l4.6,7.9H38.7z"/>
                               {/* </svg> */}
                                               <h2 class="card-front__heading">
                                                   교통
                                               </h2>
                                               <p class="card-front__text-price">
                                                   서울 지하철, 국내 공항 승객수
                                               </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--camping">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <video class="video__container" autoplay muted loop>
                                    {/* <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4"> */}
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--camping">
                                교통
                            </h3>
                            <p class="inside-page__text">
                               교통 관련 데이터입니다.
                            </p>
                            <a class="inside-page__btn inside-page__btn--camping">View data</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Metro;