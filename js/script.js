// Question 1

//function getRemainder(a,b) {
//    return a % b;
//    }

const getRemainder = (remainder) => console.log(remainder);

// Question 2
// API key: f64b7381636040c4ac434b8e8fb2371a
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f64b7381636040c4ac434b8e8fb2371a
fetch ('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f64b7381636040c4ac434b8e8fb2371a')
. then (data => {return data.json()}).then (post =>  {console.log(post.title);})