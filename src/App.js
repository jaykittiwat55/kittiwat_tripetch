import "./App.css";

function App() {
    const footbal = [
        {
            no: "1",
            title: "CONNECTION",
            content:
                "Connect with coaches directly, you can ping coaches to view profile.",
        },
        {
            no: "2",
            title: "Collaboration",
            content:
                "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
        },
        {
            no: "3",
            title: "GROWTH",
            content:
                "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
        },
    ];
    const basketball = [
        {
            no: "1",
            title: "CONNECTION",
            content:
                "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
        },
        {
            no: "2",
            title: "Collaboration",
            content:
                "Work with recruiter to increase your chances of finding talented athlete.",
        },
        {
            no: "3",
            title: "GROWTH",
            content: "Save your time, recruit proper athlets for your team.",
        },
    ];

    return (
        <div className="app">
            <div className="conten-football">
                {/* <image></image> */}
                <div className="football-layout1">
                    <div>
                        <div className="head-title container-right">
                            ATLHETS
                        </div>
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
                <div className="football-layout2">
                    <div>
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
                </div>
                <div className="football-layout3">
                    <div>
                        <div className="label">
                            <div className="under-line"> 03 </div>
                            <div className="label-text">GROWTH</div>
                        </div>
                        <div className="description">
                            Resources and tools for you to get better as a
                            student Athelte. Access to training classes, tutor
                            sessions, etc
                        </div>
                    </div>
                </div>
            </div>
            <div className="conten-basketball">
                {/* <image></image> */}
                <div className="basketball-layout1 container-left">
                    <div>
                        <div className="head-title container-right">
                            PLAYERS
                        </div>
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
                <div className="basketball-layout2 container-left">
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
                <div className="basketball-layout3 container-left">
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
