import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Rutuja Ghogare",
        email: "rutuja@example.com",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "Aditi Chikkalli",
        email: "aditi@example.com",
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;