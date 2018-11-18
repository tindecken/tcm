import _ from 'lodash'

var isArray = function(a) {
    return (!!a) && (a.constructor === Array)
}

var isObject = function(a) {
    return (!!a) && (a.constructor === Object)
}

function toCodeName(type, name){
    return `${type}_${_.snakeCase(name)}`
}


/*
Tìm nested trong object o, có _id trùng với input para id hay không
*/
function findBy_id(o, id) {
    //Early return
    if( o._id === id ){
      return o;
    }
    let result, p;
    for (p in o) {
        if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
            result = findBy_id(o[p], id);
            if(result){
                return result;
            }
        }
    }
    return result;
}

function removeBy_id(list, key, value, next) {
    let result = [];
    let type = getType(value)
    for (var i = 0; i < list.length; i++) {
        if (list[i][key] === value) {
            continue;
        } else {
            switch(type){
                case 'testsuite':
                    if(list[i]['testsuites'] && list[i]['testsuites'].indexOf(value) > -1){
                        list[i]['testsuites'].splice(list[i]['testsuites'].indexOf(value), 1)
                    }
                    break
                case 'testgroup':
                    if(list[i]['testgroups'] && list[i]['testgroups'].indexOf(value) > -1){
                        list[i]['testgroups'].splice(list[i]['testgroups'].indexOf(value), 1)
                    }
                    break
                case 'testcase':
                    if(list[i]['testcaseS'] && list[i]['testcaseS'].indexOf(value) > -1){
                        list[i]['testcaseS'].splice(list[i]['testcaseS'].indexOf(value), 1)
                    }
                    break
            }
            result.push(list[i]);
            if (list[i][next]) {
                list[i][next] = removeBy_id(list[i][next], key, value, next);
            }
        }
    }
    return result;
}

function getType(id){
    return id.split("_", 2)[0]
}

export {
    isArray, isObject, toCodeName, findBy_id, removeBy_id
}