function concat(...p) {
    let result = '';

    for (let item of p) {
        result += item;
    }
    return result;
}


function rowStyle(par) {
    console.log(concat('class="', par, '"'));
    return concat('class="', par, '"');
}

function style(par) {
    if (par.indexOf(' ') !== -1) {
        if (par.split(' ')[1] === 'must-choose') {
            console.log(concat(':class="$style[\'', par.split(' ')[0], '\']"') + ' ' + concat('class="', par.split(' ')[1], '"'));
            return concat(':class="$style[\'', par.split(' ')[0], '\']"') + ' ' + concat('class="', par.split(' ')[1], '"');
        } else {
            console.log(concat(`:class="[$style['${par.split(' ')[0]}'],$style['${par.split(' ')[1]}']]"`));
            return concat(`:class="[$style['${par.split(' ')[0]}'],$style['${par.split(' ')[1]}']]"`);
        }
    } else {
        console.log(concat(':class="$style[\'', par, '\']"'));
        return concat(':class="$style[\'', par, '\']"');
    }
}

// 这是list页面的数据
// let arr = ['search', 'search-btn-box', 'content', 'table-content'];


// 这是detail页面的数据
let arr = ['edit-content', 'content-border', 'btn-action', 'row', 'name', 'content', 'name must-choose', 'content last-box'];


let content = ``;
//
// for (let item of arr) {
//     let a = rowStyle(item);
//     let b = style(item);
//     content = content.replace(new RegExp(a, 'g'), b);
// }
// console.log(content);

style('sql-textarea');
