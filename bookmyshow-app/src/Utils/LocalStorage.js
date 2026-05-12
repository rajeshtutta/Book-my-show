export const loadData = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        }

        return undefined;

    } catch (err) {
        return undefined;
    }
};

export const saveData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
};
