import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Average(total, part) {
    if (total === 0)
        return (0);
    const num = 100 * part / total;
    //console.log((Math.floor(num * 100) / 100));
    return (Math.floor(num * 100) / 100);
}
function RenderTeam(props) {
    const winp = Average(props.team.match, props.team.win);
    return (
        <div className="no-gap team container col-12" id={"team" + props.team.tId}>
            <div className="row col-12">
                <h1 className="col-10 team-header">{props.team.tname}</h1>
                <div className="col-2 circular">
                    <CircularProgressbar value={winp} maxValue={100} minValue={0} strokeWidth={5} styles={buildStyles({
                        strokeLinecap: "butt"
                    })} text={`${winp}%`} />
                </div>
            </div>
            <div className="row col-12 box-content">
                <div className="col-md-2 col-sm-3 col-6  key ">Macthes</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.match}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Wins</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.win}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Toss</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.toss}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Toss2Win</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.tossnwin}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Bat1stWin</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.batwin}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Field1stWin</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.fieldwin}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Tie</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.tie}</div>
                <div className="col-md-2 col-sm-3 col-6  key">Suppa Winner</div>
                <div className="col-md-2 col-sm-3 col-6 value">{props.team.winsup}</div>
            </div>
        </div>
    );
}

function Teams(props) {
    const team = props.teams[0].map((team) => {
        return (
            
                <RenderTeam team={team} />
          
        );
    });



    return (
        <div className="no-gap team container">
            {team}
        </div>

    );
}

export default Teams;