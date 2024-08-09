
rt default function createIteratorObject(report) {
  const names = [];
  for (const department of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[department]) {
      names.push(emp);
    }
  }

  return names;
}
