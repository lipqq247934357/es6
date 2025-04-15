
import fs from 'fs';

// 文件路径
// const inputFilePath = './标准的mp3音频.mp3';
// const inputFilePath = './wav文件.wav';
const inputFilePath = './rec-3330ms-16kbps-16000hz.mp3';

// 输出文件路径
const outputFilePath = './output.txt';

// 读取 MP3 文件并转换为 Base64
fs.readFile(inputFilePath, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // 转为 Base64 编码
    const base64String = data.toString('base64');

    // 将 Base64 编码保存到新文件
    fs.writeFile(outputFilePath, base64String, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Base64 string has been saved to:', outputFilePath);
        }
    });
});