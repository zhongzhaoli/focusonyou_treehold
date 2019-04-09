const api = {
    get_data: (id) => {
        let url = "https://api.yuntunwj.com/focusonyou/public/treehold/" + id;
        return ajax(url);
    },
    send_mes: (id, content) => {
        let url = "https://api.yuntunwj.com/focusonyou/public/tree_send/" + id;
        return ajax(url, "POST", {"content": content});
    }
};