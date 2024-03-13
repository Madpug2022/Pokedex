const generation = {
    i: 151,
    ii: 251,
    iii: 386,
    iV: 493,
    v: 649,
    vi: 721,
    vii: 809,
    viii: 898
}

export const generationPicker = (id: number) => {
    if (id <= generation.i) {
        return 'i'
    } else if (id <= generation.ii) {
        return 'ii'
    } else if (id <= generation.iii) {
        return 'iii'
    } else if (id <= generation.iV) {
        return 'iV'
    } else if (id <= generation.v) {
        return 'v'
    } else if (id <= generation.vi) {
        return 'vi'
    } else if (id <= generation.vii) {
        return 'vii'
    } else if (id <= generation.viii) {
        return 'viii'
    } else return 'ix'
}
