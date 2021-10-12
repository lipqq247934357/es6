export let a = 100;
export let getAge = () => {
    console.log('28');
};
setTimeout(() => {
    a = 200;
    getAge = () => {
        console.log('27');
    };
});