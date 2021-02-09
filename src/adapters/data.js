export const days = [
    {
        "id": 1,
        "date": "9_0_2021",
        "list_tasks": [
            {
                "id": 1,
                "type": 1,
                "text": "Помыть посуду"
            },
            {
                "id": 2,
                "type": 2,
                "text": "Покормить кошку"
            },
            {
                "id": 3,
                "type": 2,
                "text": "Покормить кошку Basya"
            }
        ]
    },
    {
        "id": 2,
        "date": "12_0_2021",
        "list_tasks": [
            {
                "id": 4,
                "type": 3,
                "text": "Купить воды"
            }
        ]
    },
];

export const keys = [
    {
        "id": 1,
        "type": 1,
        "text": "Задача",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/></svg>'
    },
    {
        "id": 2,
        "type": 2,
        "text": "Выполнено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'
    },
    {
        "id": 3,
        "type": 3,
        "text": "Перенесено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>'
    },
    {
        "id": 4,
        "type": 4,
        "text": "Отменено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'
    },
    {
        "id": 5,
        "type": 5,
        "text": "Событие",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>'
    },
    {
        "id": 6,
        "type": 6,
        "text": "Важно",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></svg>'
    },
];

export const collections = [
    {
        "id": 1,
        "date": "11_2020",
        "name": "Зарядка каждое утро",
        "select_date": [
            {
                date: "9_11_2020",
                id: 1
            },
            {
                date: "10_0_2021",
                id: 2
            }
        ]
    },
    {
        "id": 2,
        "date": "0_2021",
        "name": "Сон 8 часов",
        "select_date": [
            {
                date: "11_11_2020",
                id: 3
            },
            {
                date: "12_0_2021",
                id: 4
            }

        ]
    }
];

export const tasksForMonth = [
    {
        "id": 1,
        "date": "0_2021",
        "text":"купить кофе",
        "type":2
    },
    {
        "id": 2,
        "date": "0_2021",
        "text":"Оплатить комуналку",
        "type":1

    }
]