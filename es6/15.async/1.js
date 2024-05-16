// 写个async await的使用demo代码

// 异步函数，模拟获取用户数据
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userId,
                username: 'example_user',
                email: 'user@example.com'
            };
            resolve(userData);
        }, 100); // 模拟异步操作延迟
    });
}

// 使用 async/await 处理异步操作
async function fetchUserData(userId) {
    try {
        console.log('Fetching user data...');
        const userData = await getUserData(userId);
        console.log('User data:', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // 重新抛出错误，让调用者处理
    }
}

// 主函数，调用使用 async/await 的函数
async function main() {
    try {
        const userId = 123;
        const userData = await fetchUserData(userId);
        console.log('User data successfully fetched:', userData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// 调用主函数
main();
