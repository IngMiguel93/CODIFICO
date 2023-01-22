export class Users{
  /**
   *
   */
  constructor(
          public message: string ,
          public documentation_url: string ,
          public login: string ,
          public id: number ,
          public node_id: string ,
          public avatar_url: string ,
          public created_at: string ,
          public name: string ,
          public location: string ,
          public twitter_username:string ,
          public blog: string ,
          public public_repos: number,
          public followers: number,
          public following: number
  ) {

  }
}
