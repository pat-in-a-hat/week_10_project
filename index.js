//Patrick Warner - Montana Code School Week 10 Project
//DOM, InnerHTML, JS
//Oct 2022

//Utilizing Bootstrap 5.2.2 and jquery 3.6.1, installed via npm


//Javascript Array in Key:Value pairs for all 32 NFL Teams
const nfl_array = [
    {id:1,	team:"Arizona Cardinals", abbr: "ARI", conf:"NFC", div:"West"},
    {id:2, team:"Atlanta Falcons", abbr: "ATL", conf:"NFC", div:"South" },
    {id:3, team:"Baltimore Ravens", abbr:"BAL", conf:"AFC", div:"North"},
    {id:4, team:"Buffalo Bills", abbr:"BUF", conf:"AFC", div:"East"},
    {id:5, team:"Carolina Panthers", abbr:"CAR", conf:"NFC", div:"South"},
    {id:6, team:"Chicago Bears", abbr:"CHI", conf:"NFC", div:"North"},
    {id:7, team:"Cincinnati Bengals", abbr:"CIN", conf:"AFC", div:"North"},
    {id:8, team:"Cleveland Browns", abbr:"CLE", conf:"AFC", div:"North"},
    {id:9, team:"Dallas Cowboys", abbr:"DAL", conf:"NFC", div:"East"},
    {id:10, team:"Denver Broncos", abbr:"DEN", conf:"AFC", div:"West"},
    {id:11, team:"Detroit Lions", abbr:"DET", conf:"NFC", div:"North"},
    {id:12, team:"Green Bay Packers", abbr:"GB", conf:"NFC", div:"North"},
    {id:13, team:"Houston Texans", abbr:"HOU", conf:"AFC", div:"South"},
    {id:14, team:"Indianapolis Colts", abbr:"IND", conf:"AFC", div:"South"},
    {id:15, team:"Jacksonville Jaguars", abbr:"JAX", conf:"AFC", div:"South"},
    {id:16, team:"Kansas City Chiefs", abbr:"KC", conf:"AFC", div:"West"},
    {id:17, team:"Miami Dolphins", abbr:"MIA", conf:"AFC", div:"East"},
    {id:18, team:"Minnesota Vikings", abbr:"MIN", conf:"NFC", div:"North"},
    {id:19, team:"New England Patriots", abbr:"NE", conf:"AFC", div:"East"},
    {id:20, team:"New Orleans Saints", abbr:"NO", conf:"NFC", div:"South"},
    {id:21, team:"New York Giants", abbr:"NYG", conf:"NFC", div:"East"},
    {id:22, team:"New York Jets", abbr:"NYJ", conf:"AFC", div:"East"},
    {id:23, team:"Las Vegas Raiders", abbr:"LV", conf:"AFC", div:"West"},
    {id:24, team:"Philadelphia Eagles", abbr:"PHI", conf:"NFC", div:"East"},
    {id:25, team:"Pittsburgh Steelers", abbr:"PIT", conf:"AFC", div:"North"},
    {id:26, team:"Los Angeles Chargers", abbr:"LAC", conf:"AFC", div:"West"},
    {id:27, team:"San Francisco 49ers", abbr:"SF", conf:"NFC", div:"West"},
    {id:28, team:"Seattle Seahawks", abbr:"SEA", conf:"NFC", div:"West"},
    {id:29, team:"Los Angeles Rams", abbr:"LAR", conf:"NFC", div:"West"},
    {id:30, team:"Tampa Bay Buccaneers", abbr:"TB", conf:"NFC", div:"South"},
    {id:31, team:"Tennessee Titans", abbr:"TEN", conf:"AFC", div:"South"},
    {id:32, team:"Washington Commanders", abbr:"WAS", conf:"NFC", div:"East"}
];

function optionCreator(){
    let selector = document.getElementById('nfl-team-sel');
    //selector.innerHTML = '';
    let option_selected = document.createElement('option');
    option_selected.setAttribute('selected', '')
    option_selected.innerHTML = 'Select an NFL Team';
    selector.appendChild(option_selected)
    for (let i in nfl_array){
        let option = document.createElement('option')
        option.value = i
        option.innerHTML = nfl_array[i].team
        selector.appendChild(option)
    }
}

const submit_array = [];
let id = 0;

function onClick(){
    optionCreator();
    document.getElementById('submit-btn').addEventListener("click", () => {
        submit_array.push({id:id, team: document.getElementById('team-name').value, nfl_pick: nfl_array[document.getElementById('nfl-team-sel').value].team})
        id++
        //console.log(submit_array)
        //console.log(id)
        tableBuilder(submit_array);
        document.getElementById('team-name').value = ''
        document.getElementById('nfl-team-sel').selectedIndex = 0;
    })
}

function tableBuilder(array){
   // start_day = new Date(2022,09,08)
    //date = new Date()
    //nfl_week = switch()
    while(document.getElementById('table-body').firstChild){
        document.getElementById('table-body').removeChild(document.getElementById('table-body').firstChild)
    }
   
    for (let row of array){
        let table = document.getElementById('table-body')
        let new_row = document.createElement('tr')
        let new_data = document.createElement('td')
        let new_data2 = document.createElement('td')
        table.appendChild(new_row)
        table.appendChild(new_data)
        new_data.innerHTML = `${row.team}`

        table.appendChild(new_data2)
        new_data2.innerHTML = `${row.nfl_pick}`

        //initially had issue with innerHTML overwriting and thought it could be a nesting issue so wrote below code
        //table.insertAdjacentElement("beforeend", new_data2)
    }
}

onClick();


//Utilizing Bootstrap 5, jquery, and csv-parse all installed via npm
//const fs = require("node:fs");
//const {parse} = require("csv-parse");
//const {data} = require("jquery");
/*
import {parse} from '/~/node_modules/csv-parse'
import {data} from '/~/node_modules/jquery'
const nfl_array = []



fs.createReadStream("https://gist.github.com/pat-in-a-hat/68d6a095c883c0a9a698fce65f54d979#file-nfl_teams-csv")
    .pipe(
        parse({
            delimiter: ",",
            columns: true,
            ltrim: true,
        }))
    .on("data", (row) => {
        nfl_array.push(row)
        console.log(row)
    })
    .on("error", (error) => {
        console.log(error.message)
    })
    .on("end", () => {
        console.log("data")
    })

    console.log(data)*/

