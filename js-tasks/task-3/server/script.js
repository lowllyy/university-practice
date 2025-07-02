import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

const API_URL = 'http://exercise.develop.maximaster.ru/service/products/';
const AUTH = 'Basic ' + Buffer.from('cli:12344321').toString('base64');

app.get('/products', async (req, res) => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Authorization': AUTH
            }
        });

        const data = await response.json();
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка прокси-сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`Прокси-сервер запущен: http://localhost:${PORT}`);
});