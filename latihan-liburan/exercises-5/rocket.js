function rocket(param)
{
    var result = []

    for(i =0;i < param;i++){
        var tampung = []
        for(j = 0; j < param;j++){
            tampung.push([i,j])
            result.push(tampung)
            tampung = []
        }   
    }
    return result
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/