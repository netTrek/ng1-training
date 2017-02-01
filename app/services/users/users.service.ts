
    import ICacheFactoryService = angular.ICacheFactoryService;
    import ICacheObject = angular.ICacheObject;
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
        getUser( id:number ):angular.IHttpPromise<IUserVO>;
        createUsers( user:IUserVO ):angular.IHttpPromise<IUserVO>;
    }

    class UsersService implements IUsersService {

        private myCache : ICacheObject;
        
        constructor(private $http:angular.IHttpService, 
                    private $cacheFactory: ICacheFactoryService, 
                    private endpoint:string) {
            this.myCache = $cacheFactory( 'mySuperCache' );
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

        getUser( id:number ):angular.IHttpPromise<IUserVO> {



            var config = {

                url: this.endpoint + '/' + id,
                method: "GET",
                cache: this.myCache,
                headers: {
                    'If-Modified-Since' : 'Tue, 31 Jan 2017 23:19:53 GMT'  //Sat, 20 Jul 2013 12:19:09 GMT
                }
            };

            var promise:angular.IHttpPromise<IUserVO> = this.$http ( config );

            promise.then (
                (data:any)=> {           //callback 4 success
                    console.debug ( "** successfull ", this.endpoint, " call with result " , data );
                    console.info ( this.myCache.get( config.url ) );
                },
                (data)=> {           //callback 4 error
                    console.debug ( "** failure in ", this.endpoint, " call with error" , data );
                }
            );

            return promise;


            // return this.$http.get(this.endpoint);
        }

        createUsers( user:IUserVO ):angular.IHttpPromise<IUserVO> {

            var config = {

                url: this.endpoint,
                method: "POST",
                data: user

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


            // return this.$http.get(this.endpoint);
        }

    }

    export class UsersServiceProvider implements IUsersProvider {

        private endpoint:string = 'mock/users.json?';

        public setEndpoint(endpoint:string):void {
            this.endpoint = endpoint;
        }

        /** @ngInject */
        public $get($http:angular.IHttpService, $cacheFactory: ICacheFactoryService ):IUsersService {
            return new UsersService($http, $cacheFactory, this.endpoint);
        }
    }
