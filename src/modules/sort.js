import { compareAsc } from 'date-fns';

export default function sortTaskArray(tasks) {
  return tasks.sort((a, b) => {
    const dateComparison = compareAsc(a.dueDate, b.dueDate);
    // soonest tasks are displayed first, based on assumption deadlines shouldn't be missed
    // for tasks on the same day, we fall back to the priority to help the user triage
    if (dateComparison === 0) {
      return a.priority - b.priority;
    }
    return dateComparison;
  });
}
