const api = {
    get_data: (id) => {
        let url = "http://localhost:7889/treehold/" + id;
        return ajax(url);
    },
    send_mes: (id, content) => {
        let url = "http://localhost:7889/tree_send/" + id;
        return ajax(url, "POST", {"content": content});
    }
};