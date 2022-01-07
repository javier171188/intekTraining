import { useState } from 'react';



function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    function saveItem(newItem) {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return [
        item,
        saveItem,
    ];
}

function useSessionStorage(itemName, initialValue) {
    const sessionStorageItem = sessionStorage.getItem(itemName);

    let parsedItem;
    if (!sessionStorageItem) {
        sessionStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(sessionStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    function saveItem(newItem) {
        const stringifiedItem = JSON.stringify(newItem);
        sessionStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return [
        item,
        saveItem,
    ];
}

function useIndexDB(initialIndex = '0') {
    const [indexDB, setIndexDB] = useState(initialIndex);

    return [
        indexDB,
        setIndexDB
    ]
}

module.exports = {
    useLocalStorage,
    useSessionStorage,
    useIndexDB
}