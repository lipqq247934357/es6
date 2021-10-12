let getName = () => {
    console.log('lipeng');
};
setTimeout(() => {
    getName = () => {
        console.log('wangqun');
    }
}, 100);
export default getName;