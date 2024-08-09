export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const name of reportWithIterator) {
    employees.push(name);
  }

  return employees.join(' | ');
}
