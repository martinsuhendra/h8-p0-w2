function soal2(param)
{
    var firstName1 = param[0][0]
    var lastName1 = param[0][1]
    var hobbies1 = param[0][2]
    var profession1 = param[0][3]

    var firstName2 = param[1][0]
    var lastName2 = param[1][1]
    var hobbies2 = param[1][2]
    var profession2 = param[1][3]

    console.log('[')
    console.log('    {')
    console.log('        firstName: ' + firstName1)
    console.log('        lastName: ' + lastName1)
    console.log('        hobbies: ' + hobbies1)
    console.log('        profession: ' + profession1)
    console.log('    },')
    console.log(' ')
    console.log('    {')
    console.log('        firstName: ' + firstName2)
    console.log('        lastName: ' + lastName2)
    console.log('        hobbies: ' + hobbies2)
    console.log('        profession: ' + profession2)
    console.log('    }')
    console.log(']')

    return ' '
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