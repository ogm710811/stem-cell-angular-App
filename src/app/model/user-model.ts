export class User {
    private id       : String;
    private updated  : Date;
    private created  : Date;
    private username : String;
    private fullName : String;
    private role     : String;

    constructor( id: String, updated_at: Date, created_at: Date,
                 username: String, fullName: String, role: String ){
        this.id         = id;
        this.updated    = updated_at;
        this.created    = created_at;
        this.username   = username;
        this.fullName   = fullName;
        this.role       = role;
    }

    public getId() : String {
        return this.id;
    }
    public setId( newId: String ){
        this.id = newId;
    }
    public getUpdatedAt() : Date {
        return this.updated;
    }
    public setUpdatedAt( newUpdated: Date ){
        this.updated = newUpdated;
    }
    public getCreatedAt() : Date {
        return this.created;
    }
    public setCreatedAt( newCreated: Date ){
        this.created = newCreated;
    }
    public getUsername() : String {
        return this.username;
    }
    public setUsername( newUsername: String ){
        this.username = newUsername;
    }
    public getFullName() : String {
        return this.fullName;
    }
    public setFullName( newFullName: String ){
        this.username = newFullName;
    }
    public getRole() : String {
        return this.role;
    }
    public setRole( newRole: String ){
        this.role = newRole;
    }

}