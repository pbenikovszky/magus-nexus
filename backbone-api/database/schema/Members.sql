CREATE TABLE Members (
    MemberId INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    MiddleName VARCHAR(30),
    LastName VARCHAR(50) NOT NULL,
    EmailAddress VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,  -- hashed password
    Status TINYINT UNSIGNED NOT NULL,
    DateOfRegistration DATE NOT NULL
);