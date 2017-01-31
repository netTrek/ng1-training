
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
        getUser( userID:number ):angular.IHttpPromise<IUserVO>;
        createUser( user:IUserVO ):angular.IHttpPromise<IUserVO>;
    }

    class UsersService implements IUsersService {

        private userCache: ICacheObject;


        constructor(private $http:angular.IHttpService,
                    private $cacheFactory:angular.ICacheFactoryService,
                    private endpoint:string) {
            this.userCache = $cacheFactory ('userCache');
        }

        getUser( userID:number, force:boolean = false ):angular.IHttpPromise<IUserVO> {

            if ( force ) {
                this.userCache.remove( this.endpoint + userID );
            }


            var config = {

                url: this.endpoint + userID,
                cache: this.userCache,
                method: "GET",
                headers: {
                    'If-Modified-Since' : 'Tue, 31 Jan 2017 23:19:53 GMT'  //Sat, 20 Jul 2013 12:19:09 GMT
                }

            };

            console.log ( this.userCache.info() );

            var promise:angular.IHttpPromise<IUserVO> = this.$http ( config );

            promise.then (
                (data:any)=> {           //callback 4 success
                    console.debug ( "** successfull ", this.endpoint, " call with result " , data );
                    console.log ( this.userCache.info(),
                        this.userCache,
                        this.userCache.get (this.endpoint + userID ));
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
        $get($http:angular.IHttpService,
             $cacheFactory:angular.ICacheFactoryService):IUsersService {
            return new UsersService($http, $cacheFactory, this.endpoint);
        }
    }
