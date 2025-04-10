// 封装fetch请求
function getFetch(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(res => {
                if (res.ok) {
                    resolve(res.json());
                } else {
                    reject(res);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}
module.exports = getFetch;
