import React, { Component } from 'react';
import ipl from '../shared/teams';
import Teams from './TeamChart';
import Winning from './WinningChart';
import Season from './SeasonChart';
import 'chartjs-plugin-deferred';


const teamnames = ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Delhi Capitals", "Sunrisers Hyderabad", "Kings XI Punjab", "Rajasthan Royals", "Royal Challengers Bangalore", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors", "Rising Pune Supergiants", "Gujarat Lions"];




function Average(total, part) {
    return (part / total);
}



class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
