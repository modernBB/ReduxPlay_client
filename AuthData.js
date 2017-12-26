let _auth_instanse = null;
class AuthData{
    constructor(){
        this.GUID = -1;
        this.name = "";
        this.status = 0;
        this.auth = false;
        this.organization = {id:0,rank:0};
        this.homes = new Array();
    }

    toInline(){
        return {GUID:this.GUID,name:this.name,status:this.status,auth:this.auth,organization:this.organization,homes:this.homes};
    }
    static get(){
        if(_auth_instanse == null)
            _auth_instanse = new AuthData();
        return _auth_instanse;
    }
}

exports = AuthData.get();