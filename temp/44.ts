submitToParent = async () => {
    const {forms} = this.state;
    let hasError = false;
    let VALIDATA_ERROR = 'error';
    const arr: number[] = [];
    // for (const prop of Object.keys(forms)) {
    //     debugger;
    //     await forms[prop].validateFields().then((values) => {
    //     debugger;

    //         arr.push(values);
    //     }).catch((err) => {
    //         debugger
    //         const values = err.values;
    //         if (err.score) {
    //             VALIDATA_ERROR = 'passError';
    //             const {score} = values;
    //             if (score === '' || score === null || score === undefined) {
    //                 arr.push(values);
    //                 VALIDATA_ERROR = '';
    //             }
    //             else {
    //                 minAndMaxValidator(0, 999, '分数').validator({}, score, error => {
    //                     if (!error) {
    //                         arr.push(values);
    //                         VALIDATA_ERROR = '';
    //                     }
    //                     else {
    //                         VALIDATA_ERROR = 'error';
    //                     }
    //                 });
    //             }
    //         }
    //         hasError = true;
    //     })
    // }
    await Promise.resolve();
    Object.keys(forms).forEach(key => {
        const form = forms[key];
        form.validateFields((err: any, values: any) => {
            // values.scoreRank = getCommentType(values.score, values.totalScore);
            if (err) {
                if (err.score) {
                    VALIDATA_ERROR = 'passError';
                    const {score} = values;
                    if (score === '' || score === null || score === undefined) {
                        arr.push(values);
                        VALIDATA_ERROR = '';
                    }
                    else {
                        minAndMaxValidator(0, 999, '分数').validator({}, score, error => {
                            if (!error) {
                                arr.push(values);
                                VALIDATA_ERROR = '';
                            }
                            else {
                                VALIDATA_ERROR = 'error';
                            }
                        });
                    }
                }
                hasError = true;
            }
            else {
                arr.push(values);
            }
        });
    });
    debugger;
    return {hasError, errorType: VALIDATA_ERROR, courseValue: arr};
};