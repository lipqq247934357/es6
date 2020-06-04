deleteScore(del, checkedValues) {
    let index = checkedValues.indexOf(del[0]);
    if(index === checkedValues.length - 1 && checkedValues.length !== 0) {
        this.setState({
            [`starScore${checkedValues.length - 1}`]: undefined
        });
        return;
    }

    const {
        starScore0, 
        starScore1, 
        starScore2, 
        starScore3, 
        starScore4
    } = this.state;
    let inputs = {
        starScore0, 
        starScore1, 
        starScore2, 
        starScore3, 
        starScore4
    };
    index = index + 1;
    for(; index<DIFFICULTY_LEVEL.length; index++) {
        let key = 'starScore'+ index;
        let nextKey = 'starScore'+ (index + 1);
        inputs[key] = inputs[nextKey] || undefined;
    }
    this.setState({
        ...inputs
    });
}

addScore(add, checkeds) {
    checkeds = checkeds.sort();
    let index = checkeds.indexOf(add[0]);
    if(index === checkeds.length - 1) {
        return;
    }

    const {
        starScore0, 
        starScore1, 
        starScore2, 
        starScore3, 
        starScore4
    } = this.state;
    let inputs = {
        starScore0, 
        starScore1, 
        starScore2, 
        starScore3, 
        starScore4
    };
    let max = DIFFICULTY_LEVEL.length - 1;
    for(; max > index; max--) {
        let key = 'starScore'+ max;
        let prevKey = 'starScore'+ (max - 1);
        inputs[key] = inputs[prevKey] || undefined;
    }
    if(index) {
        inputs['starScore'+ index] = undefined;
    }
    this.setState({
        ...inputs
    });
}