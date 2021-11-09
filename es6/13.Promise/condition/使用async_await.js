const taskEffect = async (task) => {
    console.log('2222');
    await Promise.resolve().then(() => {
        console.log('2.5555');
    });
    console.log('33333');
}

taskEffect();