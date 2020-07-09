import matches from '../shared/data/matches.json';

const teamnames=["Mumbai Indians","Chennai Super Kings","Kolkata Knight Riders","Delhi Capitals","Sunrisers Hyderabad","Kings XI Punjab","Rajasthan Royals","Royal Challengers Bangalore","Deccan Chargers","Kochi Tuskers Kerala","Pune Warriors","Rising Pune Supergiants","Gujarat Lions"];
const seasons=[0,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
function Teams(teamnames) {
    const teams=[];
    for(var i=0;i<teamnames.length;i++){
        teams[i]={
            tId: i,
            tname: teamnames[i],
            match:0,
            win:0,
            toss:0,
            tie:0,
            winsup:0,
            tossnwin:0,
            tossbwin:0,
            batwin:0,
            fieldwin:0,
            batfirst:0
        }
    }
    return teams;
}
function IPL(seasons){
    const ipl=[];
    for(var i=0;i<seasons.length;i++){
        ipl[i]=Teams(teamnames)
    }
    return(ipl);
}
const ipl=IPL(seasons);
const teams=Teams(teamnames);

function TeamIndex(name){
    for(var i=0;i<teamnames.length;i++)
    {
        if(name==="Delhi Daredevils")
        name="Delhi Capitals";
        if(name==="Rising Pune Supergiant")
        name="Rising Pune Supergiants";

        if(teamnames[i]===name)
        return(i);
    }
}
function SeasonIndex(year){
    for(var i=0;i<seasons.length;i++){
        if(year==seasons[i])
        return (i);
        if(i==seasons.length-1){
            console.log("Edited data?");
            return(0);
        }
    }
}
matches.map((match)=> {
    const t1=match.team1;
    const t2=match.team2;
    const s=match.season;
    const sId=SeasonIndex(s);
    const tId1=TeamIndex(t1);
    const tId2=TeamIndex(t2);

    ipl[sId][tId1].match++;
    ipl[sId][tId2].match++;    
    if(match.result==="normal"){
        if(match.winner===t1){
            ipl[sId][tId1].win++;
            if(match.win_by_runs===0)
            ipl[sId][tId1].fieldwin++;
            else
            ipl[sId][tId1].batwin++;
        }else{
            ipl[sId][tId2].win++;
            if(match.win_by_runs===0)
            ipl[sId][tId2].fieldwin++;
            else
            ipl[sId][tId2].batwin++;
        }
    }
    if(match.result==="tie"){
        ipl[sId][tId1].tie++;
        ipl[sId][tId2].tie++;
        if(match.winner===t1){
            ipl[sId][tId1].win++;
            ipl[sId][tId1].winsup++;
        }else{
            ipl[sId][tId2].win++;
            ipl[sId][tId2].winsup++;
        }   
    }
    if((match.toss_winner===t1)&&(match.result===t1))
    ipl[sId][tId1].tossnwin++;
    else if((match.toss_winner===t2)&&(match.result===t2))
    ipl[sId][tId2].tossnwin++;
    else if((match.toss_winner===t1)&&(match.result===t2))
    ipl[sId][tId2].tossbwin++;
    else if((match.toss_winner===t2)&&(match.result===t1))
    ipl[sId][tId1].tossbwin++;

    if(match.toss_winner===t1){
        ipl[sId][tId1].toss++;
        if(match.toss_decision==="bat")
        ipl[sId][tId1].batfirst++;
        else
        ipl[sId][tId2].batfirst++;

        if(match.winner===t2)
        ipl[sId][tId2].tossbwin++;
        else
        ipl[sId][tId1].tossnwin++;
    }else{
        ipl[sId][tId2].toss++;
        if(match.toss_decision==="bat")
        ipl[sId][tId2].batfirst++;
        else
        ipl[sId][tId1].batfirst++;
        if(match.winner===t2)
        ipl[sId][tId2].tossnwin++;
        else
        ipl[sId][tId1].tossbwin++;
    }
});

for(var i=1;i<seasons.length;i++){
    for(var j=0;j<teamnames.length;j++){
        ipl[0][j].match+=ipl[i][j].match;
        ipl[0][j].win+=ipl[i][j].win;
        ipl[0][j].batwin+=ipl[i][j].batwin;
        ipl[0][j].fieldwin+=ipl[i][j].fieldwin;
        ipl[0][j].tie+=ipl[i][j].tie;
        ipl[0][j].toss+=ipl[i][j].toss;
        ipl[0][j].tossbwin+=ipl[i][j].tossbwin;
        ipl[0][j].tossnwin+=ipl[i][j].tossnwin;
        ipl[0][j].winsup+=ipl[i][j].winsup;
    }

}


export default ipl ;