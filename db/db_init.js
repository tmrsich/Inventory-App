// Initializes the database along with some sample data
const db = require("./db_connection");

// Delete existing table, if any
const drop_itemtable_sql = "DROP TABLE IF EXISTS Item"
db.execute(drop_itemtable_sql);

// Creates the table
const create_itemtable_sql = `
    CREATE TABLE Item (
        item_id INT NOT NULL AUTO_INCREMENT,
        class_name VARCHAR(45) NOT NULL,
        assignment_name VARCHAR(45) NOT NULL,
        due_date VARCHAR(10) NOT NULL,
        priority_rating TINYINT NOT NULL,
        assignment_type VARCHAR(45),
        assignment_format VARCHAR(45),
        interest_level TINYINT NULL,
        relevance_level TINYINT NULL,
        description VARCHAR(200) NULL,
        user VARCHAR(50) NULL,
        PRIMARY KEY (item_id, assignment_name)
    );
`
db.execute(create_itemtable_sql);

// Adds some sample items
const insert_itemtable_sql = `
    INSERT INTO Item
        (class_name, assignment_name, due_date, priority_rating, assignment_type, assignment_format, interest_level, relevance_level, description)
    VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?);
`
db.execute(insert_itemtable_sql, ["CSCI-181", "Project 1", "12-06-2024", "6", "Project", "Practical", "8", "5", "Finish details table and styles"]);
db.execute(insert_itemtable_sql, ["MGMT-196", "Final Presentation - Paper", "12-06-2024", "10", "Essay", "Research", "2", "8", "Find sources and complete annotated bibliography"]);
db.execute(insert_itemtable_sql, ["SPAN-301", "Complete final project", "12-11-2024", "10", "Oral", "Verbal", "6", "5", "Complete organization sheet"]);
db.execute(insert_itemtable_sql, ["ECON-201", "Final Exam", "12-09-2024", "5", "Final", "Practical", "3", "8", "Study for final exam"]);

// Reads the sample items inserted
const read_itemtable_sql = "SELECT * FROM Item";

db.execute(read_itemtable_sql,
    (error, results) => {
        if (error)
            throw error;

        console.log("Table 'Item' initialized with:" + results);
    }
);
db.end();