function ajax(options) {
    const defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {},
    };
    Object.assign(defaults, options);
    const { type, url, data, header } = defaults;
    const params = Object.entries(data)
        .map(item => {
            return `${item[0]}=${item[1]}`;
        })
        .join('&');
    return new Promise((resove, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(type, type === 'get' ? `${url}?${params}` : url);
        if (type === 'post') {
            xhr.setRequestHeader('Content-Type', header['Content-Type']);
            if (header['Content-Type'] === 'aplication/json') {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send(params);
            }
        } else {
            xhr.send();
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resove(xhr.responseText);
            } else {
                reject(xhr.responseText);
            }
        };
    });
}
