function peopleForTime(t) {
    let result = [];
    for (i in respondents) {
        r = respondents[i];
        if (r.myCanDos.includes(t.toString())) {
            result.push(r.id);
        }
    }
    return result;
}

function callAPI() {
    let times = [];
    for (r of grid.rows) {
        for (c of r.cells) {
            if (c.id != '') {
                times.push(Number(c.id));
            }
        }
    }
    let sets = [];
    for (t of times) {
        sets.push({ [t]: peopleForTime(t) });
    }
    fetch("https://wig-solver.herokuapp.com/solve", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sets)
    }).then(res => {
        return res.json();
    }).then(data => {
        for (i of data) {
            document.getElementById(i).classList.add('wigHighlight');
        }
    }).catch(e => {
        console.error(e);
    });
}

function clear() {
    for (r of grid.rows) {
        for (c of r.cells) {
            if (c.id != '') {
                c.classList.remove('wigHighlight');
            }
        }
    }
}

document.addEventListener('wigSolve', callAPI);
document.addEventListener('clearSolns', clear);