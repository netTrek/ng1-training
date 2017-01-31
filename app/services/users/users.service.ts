
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
        getUser( userID:number ):angular.IHttpPromise<IUserVO>;
        createUser( user:IUserVO ):angular.IHttpPromise<IUserVO>;
    }

    class UsersService implements IUsersService {

        constructor(private $http:angular.IHttpService, private endpoint:string) {

        }

        getUser( userID:number ):angular.IHttpPromise<IUserVO> {


            var config = {

                url: this.endpoint.trim().replace( /\/*$/g, '') + '/' + userID,
                cache: true,
                method: "GET"

            };

            var promise:angular.IHttpPromise<IUserVO> = this.$http ( config );

            promise.then (
                (data:angular.IHttpPromiseCallbackArg<IUserVO> )=> {           //callback 4 success
                    console.debug ( "** successfull ", config.url, " call with result " , data );
                },
                (data)=> {           //callback 4 error
                    console.debug ( "** failure in ", this.endpoint, " call with error" , data );
                }
            );

            return promise;
        }

        createUser( user:IUserVO ):angular.IHttpPromise<IUserVO> {

            var config =
                    {
                        url: this.endpoint,
                        method: "POST",
                        data: user,
                        params: {
                            token: 12345
                        }
                    };

            var promise:angular.IHttpPromise<IUserVO> = this.$http ( config );

            promise.then (
                (data:any)=> {           //callback 4 success
                    console.debug ( "** successfull ", this.endpoint, " call with result " , data );
                },
                (data)=> {           //callback 4 error
                    console.debug ( "** failure in ", this.endpoint, " call with error" , data );
                }
            );

            return promise;
        }

        getUsers():angular.IHttpPromise<Array<IUserVO>> {

            var config = {
                url: this.endpoint,
                method: "GET" //default

            };
            var promise:angular.IHttpPromise<Array<IUserVO>> = this.$http ( config );

            promise.then (
                (data:any)=> {           //callback 4 success
                    console.debug ( "** successfull ", this.endpoint, " call with result " , data );
                },
                (data)=> {           //callback 4 error
                    console.debug ( "** failure in ", this.endpoint, " call with error" , data );
                }
            );

            return promise;


            // return this.$http.get(this.endpoint);
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
