function soal2(param)
{
     var newArray = [
    {
     firstName1 : param[0][0],
     lastName1 : param[0][1],
     hobbies1 : param[0][2],
     profession1 : param[0][3],
    },
    {
     firstName2 : param[1][0],
     lastName2 : param[1][1],
     hobbies2 : param[1][2],
     profession2 : param[1][3]
    }
    ];

    return newArray;
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));