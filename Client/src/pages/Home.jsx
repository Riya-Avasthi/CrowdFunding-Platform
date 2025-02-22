import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="hero">
                <div className="conatiner">
                    <div className="textfund">
                        <div className="fund1">Fund</div>
                        <div className="fund2">Help Others</div>
                    </div>
                    <div className="fndbtn" onClick={() => navigate('/createcampaign')}>
                        Start Fundraising
                    </div>
                </div>
            </div>
            <div className="section1">
                <h2>Some Qoute on funds</h2>
                <h3>Describe it Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem adipisci necessitatibus distinctio.
                </h3>
                <div className="containbox">
                    <div className="box1">
                        <h4>Secure Payments</h4>
                        <p>Our platform ensures safe and hassle-free transactions for donors and fundraisers.</p>
                    </div>
                    <div className="box1">
                        <h4>Easy Fundraising</h4>
                        <p>Launch your campaign in minutes and start receiving funds seamlessly.</p>
                    </div>
                    <div className="box1">

                        <h4>Transparency</h4>
                        <p>Track donations and ensure funds are used for their intended purpose.</p>
                    </div>
                </div>
            </div>
            <div className="urgent-fundraising">
                <h2>Urgent Fundraising!</h2>
                <p>Time is of the essence! Join our mission NOW to make an immediate impact. Every second counts!</p>

                <div className="fundraising-container">
                    {/* Fundraising Card 1 */}
                    <div className="fund-card">
                        <img src="..\src\assets\greenFund.jpg" alt="Fundraising 1" />
                        <div className="fund-card-content">
                            <h4>We Care</h4>
                            <h3>GreenFund: Sustain Earth Now</h3>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: "75%" }}></div>
                            </div>
                            <div className="fund-info">
                                <span>$50,240,210</span>
                                <span>7 days left</span>
                            </div>
                        </div>
                    </div>

                    {/* Fundraising Card 2 */}
                    <div className="fund-card">
                        <img src="..\src\assets\SeniorHealth.jpg" alt="Fundraising 2" />
                        <div className="fund-card-content">
                            <h4>Unicef</h4>
                            <h3>SeniorHealth: Support Campaign</h3>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: "50%" }}></div>
                            </div>
                            <div className="fund-info">
                                <span>$4,240,310</span>
                                <span>19 days left</span>
                            </div>
                        </div>
                    </div>

                    {/* Fundraising Card 3 */}
                    <div className="fund-card">
                        <img src="..\src\assets\startup-company.jpg" alt="Fundraising 3" />
                        <div className="fund-card-content">
                            <h4>Startups Invest</h4>
                            <h3>StartUps: Fund Businesses</h3>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: "40%" }}></div>
                            </div>
                            <div className="fund-info">
                                <span>$2,100,210</span>
                                <span>23 days left</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fundraiser-join">
                <div class="fundraiser-content">
                    <p class="fundraiser-text">Be The Part Of Fundraisers With Over</p>
                    <h1 class="fundraiser-number">217,924+</h1>
                    <p class="fundraiser-subtext">People From Around The World Joined</p>
                    <button class="fundraiser-btn">Join Fundraisers Now!</button>
                </div>
                <div className="fundraiser-images">
                    <img src="https://moneyminiblog.com/wp-content/uploads/2020/12/start-a-fundraiser.jpg" alt="" class="fundraiser-img img-top-left" />
                    <img src="https://i0.wp.com/blog.groupraise.com/wp-content/uploads/2022/12/pexels-antoni-shkraba-5466285-scaled.jpg?fit=2560%2C1707&ssl=1" alt="" class="fundraiser-img img-bottom-left"/>
                    <img src="https://d2yy7txqjmdbsq.cloudfront.net/appeals/3bd09642-b863-402c-9181-046a199f8907/logo_malnutrition.jpg" alt="" class="fundraiser-img img-top-right"/>
                    <img src="https://cfstatic.give.do/9336805f-632d-4195-8312-ca9aacc3460f.jpg" alt="" class="fundraiser-img img-bottom-right"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
