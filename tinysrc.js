class tinysrc {
    constructor(){
        this.api = "https://tinysrc.me/api/v1"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    
    async req(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data),
            }).then(res => res.text()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    
    async short_link(link){
        return (await this.req(`${this.api}/create`, {"url":link,"api_key":"","auth_required":0,"password":"","expiration_time":""}));
    }
    async stat_link(prefix,password){
        return (await this.req(`${this.api}/stat/${prefix}`, {"city":"","password":password}));
    }
    async register(username,email,firstname,lastname,password){
        return (await this.req(`${this.api}/stat/${prefix}`, {"username":username,"email":email,"firstname":firstname,"question":"","answer":"","lastname":lastname,"password":password,"confirm_password":password}));
    }
}
module.exports = {tinysrc};
