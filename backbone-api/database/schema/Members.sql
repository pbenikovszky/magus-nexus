CREATE TABLE members (
    member_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    status SMALLINT NOT NULL DEFAULT 1,
    registration_date DATE NOT NULL DEFAULT CURRENT_DATE,
    password_hash VARCHAR(255) NOT NULL
);