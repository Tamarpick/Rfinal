import axios from 'axios';
import { BREEDS_URL, CATS_API_URL } from './util';


// interface representing the parameters of an API call
export interface Options {
    limit?: number;
    breed_ids?: string[];
    category_ids?: string[];
    page?: number;
}

// function that gets all cat data from the API
export const getCatData = async (options: Options) => {
    const breeds = options.breed_ids ? options.breed_ids.join(',') : '';
    try {
        const res = await axios.get(CATS_API_URL, {
            params: {
                has_breeds: 1,
                limit: options.limit ? options.limit : 100,
                breed_ids: breeds,
                category_ids: options.breed_ids,
                page: options.page ? options.page : 0
            },
        });
        return res.status === 200 ? {
            success: true,
            data: res.data
        } : {
            success: false,
            error: res.data
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            error: err,
        };
    }
};

// function that gets all cat breeds from the API
export const getCatBreeds = async () => {
    try {
        const res = await axios.get(BREEDS_URL);
        if (res.status === 200) {

            const catsBreedsMap = new Map(res.data.map((breed: any) => [breed.id, breed]));
            return {
                success: true,
                data: catsBreedsMap
            }

        }
        return {
            success: false,
            error: res.data
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            error: err,
        };
    }
}

