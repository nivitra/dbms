// Q&A DATA: each item = one question + SQL answer
// Based on your DBMS INTERNAL-1 questions and SQL we wrote earlier.[file:1]
const qaData = [
    // 1 a-d
    {
      id: "1a",
      set: 1,
      title: "1(a) List the ename, sal, deptno in desc order of deptnum and sal.",
      question: "List the ename, sal, deptno in desc order of deptnum and sal.",
      answer: `SELECT ename,
         sal,
         did AS deptno
  FROM   emp
  ORDER  BY did DESC, sal DESC;`
    },
    {
      id: "1b",
      set: 1,
      title: "1(b) Empnames and jobs with job starting with A and ending with T.",
      question: "List all empnames and jobs whose job title starts with A and ends with T.",
      answer: `SELECT ename,
         job
  FROM   emp
  WHERE  job LIKE 'A%T';`
    },
    {
      id: "1c",
      set: 1,
      title: "1(c) Employees who are not managers.",
      question: "List the names of employees who are not managers.",
      answer: `SELECT ename
  FROM   emp
  WHERE  job <> 'MANAGER';`
    },
    {
      id: "1d",
      set: 1,
      title: "1(d) Update managers' salary by 20%.",
      question: "Update managers sal to 20%.",
      answer: `UPDATE emp
  SET    sal = sal * 1.2
  WHERE  job = 'MANAGER';`
    },
  
    // 2 a-d
    {
      id: "2a",
      set: 2,
      title: "2(a) Alter age field to integer datatype.",
      question: "Alter the age field to integer datatype.",
      answer: `ALTER TABLE sailors
  MODIFY age NUMBER;`
    },
    {
      id: "2b",
      set: 2,
      title: "2(b) Names and ages of all sailors.",
      question: "Find the names and ages of all sailors.",
      answer: `SELECT sname,
         age
  FROM   sailors;`
    },
    {
      id: "2c",
      set: 2,
      title: "2(c) Names of sailors who have reserved boat no 103.",
      question: "Find the names of sailors who have reserved boat no 103.",
      answer: `SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid
  WHERE  r.bid = 103;`
    },
    {
      id: "2d",
      set: 2,
      title: "2(d) Names of sailors who have reserved red or green boat (set operations).",
      question: "Find the names of sailors who have reserved red or a green boat using set operations.",
      answer: `SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid
         JOIN boats    b ON r.bid = b.bid
  WHERE  b.color = 'red'
  UNION
  SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid
         JOIN boats    b ON r.bid = b.bid
  WHERE  b.color = 'green';`
    },
  
    // 3 a-d
    {
      id: "3a",
      set: 3,
      title: "3(a) Drop comm column from emp table.",
      question: "Drop comm column from emp table.",
      answer: `ALTER TABLE emp
  DROP COLUMN comm;`
    },
    {
      id: "3b",
      set: 3,
      title: "3(b) Delete row with empid 7499.",
      question: "Delete a row who is having empid as 7499.",
      answer: `DELETE FROM emp
  WHERE  eid = 7499;`
    },
    {
      id: "3c",
      set: 3,
      title: "3(c) Empname, deptno, location.",
      question: "List the empname, deptno, location.",
      answer: `SELECT e.ename,
         e.did   AS deptno,
         d.location
  FROM   emp  e
         JOIN dept d ON e.did = d.did;`
    },
    {
      id: "3d",
      set: 3,
      title: "3(d) Number of employees for each job.",
      question: "Find the number of employees for each job.",
      answer: `SELECT job,
         COUNT(*) AS no_of_employees
  FROM   emp
  GROUP  BY job;`
    },
  
    // 4 a-d
    {
      id: "4a",
      set: 4,
      title: "4(a) Youngest sailor age per rating.",
      question: "Find the age of the youngest sailor for each rating level.",
      answer: `SELECT rating,
         MIN(age) AS youngest_age
  FROM   sailors
  GROUP  BY rating;`
    },
    {
      id: "4b",
      set: 4,
      title: "4(b) Sailors older than oldest rating 10 sailor.",
      question: "Find the names of sailors who are older than the oldest sailor with rating of 10.",
      answer: `SELECT sname
  FROM   sailors
  WHERE  age > (
           SELECT MAX(age)
           FROM   sailors
           WHERE  rating = 10
         );`
    },
    {
      id: "4c",
      set: 4,
      title: "4(c) Average age of all sailors.",
      question: "Find the avg age of all sailors.",
      answer: `SELECT AVG(age) AS avg_age
  FROM   sailors;`
    },
    {
      id: "4d",
      set: 4,
      title: "4(d) Sailors whose rating is better than some 'Horatio'.",
      question: "Find the sailors whose rating is better than some sailor called 'Horatio'.",
      answer: `SELECT DISTINCT s1.sname
  FROM   sailors s1
  WHERE  s1.rating > SOME (
           SELECT s2.rating
           FROM   sailors s2
           WHERE  s2.sname = 'Horatio'
         );`
    },
  
    // 5 a-d
    {
      id: "5a",
      set: 5,
      title: "5(a) Emp names and hiredate in descending order of hiredate.",
      question: "List the emp names and hiredate in descending order of hiredate.",
      answer: `SELECT ename,
         hiredate
  FROM   emp
  ORDER  BY hiredate DESC;`
    },
    {
      id: "5b",
      set: 5,
      title: "5(b) Delete emp details whose deptno is 20.",
      question: "Delete the emp details whose deptno is 20.",
      answer: `DELETE FROM emp
  WHERE  did = 20;`
    },
    {
      id: "5c",
      set: 5,
      title: "5(c) Different jobs available in emp table.",
      question: "List the different jobs available in the emp table.",
      answer: `SELECT DISTINCT job
  FROM   emp;`
    },
    {
      id: "5d",
      set: 5,
      title: "5(d) Average salary job wise.",
      question: "List the average salary job wise.",
      answer: `SELECT job,
         AVG(sal) AS avg_sal
  FROM   emp
  GROUP  BY job;`
    },
  
    // 6 a-d
    {
      id: "6a",
      set: 6,
      title: "6(a) Names of sailors who have reserved at least one boat.",
      question: "Find the names of sailors who have reserved at least one boat.",
      answer: `SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid;`
    },
    {
      id: "6b",
      set: 6,
      title: "6(b) Ages of sailors whose name begins and ends with 'b'.",
      question: "Find the ages of sailors whose name begins and ends with 'b'.",
      answer: `SELECT age
  FROM   sailors
  WHERE  sname LIKE 'b%b';`
    },
    {
      id: "6c",
      set: 6,
      title: "6(c) Sids of sailors who reserved red but not green boat (MINUS).",
      question: "Find the sids of all the sailors who have reserved a red boat but not green boat using set operations (minus).",
      answer: `SELECT DISTINCT r.sid
  FROM   reserves r
         JOIN boats b ON r.bid = b.bid
  WHERE  b.color = 'red'
  MINUS
  SELECT DISTINCT r.sid
  FROM   reserves r
         JOIN boats b ON r.bid = b.bid
  WHERE  b.color = 'green';`
    },
    {
      id: "6d",
      set: 6,
      title: "6(d) Drop a column from sailors table.",
      question: "Drop a column from sailors table.",
      answer: `ALTER TABLE sailors
  DROP COLUMN rating;`
    },
  
    // 7 a-d
    {
      id: "7a",
      set: 7,
      title: "7(a) Max sal of employee working as a salesman.",
      question: "List the max sal of employee working as a salesman.",
      answer: `SELECT MAX(sal) AS max_sal_salesman
  FROM   emp
  WHERE  job = 'SALESMAN';`
    },
    {
      id: "7b",
      set: 7,
      title: "7(b) Alter sal field from integer to real.",
      question: "Alter the sal field of the emp from integer to real.",
      answer: `ALTER TABLE emp
  MODIFY sal NUMBER(10,2);`
    },
    {
      id: "7c",
      set: 7,
      title: "7(c) Total, max, min, avg sal job wise.",
      question: "List the total sal, max sal, min sal, avg sal, of emp job wise.",
      answer: `SELECT job,
         SUM(sal) AS total_sal,
         MAX(sal) AS max_sal,
         MIN(sal) AS min_sal,
         AVG(sal) AS avg_sal
  FROM   emp
  GROUP  BY job;`
    },
    {
      id: "7d",
      set: 7,
      title: "7(d) Dept num and number of employees working in each dept.",
      question: "List the dept num and num of employees working in each dept.",
      answer: `SELECT did       AS deptno,
         COUNT(*)  AS no_of_employees
  FROM   emp
  GROUP  BY did;`
    },
  
    // 8 a-d
    {
      id: "8a",
      set: 8,
      title: "8(a) Names of sailors who reserved red or green boat (set operations).",
      question: "Find the names of sailors who have reserved a red or a green boat (using set operations).",
      answer: `SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid
         JOIN boats    b ON r.bid = b.bid
  WHERE  b.color = 'red'
  UNION
  SELECT DISTINCT s.sname
  FROM   sailors  s
         JOIN reserves r ON s.sid = r.sid
         JOIN boats    b ON r.bid = b.bid
  WHERE  b.color = 'green';`
    },
    {
      id: "8b",
      set: 8,
      title: "8(b) Sailors whose rating is better than all 'Horatio' (ALL).",
      question: "Find sailors whose rating is better than all sailor called 'Horatio' (using set comparison operator ALL).",
      answer: `SELECT DISTINCT s1.sname
  FROM   sailors s1
  WHERE  s1.rating > ALL (
           SELECT s2.rating
           FROM   sailors s2
           WHERE  s2.sname = 'Horatio'
         );`
    },
    {
      id: "8c",
      set: 8,
      title: "8(c) Name and age of the oldest sailor.",
      question: "Find the name and age of the oldest sailor.",
      answer: `SELECT sname,
         age
  FROM   sailors
  WHERE  age = (
           SELECT MAX(age)
           FROM   sailors
         );`
    },
    {
      id: "8d",
      set: 8,
      title: "8(d) Age of youngest sailor for each rating level.",
      question: "Find the age of the youngest sailor for each rating level.",
      answer: `SELECT rating,
         MIN(age) AS youngest_age
  FROM   sailors
  GROUP  BY rating;`
    },
  
    // 9 a-d
    {
      id: "9a",
      set: 9,
      title: "9(a) Emp names not eligible for commission.",
      question: "List the emp names who are not eligible for commission.",
      answer: `SELECT ename
  FROM   emp
  WHERE  comm IS NULL
     OR  comm = 0;`
    },
    {
      id: "9b",
      set: 9,
      title: "9(b) Dept number and number of employees working in each dept.",
      question: "List the dept number and number of employees working in each dept.",
      answer: `SELECT did       AS deptno,
         COUNT(*)  AS no_of_employees
  FROM   emp
  GROUP  BY did;`
    },
    {
      id: "9c",
      set: 9,
      title: "9(c) Avg sal for each job.",
      question: "List the avg sal for each job.",
      answer: `SELECT job,
         AVG(sal) AS avg_sal
  FROM   emp
  GROUP  BY job;`
    },
    {
      id: "9d",
      set: 9,
      title: "9(d) Emp and designation who does not report to anybody.",
      question: "List the name of emp and designation of the emp who does not report to anybody.",
      answer: `SELECT ename,
         job
  FROM   emp
  WHERE  mgr IS NULL;`
    },
  
    // 10 a-d
    {
      id: "10a",
      set: 10,
      title: "10(a) Youngest sailor who is eligible to vote.",
      question: "Find the age of youngest sailor who is eligible to vote.",
      answer: `SELECT MIN(age) AS youngest_voter_age
  FROM   sailors
  WHERE  age >= 18;`
    },
    {
      id: "10b",
      set: 10,
      title: "10(b) Sailors who have not reserved a red boat (Nested Queries).",
      question: "Find the names of sailors who have not reserved a red boat using Nested Queries.",
      answer: `SELECT sname
  FROM   sailors
  WHERE  sid NOT IN (
           SELECT DISTINCT r.sid
           FROM   reserves r
                  JOIN boats b ON r.bid = b.bid
           WHERE  b.color = 'red'
         );`
    },
    {
      id: "10c",
      set: 10,
      title: "10(c) Sailors whose name begins with D.",
      question: "Find the names of sailors whose name begins with D.",
      answer: `SELECT sname
  FROM   sailors
  WHERE  sname LIKE 'D%';`
    },
    {
      id: "10d",
      set: 10,
      title: "10(d) Drop the age column from sailors table.",
      question: "Drop the age column from sailors table.",
      answer: `ALTER TABLE sailors
  DROP COLUMN age;`
    }
  ];
  
  // ===== Rendering + Search + Copy =====
  const container = document.getElementById("qaContainer");
  const searchInput = document.getElementById("searchInput");
  
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  
  function highlight(text, term) {
    if (!term) return text;
    const pattern = new RegExp(escapeRegExp(term), "gi");
    return text.replace(pattern, match => `<mark>${match}</mark>`);
  }
  
  function render(filter = "") {
    container.innerHTML = "";
    const term = filter.trim().toLowerCase();
  
    qaData.forEach(item => {
      const haystack = (item.title + " " + item.question + " " + item.answer).toLowerCase();
      if (term && !haystack.includes(term)) return;
  
      const card = document.createElement("article");
      card.className = "card";
  
      const header = document.createElement("div");
      header.className = "card-header";
  
      const title = document.createElement("div");
      title.className = "card-title";
      title.innerHTML = highlight(item.title, term);
  
      const meta = document.createElement("div");
      meta.className = "card-meta";
      meta.textContent = `Set ${item.set} • ${item.id}`;
  
      header.appendChild(title);
      header.appendChild(meta);
  
      const body = document.createElement("div");
      body.className = "card-body";
  
      const qEl = document.createElement("div");
      qEl.className = "question";
      qEl.innerHTML = highlight(item.question, term);
  
      const label = document.createElement("div");
      label.className = "code-label";
      label.textContent = "SQL Answer";
  
      const codeWrap = document.createElement("div");
      codeWrap.className = "code-wrapper";
  
      const textarea = document.createElement("textarea");
      textarea.value = item.answer;
  
      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.textContent = "Copy";
  
      btn.addEventListener("click", () => {
        textarea.select();
        document.execCommand("copy");
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy"), 1000);
      });
  
      codeWrap.appendChild(textarea);
      codeWrap.appendChild(btn);
  
      body.appendChild(qEl);
      body.appendChild(label);
      body.appendChild(codeWrap);
  
      card.appendChild(header);
      card.appendChild(body);
      container.appendChild(card);
    });
  
    if (!container.hasChildNodes()) {
      const msg = document.createElement("p");
      msg.textContent = "No questions match your search.";
      container.appendChild(msg);
    }
  }
  
  render();
  
  searchInput.addEventListener("input", () => {
    render(searchInput.value);
  });
  