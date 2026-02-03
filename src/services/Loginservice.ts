import type { User } from "../types/type";

const USERS_KEY = 'app_users';
const SESSION_KEY = 'active_user';

export const authService = {
    // Register a new user
    register: (userData: User) => {
        const users : User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

        // Check if user already exists
        const userExists = users.find((u: any) => u.email === userData.email);
        if (userExists) {
            throw new Error("User already exists with this email.");
        }

        // Save user to "database"
        users.push(userData);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Log them in automatically after register
        localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
        return userData;
    },

    // Login existing user
    login: (credentials: Omit<User, 'id' | 'name'>) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

        const user = users.find(
            (u: any) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
            throw new Error("Invalid email or password.");
        }

        // Save session
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        return user;
    },

    // Logout
    logout: () => {
        localStorage.removeItem(SESSION_KEY);
    },

    // Get current logged in user
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    }
};