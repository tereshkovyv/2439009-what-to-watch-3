export enum APIRoute {
    Films = '/films',
    Login = '/login',
    Logout = '/logout',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export enum AppRoute {
  Player = '/player',
  MyList = '/myList',
  Login = '/login',
  Root = '/',
  Films = '/films',
  AddReview = '/addReview'
}

export enum NameSpace {
  Films = 'FILMS',
  User = 'USER',
  Comments = 'COMMENTS',
  Favorite = 'FAVORITE',
  Error = 'ERROR'
}
