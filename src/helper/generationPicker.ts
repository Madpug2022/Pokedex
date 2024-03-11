const generation = {
    i: 151,
    ii: 100,
    iii: 135,
    iV: 107,
    v: 156,
    vi: 72,
    vii: 88,
    viii: 89
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
    }
}
