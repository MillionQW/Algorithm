function dealCookie(name, value, opt) {
    if (value !== undefined) {
        opt = opt || {};
        if (value === null) {
            value = '';
            opt.expires = -1;
        }
        let expires = opt.expires;
        // expires 存在，且是数值或者 Date 类型
        if (expires && (typeof expires === 'number' || expires.toUTCString)) {
            let date;
            if (typeof expires === 'number') {
                date = new Date();
                date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
            } else {
                date = expires;
            }
            expires = `;expires=${date.toUTCString()}`;
        }
        let domain = `;domain=${opt.domain || location.hostname}`;
        let path = `;path=${opt.path || '/'}`;
        let secure = `;secure=${opt.secure || ''}`;
        // encodeURIComponent 防止一些浏览器无法存储中文
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        let cookies = document.cookie.split(';');
        let cookieValue
        for (let i = 0; i < cookies.length; i++) {
            let cookie = (cookies[i] || "").replace(/^\s+|s+$/g, '');
            // 为什么要切到 '=',防止匹配到开头相同的 cookie 值
            if (cookie.substring(0, name.length + 1) === `${name}=`) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            }
        }
        return cookieValue;
    }
}