import React from 'react';
import {Line} from 'react-chartjs-2';
const teamnames=["Mumbai Indians","Chennai Super Kings","Kolkata Knight Riders","Delhi Capitals","Sunrisers Hyderabad","Kings XI Punjab","Rajasthan Royals","Royal Challengers Bangalore","Deccan Chargers","Kochi Tuskers Kerala","Pune Warriors","Rising Pune Supergiants","Gujarat Lions"];

function fnS(i) {
    if (i == 0) {
        return ("Overall");
    }
    else {
        return (2007+ i );
    }
}
const label=[];
for( var i=0;i<10;i++)
label.push(fnS(i));

function RenderLine(val) {
    const state = {
        labels: label,
        datasets: [
          {
            label: (val.value.label),
            backgroundColor: '#007bff',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
            data: val.value.data
          }
        ]
      }
      return (
        <div >
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text: val.value.title,
                fontSize:20
              },
              legend:{
                display:false
              }
            }}
          />
        </div>
      );
      
}

function Season(props) {
    const tdata=[];
    const title=[];
    
    for(var i=0;i<13;i++){
        const data=[];
        var jnd=0;
        const team=props.ipl.map((team)=>{
            if(jnd>=0)
            data.push((100*team[i].win/team[i].match));
            jnd++;
            // console.log(team[i].tname+team[i].win)
        });
        tdata.push(data);
        
    }
    var ind=0;
    const line=tdata.map((data)=>{
        const val={
            data: data,
            label: "Win Progress",
            title: teamnames[ind]
        };
        ind++;
        return(
            <div className="col-sm-12 col-md-6">
              <RenderLine value={val}/>
            </div>
        );


    });

    return(
        <div className="win no-gap team container">
        <div className="row">
        {line}
        </div>
       
      </div>

    );
}
export default Season;