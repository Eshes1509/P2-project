function x1(q9x, q10y) {
    let delta, x1;

    /* To make sure that we get a postive delta */
    if (q9x > q10y) {
        delta = q9x - q10y;
    } else {
        delta = q10y - q9x;
    }

    switch (delta) {
        case 0:
            x1 = 1;
            break;
        case 1:
            x1 = 0.5;
            break;
        case 2:
            x1 = 0;
            break;
        case 3:
            x1 = -0.5;
            break;
        case 4:
            x1 = -1;
            break;
    }

    return x1;
}

module.exports = x1;