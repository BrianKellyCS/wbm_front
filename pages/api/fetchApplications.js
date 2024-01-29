// pages/api/fetchApplications.js
//import fetch from 'node-fetch';

export default async function handler(req, res) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjaGlycHN0YWNrIiwiaXNzIjoiY2hpcnBzdGFjayIsInN1YiI6ImUzZWRlN2Y1LWY4NTMtNDJlMy05NmU0LTdhMWExNGI5ZGNhNiIsInR5cCI6ImtleSJ9.lHko53tJZ7vo5KNkZeuiC5rFL3v0-eSRV7jx4-2WXAw");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("http://localhost:8090/api/applications?limit=8&tenantId=52f14cd4-c6f1-4fbd-8f87-4025e1d49242", requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching external API' });
    }
}
