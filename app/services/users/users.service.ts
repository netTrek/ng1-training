
    export interface IUserVO {
        id:number;
        firstname:string;
        lastname:string;
        birthday:string;
        street:string;
        street_no:number;
        zip:number;
        city:string;
    }

    export interface IUsersProvider extends angular.IServiceProvider {
        setEndpoint (endpoint:string):void;
    }

    export interface IUsersService {
        getUsers():angular.IHttpPromise<Array<IUserVO>>;
    }

    class UsersService implements IUsersService {

        constructor(private $http:angular.IHttpService, private endpoint:string) {

        }

        getUsers():angular.IHttpPromise<Array<IUserVO>> {
            return this.$http.get(this.endpoint);
        }

    }

    export class UsersServiceProvider implements IUsersProvider {

        private endpoint:string = 'mock/data.json';

        public setEndpoint(endpoint:string):void {
            this.endpoint = endpoint;
        }

        /** @ngInject */
        public $get($http:angular.IHttpService):IUsersService {
            return new UsersService($http, this.endpoint);
        }
    }
