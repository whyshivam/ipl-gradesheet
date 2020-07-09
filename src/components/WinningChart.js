import React from 'react';
import {Bar} from 'react-chartjs-2';
const teamnames=["MI","CSK","KKR","DD","SRH","KXIP","RR","RCB","DC","KTK","PW","RPS","GL"];

function fnS(i) {
  if (i == 0) {
      return ("All Seasons Combines");
  }
  else {
      return ("Season: " + i + " -> " + (2006 + i));
  }
}
function RenderBar(val) {
    const state = {
        labels: teamnames,
        datasets: [
          {
            label: (val.value.label),
            backgroundColor: '#030346d5',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
            data: val.value.data
          }
        ]
      }
      return (
        <div className="page-content">
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text: val.value.title,
                fontSize:20
              },
              legend:{
                display:false
              },
              plugins:{
                deferred: {
                  xOffset : 150,
                  yOffset: '80%',
                  delay: 800
                }
              }
              
            }}
          />
        </div>
      );
      
}



function Winning(props) {
  var ind=0;

    const season= props.ipl.map((season)=>{
      const data=[];
      const team=season.map((team)=>{
        data.push((100*team.win/team.match));
      });
      
      const title= fnS(ind);

      const val={
        data: data,
        label: "Winning Probability",
        title: title
      };
      ind++;
      if(ind>=12)
      return(
        <div></div>
      )
      else{
        return(
          <div className="col-sm-12 col-md-6 graph">
              <RenderBar value={val}/>
          </div>
            
        );
      }
       
      

    });
    return(
      <div className="no-gap team container">
        <div className="row">
          
          {season}
        
        
        </div>
        
      </div>
    );
       
}




export default Winning;