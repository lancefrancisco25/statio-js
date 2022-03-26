let statioSave = {};

const statio = {
    createState: function (name) {
        const params = statioStatePriv(name);
        statioSave[name] = []
        return {set: params.set, attach: params.attach, detach: params.detach, get: params.get}
    },
    catchEffect(funct, params) {
        for (let i = 0; i < params.length; i++) {
            statioSave[params[i]].push(funct);
        }
    }
}

function statioStatePriv(name) {
    let atLe;
    let curState;
    let attchFunct;
    const params = {
        set(i) {
            curState = i;
            let ia = 0, len = statioSave[name].length;
            while (ia < len) {
                statioSave[name][ia](i);
                ia++
            }
            return params;
        },
        attach(funct) {
            statioSave[name].push(funct);
            atLe = statioSave[name].length - 1;
            attchFunct = funct;
            return {detach: this.detach}
        },
        detach() {
            statioSave[name].splice(atLe, 1);
            return ({
                attach: function () {
                    params.attach(attchFunct)
                }
            })
        },
        get() {
            return curState
        }
    }
    return params;
}

module.exports = statio;