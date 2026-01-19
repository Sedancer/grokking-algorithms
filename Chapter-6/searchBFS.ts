import graph from './graf.ts';

type Graph = Record<string, string[]>;

/**
 * Функція імітує умову пошуку (наприклад, шукаємо людину, чиє ім'я закінчується на 'm')
 * Breadth-First Search (BFS)
 */
const isPersonSeller = (name: string): boolean => name.endsWith('m');

function searchBFS(graph: Graph, startNode: string): boolean {
  // Використовуємо масив як чергу (FIFO)
  let searchQueue: string[] = [...graph[startNode]];
  // Набір для відстеження вже перевірених вузлів (щоб не зациклитись)
  const searched = new Set<string>();

  while (searchQueue.length > 0) {
    const person = searchQueue.shift()!; // Виймаємо першого

    if (!searched.has(person)) {
      if (isPersonSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        // Додаємо всіх сусідів цієї людини в кінець черги
        searchQueue = [...searchQueue, ...graph[person]];
        searched.add(person);
      }
    }
  }

  return false;
}

// Виклик
searchBFS(graph, "you");