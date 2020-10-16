import { writable } from 'svelte/store';

export const charities = writable([]);
export const charity = writable({});

export async function getCharities() {
    // const res = await fetch('https://charity-api-bwa.herokuapp.com/charities');
    const res = await fetch('https://guarded-earth-39841.herokuapp.com/beneficiaries', {
        headers: {
            'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY2N2Q1MTZkZWM2YTYxYTc1N2QwNWQwIn0sImlhdCI6MTYwMjg4NjI2NSwiZXhwIjoxNjAyODkxMjY1fQ.lQDD7L5xTuMAvYKs2PMuyoSHH5Iet49VWpBLaUZ9Tyk'
        }
    });
    const data = await res.json();
    console.log(data);
    charities.set(data);
    if(res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

export async function getCharity(id) {
    const res = await fetch(`https://charity-api-bwa.herokuapp.com/charities/${id}`);
    const data = await res.json();
    charity.set(data); 
    if(res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

getCharities();