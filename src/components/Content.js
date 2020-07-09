import React, {useState, Component } from 'react';
import ipl from '../shared/teams';
import Teams from './TeamChart';
import Winning from './WinningChart';
import Season from './SeasonChart';
import 'chartjs-plugin-deferred';


import { Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const teamnames=["Mumbai Indians","Chennai Super Kings","Kolkata Knight Riders","Delhi Capitals","Sunrisers Hyderabad","Kings XI Punjab","Rajasthan Royals","Royal Challengers Bangalore","Deccan Chargers","Kochi Tuskers Kerala","Pune Warriors","Rising Pune Supergiants","Gujarat Lions"];




function Average(total, part) {
    return (part / total);
}



class Content extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        alert("Current state is "+ JSON.stringify(values))
    }
    render() {
        var i = 0;
        const teams = ipl.map((teams) => {
            i++;
            const team = teams.map((season) => {

                return (
                    <React.Fragment>
                        <div className="row">
                            <div>Name - {season.tname}. </div>
                            <div>Match - {season.match}.  </div>
                            <div>Win - {season.win}.  </div>
                            <div>Prob - {Average(season.match, season.win)}.  </div>
                            <div>Toss Win - {season.toss}. </div>
                        </div>
                    </React.Fragment>
                );
            });


            return (
                <React.Fragment>

                    <div className="header">
                        <h2></h2>
                        {team}
                    </div>
                </React.Fragment>
            );

        });


        return (
            <div className="container page">
                <h1 className="page-header" id="win">Winning gradesheet</h1>
                <Winning ipl={ipl} />
                <h1 className="page-header" id="team">Team gradesheet</h1>
                <Teams teams={ipl} />
                <h1 className="page-header" id="season">Season gradesheet</h1>
                <Season ipl={ipl} />
                
            </div>

        );
    }
}
export default Content;
