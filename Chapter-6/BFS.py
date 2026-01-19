from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def person_is_seller(name):
    """Перевіряє, чи закінчується ім'я на 'm'."""
    return name[-1] == 'm'

def search(name):
    """Пошук у ширину (BFS)."""
    # Створюємо нову чергу та додаємо туди всіх сусідів початкового вузла
    search_queue = deque(graph[name])
    # Цей список потрібен, щоб не перевіряти одну й ту саму людину двічі (уникнення циклів)
    searched = []
    
    while search_queue:
        # Виймаємо першу людину з черги
        person = search_queue.popleft()
        
        # Перевіряємо людину лише якщо вона ще не була перевірена
        if person not in searched:
            if person_is_seller(person):
                print(f"{person} is a mango seller!")
                return True
            else:
                # Додаємо всіх друзів цієї людини до черги пошуку
                search_queue += graph[person]
                # Помічаємо людину як перевірену
                searched.append(person)
                
    return False

# Запуск алгоритму
search("you")