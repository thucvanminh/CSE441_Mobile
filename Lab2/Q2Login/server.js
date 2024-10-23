const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

//Initialize the Express application
const app = express();
const port = 3000;

//Use bodyParser to parse incoming request bodies as JSON
app.use(bodyParser.json());

//MYSQL database connection cofiguration
// Chỉnh thông số khớp với database của mình
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'lab2cse441'
});
//Connect to the database	
db.connect((err) => {
	if (err) {
		console.error('Error connecting to database', err);
		return;

	}
	console.log('Connect to the MySql database');
});

// CRUD Operations
// 1. Create a new user (POST request)
app.post('/api/users', (req, res) => {
	const { name, email } = req.body;
	const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

	db.query(sql, [name, email], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error creating user', error: err });
		} else {
			res.status(201).json({ message: 'User created', userId: result.insertId });
		}
	});
});

// 2. Get all users (GET request)
app.get('/api/users', (req, res) => {
	const sql = 'SELECT * FROM users';

	db.query(sql, (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching users', error: err });
		} else {
			res.json(results);

		}
	});
});



// 3. Get a specific user by ID (GET request)
app.get('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const sql = 'SELECT * FROM users WHERE id = ?';

	db.query(sql, [userId], (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching user', error: err });
		} else if (results.length === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json(results[0]);

		}
	});
});

// 4. Update a user by ID (PUT request)
app.put('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const { name, email } = req.body;
	const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

	db.query(sql, [name, email, userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error updating user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User updated' });

		}
	});
});


// 5. Delete a user by ID (DELETE request)
app.delete('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const sql = 'DELETE FROM users WHERE id = ?';

	db.query(sql, [userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error deleting user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User deleted' });
		}
	});
});











// 1. Create a new book (POST request)
app.post('/api/books', (req, res) => {
	const { id,name, description,price,note } = req.body;
	const sql = 'INSERT INTO users (id,name, description,price,note) VALUES (?, ?)';

	db.query(sql, [id, name,description,price,note], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error creating user', error: err });
		} else {
			res.status(201).json({ message: 'User created', userId: result.insertId });
		}
	});
});

// 2. Get all books (GET request)
app.get('/api/books', (req, res) => {
	const sql = 'SELECT * FROM books';

	db.query(sql, (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching users', error: err });
		} else {
			res.json(results);

		}
	});
});




// 3. Get a specific books by ID (GET request)


app.get('/api/books/:id', (req, res) => {
	const id = req.params.id;
	const sql = 'SELECT * FROM books WHERE id = ?';

	db.query(sql, [id], (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching book', error: err });
		} else if (results.length === 0) {
			res.status(404).json({ message: 'Book not found' });
		} else {
			res.json(results[0]);
		}
	});
});

// 4. Update a user by ID (PUT request)
app.put('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const { name, email } = req.body;
	const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

	db.query(sql, [name, email, userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error updating user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User updated' });

		}
	});
});


// 5. Delete a user by ID (DELETE request)
app.delete('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const sql = 'DELETE FROM users WHERE id = ?';

	db.query(sql, [userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error deleting user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User deleted' });
		}
	});
});


app.post('/api/books', (req, res) => {
	const { name, email } = req.body;
	const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

	db.query(sql, [name, email], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error creating user', error: err });
		} else {
			res.status(201).json({ message: 'User created', userId: result.insertId });
		}
	});
});

// 2. Get all users (GET request)
app.get('/api/books', (req, res) => {
	const sql = 'SELECT * FROM users';

	db.query(sql, (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching users', error: err });
		} else {
			res.json(results);

		}
	});
});



// 3. Get a specific user by ID (GET request)
app.get('/api/books/:id', (req, res) => {
	const userId = req.params.id;
	const sql = 'SELECT * FROM users WHERE id = ?';

	db.query(sql, [userId], (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error fetching user', error: err });
		} else if (results.length === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json(results[0]);

		}
	});
});

// 4. Update a user by ID (PUT request)
app.put('/api/books/:id', (req, res) => {
	const userId = req.params.id;
	const { name, email } = req.body;
	const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

	db.query(sql, [name, email, userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error updating user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User updated' });

		}
	});
});


// 5. Delete a user by ID (DELETE request)
app.delete('/api/users/:id', (req, res) => {
	const userId = req.params.id;
	const sql = 'DELETE FROM users WHERE id = ?';

	db.query(sql, [userId], (err, result) => {
		if (err) {
			res.status(500).json({ message: 'Error deleting user', error: err });
		} else if (result.affectedRows === 0) {
			res.status(404).json({ message: 'User not found' });
		} else {
			res.json({ message: 'User deleted' });
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
