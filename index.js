const express = require("express");
const cors = require("cors");
const con = require("./config");
const bcrypt = require("bcrypt");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer({ dest: 'Uploaded Resume/' });

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
const port = 5000;

//Send Email
const nodemailer = require('nodemailer');

// Configure body-parser to parse JSON
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("App is working!");
});

// POST API to save user email and password
app.post("/api/UserRegister", async (req, res) => {
  try {
    if (!req.body.user_Email || !req.body.user_Password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    const hashedPassword = await bcrypt.hash(req.body.user_Password, 10); // hash the password
    const user = {
      user_Email: req.body.user_Email,
      user_Password: hashedPassword,
    };
    const sql = "INSERT INTO user SET ?";

    con.query(sql, user, (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).send({ error: "Error registering user" });
      }

      res.status(200).send({ success: "User registered successfully" });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// POST API to save company email and password
app.post("/api/CompanyRegister", async (req, res) => {
  try {
    if (!req.body.comp_Email || !req.body.comp_Password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    const hashedPassword = await bcrypt.hash(req.body.comp_Password, 10); // hash the password
    let comp = {
      comp_Email: req.body.comp_Email,
      comp_Password: hashedPassword,
    };
    let sql = "INSERT INTO company SET ?";
    let query = con.query(sql, comp, (err, result) => {
      if (err) {
        res.status(500).send({ error: "Error registering company" });
      } else {
        res.status(200).send({ success: "Company registered successfully" });
      }
    });
  } catch (err) {
    res.status(500).send({ error: "Server error" + err });
  }
});

// POST API to authenticate user login
app.post("/api/UserLogin", async (req, res) => {
  try {
    if (!req.body.user_Email || !req.body.user_Password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    const sql = "SELECT * FROM user WHERE user_Email = ?";
    let query = con.query(sql, [req.body.user_Email], async (err, result) => {
      if (err) {
        console.error("Error retrieving user:", err);
        return res.status(500).send({ error: "Error logging in" });
      }

      if (result.length === 0) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(
        req.body.user_Password,
        result[0].user_Password
      );
      // console.log(result[0].user_Password);
      // console.log(await bcrypt.hash(req.body.user_Password, 10));

      if (!passwordMatch) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const { user_ID, user_Email } = result[0]; // Extract user_ID and user_Email from the query result

      res.status(200).send({
        success: "User logged in successfully",
        user: {
          user_ID,
          user_Email,
          // userRole:"user",
        },
      });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// POST API to authenticate company login
app.post("/api/CompanyLogin", async (req, res) => {
  try {
    if (!req.body.comp_Email || !req.body.comp_Password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    let sql = "SELECT * FROM company WHERE comp_Email = ?";
    let query = con.query(sql, [req.body.comp_Email], async (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Error logging in" });
      }

      if (result.length === 0) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(
        req.body.comp_Password,
        result[0].comp_Password
      );

      // console.log(result[0].comp_Password);
      // console.log(await bcrypt.hash(req.body.comp_Password, 10));

      if (!passwordMatch) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const { comp_ID, comp_Email } = result[0]; // Extract comp_ID and comp_Email from the query result

      res.status(200).send({
        success: "Company logged in successfully",
        company: {
          comp_ID,
          comp_Email,
          // userRole:"company",
        },
      });

    });
  } catch (err) {
    res.status(500).send({ error: "Server error" + err });
  }
});

// Api to post a job
app.post("/api/StoreJob", (req, res) => {
  const {
    comp_ID,
    job_Title,
    job_Location,
    job_Type,
    job_PeopleLimit,
    job_Deadline,
    job_PayRange,
    job_PayMin,
    job_PayMax,
    job_PayRate,
    job_Desc,
    job_ResumeStatus,
    job_DeadlineStatus,
    job_RejectionStatus
  } = req.body;

  // Insert the job into the database
  con.query(
    "INSERT INTO job (comp_ID, job_Title, job_Location, job_Type, job_PeopleLimit, job_Deadline, job_PayRange, job_PayMin, job_PayMax, job_PayRate, job_Desc, job_ResumeStatus, job_DeadlineStatus, job_RejectionStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      comp_ID,
      job_Title,
      job_Location,
      job_Type,
      job_PeopleLimit,
      job_Deadline,
      job_PayRange,
      job_PayMin,
      job_PayMax,
      job_PayRate,
      job_Desc,
      job_ResumeStatus,
      job_DeadlineStatus,
      job_RejectionStatus
    ],
    (err, results) => {
      if (err) {
        console.error("Error storing job:", err);
        res.status(500).json({ error: "Failed to store job" });
        return;
      }
      res.json({ message: "Job stored successfully" });
    }
  );
});


//Api to get jobs posted by particular company
app.get("/api/GetJobsByCompID/:comp_ID", (req, res) => {
  const comp_ID = req.params.comp_ID;

  // Retrieve jobs from the database based on comp_ID
  con.query(
    "SELECT * FROM job WHERE comp_ID = ?",
    [comp_ID],
    (err, results) => {
      if (err) {
        console.error("Error retrieving jobs:", err);
        res.status(500).json({ error: "Failed to retrieve jobs" });
        return;
      }
      
      if (results.length === 0) {
        // No data found for the provided comp_ID
        res.status(404).json({ message: "No data found" });
        return;
      }
      
      res.json(results);
    }
  );
});

//Api to get all jobs
app.get("/api/GetAllJobs", (req, res) => {
  // Retrieve all jobs from the database
  con.query("SELECT * FROM job", (err, results) => {
    if (err) {
      console.error("Error retrieving jobs:", err);
      res.status(500).json({ error: "Failed to retrieve jobs" });
      return;
    }

    res.json(results);
  });
});


// API endpoint to fetch user details for a selected job ID
app.get('/api/Candidates/:jobId', (req, res) => {
  const jobId = req.params.jobId;

  const query = `
    SELECT ud.user_ID, ud.user_Fname, ud.user_Lname, ud.user_PhoneNo, ud.user_Country, ud.user_City, ud.user_EduLevel, ud.user_FieldOfStudy, ud.user_EduStatus, ud.user_Skills, ud.user_Relocation ,j.job_Title
    FROM userdetails AS ud
    INNER JOIN jobapplications AS ja ON ud.user_ID = ja.user_ID
    INNER JOIN job AS j ON ja.job_ID = j.job_ID
    WHERE ja.job_ID = ?`;

  con.query(query, [jobId], (err, results) => {
    if (err) {
      console.error('Error retrieving user details:', err);
      res.status(500).json({ error: 'An error occurred while retrieving user details' });
      return;
    }

    res.json(results);
  });
});

//APi to get company id from job table
app.get('/api/GetCompID/:compId', (req, res) => {
  const compId = req.params.compId;

  const query = `
    SELECT job_ID
    FROM job
    WHERE comp_ID = ?`;

  con.query(query, [compId], (err, results) => {
    if (err) {
      console.error('Error retrieving job IDs:', err);
      res.status(500).json({ error: 'An error occurred while retrieving job IDs' });
      return;
    }

    const jobIds = results.map((row) => row.job_ID);
    res.json(jobIds);
  });
});


// Define a route to store company details
app.post('/api/EmployerProfile', (req, res) => {
  const { comp_ID, comp_Name, comp_EmpNo, comp_ManagerName, comp_PhoneNo } = req.body;

  // Insert the company details into the database
  const query = `INSERT INTO companydetails (comp_ID, comp_Name, comp_EmpNo, comp_ManagerName, comp_PhoneNo) VALUES (?, ?, ?, ?, ?)`;
  con.query(
    query,
    [comp_ID, comp_Name, comp_EmpNo, comp_ManagerName, comp_PhoneNo],
    (error, results) => {
      if (error) {
        console.error('Error storing company details:', error);
        res.status(500).json({ error: 'Failed to store company details' });
        return;
      }
      res.json({ message: 'Company details stored successfully' });
    }
  );
});

// Endpoint to retrieve company details by comp_ID
app.get('/api/EmployerDetails/:comp_ID', (req, res) => {
  const comp_ID = req.params.comp_ID;

  // Query the database to retrieve company details by comp_ID
  const query = 'SELECT * FROM companydetails WHERE comp_ID = ?';
  con.query(query, [comp_ID], (error, results) => {
    if (error) {
      console.error('Error retrieving company details:', error);
      res.status(500).json({ error: 'Failed to retrieve company details' });
      return;
    }

    if (results.length === 0) {
      // No company details found for the comp_ID
      res.status(404).json({ error: 'Company details not found' });
    } else {
      // Company details found
      res.json(results);
    }
  });
});

// Endpoint to retrieve user details by user_ID
app.get('/api/UserDetails/:user_ID', (req, res) => {
  const user_ID = req.params.user_ID;

  // Query the database to retrieve user details by user_ID
  const query = 'SELECT * FROM userdetails WHERE user_ID = ?';
  con.query(query, [user_ID], (error, results) => {
    if (error) {
      console.error('Error retrieving user details:', error);
      res.status(500).json({ error: 'Failed to retrieve user details' });
      return;
    }

    if (results.length === 0) {
      // No user details found for the user_ID
      res.status(404).json({ error: 'User details not found' });
    } else {
      // User details found
      res.json(results);
    }
  });
});


// Endpoint to store user resume
app.post("/api/StoreUserResume", (req, res) => {
  const {
    user_ID,
    user_Fname,
    user_Lname,
    user_PhoneNo,
    user_Country,
    user_StAddress,
    user_City,
    user_PostalCode,
    user_EduLevel,
    user_FieldOfStudy,
    user_SchoolName,
    user_EduStatus,
    user_EduFrom,
    user_EduTo,
    user_JobTitle,
    user_Company,
    user_JobStatus,
    user_JobFrom,
    user_JobTo,
    user_JobDesc,
    user_Skills,
    user_Certifications,
    user_ResumeStatus,
    user_BasePay,
    user_PayPeriod,
    user_DesiredJob,
    user_Relocation,
    user_DesiredJobType
  } = req.body;

  // Insert the user resume details into the database
  con.query(
    "INSERT INTO userdetails (user_ID, user_Fname, user_Lname, user_PhoneNo, user_Country, user_StAddress, user_City, user_PostalCode, user_EduLevel, user_FieldOfStudy, user_SchoolName, user_EduStatus, user_EduFrom, user_EduTo, user_JobTitle, user_Company, user_JobStatus, user_JobFrom, user_JobTo, user_JobDesc, user_Skills, user_Certifications, user_ResumeStatus, user_BasePay, user_PayPeriod, user_DesiredJob, user_Relocation, user_DesiredJobType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      user_ID,
      user_Fname,
      user_Lname,
      user_PhoneNo,
      user_Country,
      user_StAddress,
      user_City,
      user_PostalCode,
      user_EduLevel,
      user_FieldOfStudy,
      user_SchoolName,
      user_EduStatus,
      user_EduFrom,
      user_EduTo,
      user_JobTitle,
      user_Company,
      user_JobStatus,
      user_JobFrom,
      user_JobTo,
      user_JobDesc,
      user_Skills,
      user_Certifications,
      user_ResumeStatus,
      user_BasePay,
      user_PayPeriod,
      user_DesiredJob,
      user_Relocation,
      user_DesiredJobType
    ],
    (err, results) => {
      if (err) {
        console.error("Error storing user resume details:", err);
        res.status(500).json({ error: "Failed to store user resume details" });
        return;
      }
      res.json({ message: "User resume details stored successfully" });
    }
  );
});

// API endpoint to store a job application
app.post('/api/JobApplications', (req, res) => {
  const { user_ID, job_ID } = req.body;

  // Check if the job application already exists in the database
  con.query(
    'SELECT * FROM jobapplications WHERE user_ID = ? AND job_ID = ?',
    [user_ID, job_ID],
    (error, results) => {
      if (error) {
        console.error('Error checking existing job application: ', error);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      // If a record is found, it means the job application already exists
      if (results.length > 0) {
        res.status(400).json({ error: 'Job application already exists' });
        return;
      }

      // Insert the data into the "jobapplications" table
      con.query(
        'INSERT INTO jobapplications (user_ID, job_ID) VALUES (?, ?)',
        [user_ID, job_ID],
        (error, results) => {
          if (error) {
            console.error('Error inserting job application: ', error);
            res.status(500).json({ error: 'An error occurred' });
            return;
          }
          res.status(200).json({ message: 'Job application stored successfully' });
        }
      );
    }
  );
});

// API to count user applications on particular job
app.get('/api/JobApplications/:jobId', (req, res) => {
  const jobId = req.params.jobId;

  // Execute the SQL query to count the number of user IDs with the same job ID
  const query = `SELECT COUNT(user_ID) AS count FROM jobapplications WHERE job_ID = ${jobId}`;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const count = result[0].count;
    res.json({ count });
  });
});


// POST /api/sendEmail
app.post('/api/bookAppointment', (req, res) => {
  const {
    name,
    email,
    contactNumber,
    preferredTime,
    preferredDate,
    message,
    comp_ID,
    user_ID
  } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'uzair7508@gmail.com',
      pass: 'cfztcmuuzrihymyh'
    }
  });

  // Check if the appointment already exists for the same preferredDate and preferredTime
  con.query(
    'SELECT COUNT(*) AS count FROM consultations WHERE preferredDate = ? AND preferredTime = ?',
    [preferredDate, preferredTime],
    (error, results) => {
      if (error) {
        console.error('Error checking existing appointments:', error);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      const appointmentCount = results[0].count;

      if (appointmentCount > 0) {
        // Appointment already exists for the same preferredDate and preferredTime
        res.status(400).json({ error: 'Appointment already exists for the selected date and time.' });
        return;
      }

      // Create the email message
      const mailOptions = {
        from: `${email}`,
        to: 'uzair7508@gmail.com',
        subject: 'Consultation with an Expert',
        html: `
          <h1>Book an Appointment</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error occurred while sending email:', error);
          res.status(500).json({ error: 'Failed to send email.' });
        } else {
          console.log('Email sent successfully!');

          // Insert the appointment details into the database
          con.query(
            'INSERT INTO consultations (name, email, contactNumber, preferredTime, preferredDate, message, comp_ID, user_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, email, contactNumber, preferredTime, preferredDate, message, comp_ID, user_ID],
            (error, results) => {
              if (error) {
                console.error('Error inserting form details:', error);
                res.status(500).json({ error: 'An error occurred' });
                return;
              }
              console.log('Data inserted into the database successfully!');
              res.status(200).json({ message: 'Email sent and data stored successfully!' });
            }
          );
        }
      });
    }
  );
});

//API to get data of job from selected job_ID
app.get('/api/EditJob/:jobId', (req, res) => {
  const jobId = req.params.jobId;

  // Execute the SQL query to retrieve the job details for the given job ID
  const query = `SELECT job_ID, job_Title, job_Location, job_Type, job_PeopleLimit, job_Deadline, job_PayRange, job_PayMin, job_PayMax, job_PayRate, job_Desc, job_ResumeStatus, job_DeadlineStatus, job_RejectionStatus
    FROM job
    WHERE job_ID = ${jobId}`;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Check if any rows were returned
    if (result.length === 0) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }

    const jobDetails = result[0];
    res.json({ job: jobDetails });
  });
});

//API to update the data of job from selected job_ID
app.put('/api/UpdateJob/:jobId', (req, res) => {
  const jobId = req.params.jobId;
  const { job_Title, job_Location, job_Type, job_PeopleLimit, job_Deadline, job_PayRange, job_PayMin, job_PayMax, job_PayRate, job_Desc, job_ResumeStatus, job_DeadlineStatus, job_RejectionStatus } = req.body;

  // Execute the SQL query to update the job details
  const query = `UPDATE job SET
    job_Title = '${job_Title}',
    job_Location = '${job_Location}',
    job_Type = '${job_Type}',
    job_PeopleLimit = '${job_PeopleLimit}',
    job_Deadline = '${job_Deadline}',
    job_PayRange = '${job_PayRange}',
    job_PayMin = '${job_PayMin}',
    job_PayMax = '${job_PayMax}',
    job_PayRate = '${job_PayRate}',
    job_Desc = '${job_Desc}',
    job_ResumeStatus = '${job_ResumeStatus}',
    job_DeadlineStatus = '${job_DeadlineStatus}',
    job_RejectionStatus = '${job_RejectionStatus}'
    WHERE job_ID = ${jobId}`;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ success: true });
  });
});

//API to delete the data of job from selected job_ID
app.delete('/api/DeleteJob/:jobId', (req, res) => {
  const jobId = req.params.jobId;

  // SQL query to delete the job with the given jobId
  const query = `DELETE FROM job WHERE job_ID = ${jobId}`;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (result.affectedRows > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'No record found with the provided ID' });
    }
  });
});


//Api to store job deletion feedback into database
app.post('/api/JobDeletionFeedback', (req, res) => {
  const { comp_ID, hire, benefical, comment } = req.body;

  // SQL query to insert the feedback into the jobdeletionfeedback table
  const query = `INSERT INTO jobdeletionfeedback (comp_ID, hire, benefical, comment) VALUES ('${comp_ID}', '${hire}', '${benefical}', '${comment}')`;

  con.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ success: true });
  });
});


// Admin APIs 
// Admin registration api
app.post("/api/AdminRegister", async (req, res) => {
  try {
    if (!req.body.admin_Email || !req.body.admin_Password || !req.body.admin_Name) {
      return res.status(400).send({ error: "Admin email, name, and password are required" });
    }

    const hashedPassword = await bcrypt.hash(req.body.admin_Password, 10); // hash the password
    const admin = {
      admin_Email: req.body.admin_Email,
      admin_Name: req.body.admin_Name,
      admin_Password: hashedPassword,
    };
    const sql = "INSERT INTO admin SET ?";

    con.query(sql, admin, (err, result) => {
      if (err) {
        console.error("Error registering admin:", err);
        return res.status(500).send({ error: "Error registering admin" });
      }

      res.status(200).send({ success: "Admin registered successfully" });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Admin Login Api
app.post("/api/AdminLogin", async (req, res) => {
  try {
    if (!req.body.admin_Email || !req.body.admin_Password) {
      return res.status(400).send({ error: "Email and password are required" });
    }

    const sql = "SELECT * FROM admin WHERE admin_Email = ?";
    let query = con.query(sql, [req.body.admin_Email], async (err, result) => {
      if (err) {
        console.error("Error retrieving admin:", err);
        return res.status(500).send({ error: "Error logging in" });
      }

      if (result.length === 0) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(
        req.body.admin_Password,
        result[0].admin_Password
      );

      if (!passwordMatch) {
        return res.status(401).send({ error: "Invalid email or password" });
      }

      const { admin_ID, admin_Email } = result[0]; // Extract admin_ID and admin_Email from the query result

      res.status(200).send({
        success: "Admin logged in successfully",
        admin: {
          admin_ID,
          admin_Email,
        },
      });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// route to get all users
app.get('/api/GetAllUsers', (req, res) => {
    const query = `
        SELECT 
            u.user_ID, u.user_Email,
            ud.user_Fname, ud.user_Lname, ud.user_PhoneNo, ud.user_Country
        FROM user AS u
        INNER JOIN userdetails AS ud ON u.user_ID = ud.user_ID
    `;

    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// route to get all companies
app.get('/api/GetAllCompanies', (req, res) => {
  const query = `
      SELECT 
          c.comp_ID, c.comp_Email,
          cd.comp_Name, cd.comp_ManagerName, cd.comp_PhoneNo
      FROM company AS c
      INNER JOIN companydetails AS cd ON c.comp_ID = cd.comp_ID
  `;

  con.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

// API to get all consultation records
app.get('/api/GetAllConsultations', (req, res) => {
  let sql = "SELECT * FROM consultations";
  let query = con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

// Route to store account ban information
app.post('/api/AccountBan', (req, res) => {
  const { admin_ID, comp_ID, user_ID, status } = req.body;

  // Insert the account ban data into the database
  const query = 'INSERT INTO accountban (admin_ID, comp_ID, user_ID, status) VALUES (?, ?, ?, ?)';
  con.query(query, [admin_ID, comp_ID, user_ID, status], (err, result) => {
    if (err) {
      console.error('Error storing account ban:', err);
      res.status(500).json({ error: 'Failed to store account ban' });
      return;
    }

    console.log('Account ban stored successfully');
    res.json({ message: 'Account ban stored successfully' });
  });
});

// Route to delete account ban records by comp_ID
app.delete('/api/DeleteAccountBan/:comp_ID', (req, res) => {
  const comp_ID = req.params.comp_ID;

  // Delete the account ban records with the provided comp_ID
  const query = 'DELETE FROM accountban WHERE comp_ID = ?';
  con.query(query, [comp_ID], (err, result) => {
    if (err) {
      console.error('Error deleting account ban records:', err);
      res.status(500).json({ error: 'Failed to delete account ban records' });
      return;
    }

    console.log('Account ban records deleted successfully');
    res.json({ message: 'Account ban records deleted successfully' });
  });
});

// Route to check if a company is banned
app.get('/api/IsCompanyBanned/:comp_ID', (req, res) => {
  const comp_ID = req.params.comp_ID;

  // Query the database to check the ban status of the company
  const query = 'SELECT status FROM accountban WHERE comp_ID = ?';
  con.query(query, [comp_ID], (err, result) => {
    if (err) {
      console.error('Error checking company ban status:', err);
      res.status(500).json({ error: 'Failed to check company ban status' });
      return;
    }

    if (result.length === 0) {
      // Company is not banned
      res.json({ banned: false });
    } else {
      // Company is banned
      res.json({ banned: true });
    }
  });
});

// API to get all Jobs along with Companies
app.get('/api/FetchAllCompanyJobs', (req, res) => {
  // SQL query to fetch jobs with specified fields
  const query = `
    SELECT
      companydetails.comp_Name,
      company.comp_Email,
      job.job_ID,
      job.job_Title,
      job.job_Location,
      job.job_Type
    FROM
      job
      INNER JOIN company ON job.comp_ID = company.comp_ID
      INNER JOIN companydetails ON company.comp_ID = companydetails.comp_ID
  `;

  // Execute the query
  con.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(results);
    }
  });
});


// API to get All companies names for filter
app.get('/api/FetchAllCompanyNames', (req, res) => {
  // SQL query to fetch all company names
  const query = `
    SELECT comp_Name FROM companydetails
  `;

  // Execute the query
  con.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching companies:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      // Extract company names from the result rows
      const companies = results.map((row) => row.comp_Name);
      res.status(200).json(companies);
    }
  });
});

// API to insert pause status into database
app.post('/api/PauseJob', (req, res) => {
  const { job_ID, status } = req.body;

  const query = 'INSERT INTO pausejob (job_ID, status) VALUES (?, ?)';

  con.query(query, [job_ID, status], (error, results) => {
    if (error) {
      console.error('Error inserting data into pausejob table:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Data inserted into pausejob table successfully' });
    }
  });
});


// Endpoint to check if a job is paused
app.get('/api/CheckJobPauseStatus/:job_ID', (req, res) => {
  const jobID = req.params.job_ID;
  
  // Query the pausejob table to check if the job_ID exists
  const query = 'SELECT job_ID FROM pausejob WHERE job_ID = ?';
  con.query(query, [jobID], (error, results) => {
    if (error) {
      console.error('Error checking job status:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const paused = results.length > 0; // Check if any rows are returned
      res.json({ paused });
    }
  });
});

// API to delete pause job (Resume job)
app.delete('/api/DeleteJobPause/:job_ID', (req, res) => {
  const jobID = req.params.job_ID;

  // Delete the record from the pausejob table
  const query = 'DELETE FROM pausejob WHERE job_ID = ?';
  con.query(query, [jobID], (error, results) => {
    if (error) {
      console.error('Error deleting job record:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const rowsAffected = results.affectedRows;
      const success = rowsAffected > 0; // Check if any rows were affected

      if (success) {
        res.json({ message: 'Job record deleted successfully' });
      } else {
        res.status(404).json({ error: 'Job record not found' });
      }
    }
  });
});


// API endpoint to retrieve user details by userId
app.get('/api/EditUser/:userId', (req, res) => {
  const userId = req.params.userId;

  // Query the database
  const query = 'SELECT * FROM userdetails WHERE user_ID = ?';

  con.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Failed to execute the query:', err);
      res.status(500).json({ error: 'Failed to execute the query.' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'User details not found.' });
      return;
    }

    res.json(results[0]); // Return the first row of the results
  });
});

// API endpoint to update user details by userId
app.put('/api/UpdateUser/:userId', (req, res) => {
  const userId = req.params.userId;
  const updatedUserDetails = req.body;

  // Query the database
  const query = 'UPDATE userdetails SET ? WHERE user_ID = ?';

  con.query(query, [updatedUserDetails, userId], (err, results) => {
    if (err) {
      console.error('Failed to execute the query:', err);
      res.status(500).json({ error: 'Failed to execute the query.' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'User details not found.' });
      return;
    }

    res.json({ message: 'User details updated successfully.' });
  });
});



// API endpoint for user resume upload
app.post('/api/UploadUserResume', upload.single('user_Resume'), (req, res) => {
  const { user_ID } = req.body;

  if (!user_ID) {
    return res.status(400).json({ message: 'Missing user ID' });
  }

  const resumePath = req.file ? req.file.path : null;

  const sql = 'UPDATE userdetails SET user_Resume = ? WHERE user_ID = ?';
  con.query(sql, [resumePath, user_ID], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update user resume' });
    }

    res.status(200).json({ message: 'Resume uploaded successfully' });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
