import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const localStorageItem = localStorage.getItem(key);

    let parsedItem;
    if (!localStorageItem) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    function saveItem(newItem) {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(key, stringifiedItem);
        setItem(newItem);
    };

    return [
        item,
        saveItem,
    ];
}

function useSessionStorage(key, initialValue) {
    const sessionStorageItem = sessionStorage.getItem(key);

    let parsedItem;
    if (!sessionStorageItem) {
        sessionStorage.setItem(key, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(sessionStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    function saveItem(newItem) {
        const stringifiedItem = JSON.stringify(newItem);
        sessionStorage.setItem(key, stringifiedItem);
        setItem(newItem);
    };

    return [
        item,
        saveItem,
    ];
}

function useIndexDB(index, initialIndex) {
    cons[indexDB, setIndexDB] = useState(initialIndex);

    return [
        indexDB,
        setIndexDB
    ]
}
