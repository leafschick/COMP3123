const employees = [
  { id: 1, firstName: "Pritesh", lastName: "Patel",  email: "pritesh@gmail.com", Salary: 5000 },
  { id: 2, firstName: "Krish",   lastName: "Lee",    email: "krish@gmail.com",   Salary: 4000 },
  { id: 3, firstName: "Racks",   lastName: "Jacson", email: "racks@gmail.com",   Salary: 5500 },
  { id: 4, firstName: "Denial",  lastName: "Roast",  email: "denial@gmail.com",  Salary: 9000 }
];

function fetchAllStaff() { return employees; }
function listStaffNamesAsc() {
  return employees.map(e => `${e.firstName} ${e.lastName}`).sort((a,b)=>a.localeCompare(b));
}
function calculateTotalPayroll() {
  return employees.reduce((s,e)=>s + Number(e.Salary||0), 0);
}

module.exports = { fetchAllStaff, listStaffNamesAsc, calculateTotalPayroll };