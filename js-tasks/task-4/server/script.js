import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const url = 'http://exercise.develop.maximaster.ru/service/cpu/';
const AUTH = 'Basic ' + Buffer.from('cli:12344321').toString('base64');

app.get('/cpu', async(req, res) => {
    try {
        const response = await fetch(url,{
            headers: {
                'Authorization': AUTH
            }
        });

        const data = await response.text();
        res.set('Access-Control-Allow-Origin', '*');
        res.send(data);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка прокси-сервера' });
    }
});

app.listen(port, () =>{
    console.log(`Прокси-сервер запущен: http://localhost:${port}`);
});