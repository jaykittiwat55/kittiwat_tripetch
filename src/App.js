import "./App.css";
import football from "./assets/images/footballer 1.png";
import basketball from "./assets/images/basketball.png";
import { Carousel } from "antd";

function App() {
    
  
    const slide1 = () => {
        return (
            <Carousel>
                <div>
                    <div className="label">
                        <div className="under-line"> 01 </div>
                        <div className="label-text">CONNECTION</div>
                    </div>
                    <div className="description">
                        Connect with coaches directly, you can ping coaches to
                        view profile.
                    </div>
                </div>
                <div>
                    <div className="label">
                        <div className="under-line"> 02 </div>
                        <div className="label-text">Collaboration</div>
                    </div>
                    <div className="description">
                        Work with other student athletes to  increase
                        visability. When you share and like other players videos
                        it will increase your visability as a player. This is
                        the team work aspect to Surface 1.
                    </div>
                </div>
                <div>
                    <div className="label">
                        <div className="under-line"> 03 </div>
                        <div className="label-text">GROWTH</div>
                    </div>
                    <div className="description">
                        Resources and tools for you to get better as a student
                        Athelte. Access to training classes, tutor sessions, etc
                    </div>
                </div>
            </Carousel>
        );
    };
    const slide2 = () => {
        return (
            <Carousel >
                <div>
                    <div className="label">
                        <div className="under-line"> 01 </div>
                        <div className="label-text">CONNECTION</div>
                    </div>
                    <div className="description">
                        Connect with talented athlete directly, you can watch
                        their skills through video showreels directly from
                        Surface 1.
                    </div>
                </div>
                <div>
                    <div>
                        <div className="label">
                            <div className="under-line"> 02 </div>
                            <div className="label-text">Collaboration</div>
                        </div>
                        <div className="description">
                            Work with recruiter to increase your chances of
                            finding talented athlete.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="label">
                        <div className="under-line"> 03 </div>
                        <div className="label-text">GROWTH</div>
                    </div>
                    <div className="description ">
                        Save your time, recruit proper athlets for your team.
                    </div>
                </div>
            </Carousel>
        );
    };
    return (
        <div className="app">
            <div className="content-1">
                <span className="image-container1">
                    <img src={football} className="football"></img>
                </span>
                <div className="container-right1">
                    <div>
                        <div className="head-title">ATLHETS</div>
                        <div className="label">
                            <div className="under-line"> 01 </div>
                            <div className="label-text">CONNECTION</div>
                        </div>
                        <div className="description">
                            Connect with coaches directly, you can ping coaches
                            to view profile.
                        </div>
                    </div>
                </div>
                <div className="container-right2 ">
                    <div className="hide-content">
                        <div className="label">
                            <div className="under-line"> 02 </div>
                            <div className="label-text">Collaboration</div>
                        </div>
                        <div className="description">
                            Work with other student athletes to  increase
                            visability. When you share and like other players
                            videos it will increase your visability as a player.
                            This is the team work aspect to Surface 1.
                        </div>
                    </div>
                    <div className="slide1">
                    {slide1()}
                    </div>
                </div>
                <div className="container-right3">
                    <div>
                        <div className="label">
                            <div className="under-line"> 03 </div>
                            <div className="label-text">GROWTH</div>
                        </div>
                        <div className="description light-text">
                            Resources and tools for you to get better as a
                            student Athelte. Access to training classes, tutor
                            sessions, etc
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-2">
                <span className="image-container2">
                    <img src={basketball} className="basketball"></img>
                </span>
                <div className="container-left1">
                    <div>
                        <div className="head-title">PLAYERS</div>
                        <div className="label">
                            <div className="under-line"> 01 </div>
                            <div className="label-text">CONNECTION</div>
                        </div>
                        <div className="description">
                            Connect with talented athlete directly, you can
                            watch their skills through video showreels directly
                            from Surface 1.
                        </div>
                    </div>
                </div>
                <div className="container-left2">
                    <div className="hide-content">
                        <div className="label">
                            <div className="under-line"> 02 </div>
                            <div className="label-text">Collaboration</div>
                        </div>
                        <div className="description">
                            Work with recruiter to increase your chances of
                            finding talented athlete.
                        </div>
                    </div>
                    <div className="slide2">
                    {slide2()}
                    </div>
                </div>
                <div className="container-left3">
                    <div>
                        <div className="label">
                            <div className="under-line light-text-2"> 03 </div>
                            <div className="label-text">GROWTH</div>
                        </div>
                        <div className="description light-text">
                            Save your time, recruit proper athlets for your
                            team.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
