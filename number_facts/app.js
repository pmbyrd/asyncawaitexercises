console.log("Hello from number_facts/app.js");
//1. Make a call to the numbers API to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.
let favNum = 6;
let BASE_URL = "http://numbersapi.com/";
let getNumFact = async function (num) {
  let res = await axios.get(`${BASE_URL}${num}?json`);
  console.log(res.data.text);
};

getNumFact(favNum);

//2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let favNums = [6, 7, 8, 9];
let getNumFacts = async function (nums) {
  try {
    let res = await axios.get(`${BASE_URL}${nums}?json`);
    console.table(res.data);
    for (let num in res.data) {
      $(".facts").append(`<p>${res.data[num]}</p>`);
    }
  } catch (error) {
    console.log(error);
  }
};
getNumFacts(favNums);

//3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page.Example URL with multiple numbers queried
let favNumsTimes4 = [6, 6, 6, 6];
let getNumFactsTimes4 = async function (nums) {
  try {
    let res = await axios.get(`${BASE_URL}${nums}?json`);
    console.table(res.data);
    for (let num in res.data) {
      $(".facts").append(`<p>${res.data[num]}</p>`);
    }
  } catch (error) {
    console.log(error);
  }
};

getNumFactsTimes4(favNumsTimes4);
