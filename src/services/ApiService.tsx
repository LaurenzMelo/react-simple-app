import axios from 'axios'

export class ApiService {
    public static getUsers() {
        let users = axios.get('https://jsonplaceholder.typicode.com/users');

        return users;
    }

    public static getPosts() {
        let posts = axios.get('https://jsonplaceholder.typicode.com/comments');

        return posts;
    }
}